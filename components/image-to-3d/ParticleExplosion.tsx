import React, { useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// --- SHADERS ---

const vertexShader = `
  uniform float uTime;
  uniform float uProgress; 
  uniform float uPixelRatio; 

  attribute vec3 aRandom; 
  attribute vec3 aCenter; 
  attribute vec3 aColor;
  attribute float aSize;  
  attribute float aSpeed; 

  varying vec3 vColor;
  varying float vAlpha;

  // Simplex Noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) { 
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 = v - i + dot(i, C.xxx) ;
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i); 
    vec4 p = permute( permute( permute( 
              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                  dot(p2,x2), dot(p3,x3) ) );
  }

  void main() {
    vec3 pos;
    float phase = uProgress;

    // --- PHASE 1: EXPLOSION (0.0 -> 0.4) ---
    // Start at Center, Blast OUT
    if (phase <= 0.4) {
        float t = phase / 0.4;
        t = 1.0 - pow(1.0 - t, 4.0); // Fast Pop
        pos = mix(aCenter, aRandom, t);
    } 
    // --- PHASE 2: HOVER (0.4 -> 0.65) ---
    // Float
    else if (phase <= 0.65) {
        pos = aRandom;
    }
    // --- PHASE 3: IMPLOSION TO CENTER (0.65 -> 1.0) ---
    // Suck BACK IN to Center (where the 3D model is appearing)
    else {
        float t = (phase - 0.65) / 0.35;
        t = t * t * (3.0 - 2.0 * t); // Smooth ease
        pos = mix(aRandom, aCenter, t);
    }

    // --- TURBULENCE ---
    // Make them look like floating dust
    float noiseScale = 1.5; 
    float noiseTime = uTime * 0.15 * aSpeed; 
    
    // Fade noise at end so they hit the center accurately
    float noiseStrength = 1.0;
    if (phase > 0.8) noiseStrength = 1.0 - ((phase - 0.8) / 0.2); 
    if (phase < 0.1) noiseStrength = phase / 0.1;

    pos.x += snoise(vec3(pos.x * noiseScale, noiseTime, 0.0)) * noiseStrength * 0.5;
    pos.y += snoise(vec3(pos.y * noiseScale, noiseTime, 1.0)) * noiseStrength * 0.5;
    pos.z += snoise(vec3(pos.z * noiseScale, noiseTime, 2.0)) * noiseStrength * 0.5;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Scale Logic (Dusty look)
    gl_PointSize = (5.0 * aSize + 2.0) * (10.0 / -mvPosition.z) * uPixelRatio;

    vColor = aColor;
    
    // FADE OUT at the very end
    // This ensures they vanish right as the 3D model becomes fully opaque
    vAlpha = 1.0;
    if (phase > 0.90) {
       vAlpha = 1.0 - (phase - 0.90) / 0.10;
    }
  }
`;

const fragmentShader = `
  varying vec3 vColor;
  varying float vAlpha;
  
  void main() {
    // Soft Glow
    vec2 cxy = 2.0 * gl_PointCoord - 1.0;
    float r = dot(cxy, cxy);
    if (r > 1.0) discard;

    float glow = 1.0 - r;
    glow = pow(glow, 1.5); 

    gl_FragColor = vec4(vColor, vAlpha * glow);
  }
`;

// --- DATA GENERATION ---

const generateParticles = (count: number) => {
  const centers = new Float32Array(count * 3);
  const randoms = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const speeds = new Float32Array(count);

  const palette = [
    new THREE.Color("#2DFFA7"), // Mint Green
    new THREE.Color("#2DFFA7"),
    new THREE.Color("#5EFFC0"),
    new THREE.Color("#00CC88"),
    new THREE.Color("#FFFFFF"),
  ];

  for (let i = 0; i < count; i++) {
    // 1. Center (Start Point)
    centers[i * 3] = (Math.random() - 0.5) * 0.1;
    centers[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
    centers[i * 3 + 2] = 0;

    // 2. Random (Explosion Cloud)
    // Wide spherical distribution
    const r = 10.0 + Math.random() * 10.0;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    randoms[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    randoms[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    randoms[i * 3 + 2] = r * Math.cos(phi) * 0.5;

    // 3. Colors & Attributes
    const color = palette[Math.floor(Math.random() * palette.length)];
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;

    sizes[i] = Math.random();
    speeds[i] = 0.2 + Math.random() * 0.8;
  }

  return { centers, randoms, colors, sizes, speeds };
};

interface ParticleSystemProps {
  scrollRef: React.MutableRefObject<number>;
}

const ParticleSystem = ({ scrollRef }: ParticleSystemProps) => {
  const mesh = useRef<THREE.Points>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const { gl } = useThree();
  const count = 6000; // Dense dust

  const data = useMemo(() => generateParticles(count), []);

  useEffect(() => {
    if (material.current) {
      material.current.uniforms.uPixelRatio.value = gl.getPixelRatio();
    }
  }, [gl]);

  useFrame((state) => {
    if (material.current) {
      material.current.uniforms.uTime.value = state.clock.elapsedTime;

      const rawScroll = scrollRef.current;

      // MAPPING: 0.72 -> 0.95
      // This timing aligns with the Index.tsx model fade-in
      let p = 0;
      const start = 0.72;
      const end = 0.95;

      if (rawScroll < start) p = 0;
      else if (rawScroll > end) p = 1;
      else p = (rawScroll - start) / (end - start);

      material.current.uniforms.uProgress.value = THREE.MathUtils.lerp(
        material.current.uniforms.uProgress.value,
        p,
        0.08
      );
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[data.centers, 3]}
        />
        <bufferAttribute attach="attributes-aCenter" args={[data.centers, 3]} />
        <bufferAttribute attach="attributes-aRandom" args={[data.randoms, 3]} />
        <bufferAttribute attach="attributes-aColor" args={[data.colors, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[data.sizes, 1]} />
        <bufferAttribute attach="attributes-aSpeed" args={[data.speeds, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending} // Glow effect
        uniforms={{
          uTime: { value: 0 },
          uProgress: { value: 0 },
          uPixelRatio: { value: 1 },
        }}
      />
    </points>
  );
};

const ParticleExplosion = React.memo(
  ({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) => {
    return (
      <div
        className="fixed inset-0 pointer-events-none z-[40]"
        aria-hidden="true"
      >
        <Canvas
          camera={{ position: [0, 0, 15], fov: 45 }}
          gl={{
            alpha: true,
            antialias: false,
            powerPreference: "high-performance",
          }}
          dpr={[1, 2]}
        >
          <ParticleSystem scrollRef={scrollRef} />
        </Canvas>
      </div>
    );
  }
);

export default ParticleExplosion;
