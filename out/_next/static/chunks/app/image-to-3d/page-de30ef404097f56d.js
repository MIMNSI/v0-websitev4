(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[250],{885:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>T});var s=a(5155),r=a(9092),i=a.n(r),o=a(2115),n=a(8500),l=a.n(n),c=a(4474),d=a(9658),x=a(6088),m=a(858),h=a(6296),p=a(1641),u=a(9003),f=a(3546),b=a(316),v=a(6609),g=a(3953);let y=({image:e,label:t,index:a,stage:r})=>{let i=((e,t)=>{switch(t){case"hidden":return{x:0,y:0,opacity:0,scale:1,rotate:0,rotateY:-90};case"single":if(0===e)return{x:0,y:0,opacity:1,scale:1,rotate:0,rotateY:0};return{x:0,y:0,opacity:0,scale:.5,rotate:0,rotateY:-90};case"two":if(0===e)return{x:-80,y:20,opacity:1,scale:1,rotate:-5,rotateY:0};if(1===e)return{x:80,y:-20,opacity:1,scale:1,rotate:5,rotateY:0};return{x:0,y:0,opacity:0,scale:.5,rotate:0,rotateY:0};case"three":if(0===e)return{x:-100,y:-60,opacity:1,scale:.9,rotate:-10,rotateY:0};if(1===e)return{x:100,y:-60,opacity:1,scale:.9,rotate:10,rotateY:0};if(2===e)return{x:0,y:80,opacity:1,scale:1,rotate:0,rotateY:0};return{x:0,y:0,opacity:0,scale:.5,rotate:0,rotateY:0};case"bento":let a=[{x:-240,y:-140},{x:240,y:-140},{x:0,y:0},{x:-240,y:140},{x:240,y:140}];return{x:a[e].x,y:a[e].y,opacity:1,scale:2===e?1.1:.9,rotate:0,rotateY:0};case"center":return{x:0,y:0,opacity:1,scale:.2,rotate:0,rotateY:0};default:return{x:0,y:0,opacity:0,scale:0,rotate:0,rotateY:0}}})(a,r);return(0,s.jsx)(g.P.div,{className:"absolute rounded-3xl overflow-hidden border-4 border-white/10 bg-card shadow-2xl origin-center w-24 h-32 md:w-40 md:h-52 lg:w-56 lg:h-72",initial:!1,animate:{x:i.x,y:i.y,opacity:i.opacity,scale:i.scale,rotate:i.rotate,rotateY:i.rotateY},transition:{type:"spring",stiffness:150,damping:20,mass:1},style:{left:"50%",top:"50%",translate:"-50% -50%",boxShadow:"0 20px 50px -12px rgba(0,0,0,0.5)",perspective:1e3,backfaceVisibility:"hidden",zIndex:2===a?20:10},children:(0,s.jsxs)("div",{className:"relative w-full h-full",children:[(0,s.jsx)("img",{src:e,alt:t,className:"w-full h-full object-cover"}),(0,s.jsx)("div",{className:"absolute inset-0 border-[3px] border-primary/30 rounded-3xl"})]})})};var w=a(8625),j=a(6275),N=a(5269);let k=`
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
`,z=`
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
`,S=({scrollRef:e})=>{let t=(0,o.useRef)(null),a=(0,o.useRef)(null),{gl:r}=(0,w.C)(),i=(0,o.useMemo)(()=>(e=>{let t=new Float32Array(18e3),a=new Float32Array(18e3),s=new Float32Array(18e3),r=new Float32Array(6e3),i=new Float32Array(6e3),o=[new N.Q1f("#2DFFA7"),new N.Q1f("#2DFFA7"),new N.Q1f("#5EFFC0"),new N.Q1f("#00CC88"),new N.Q1f("#FFFFFF")];for(let e=0;e<6e3;e++){t[3*e]=(Math.random()-.5)*.1,t[3*e+1]=(Math.random()-.5)*.1,t[3*e+2]=0;let n=10+10*Math.random(),l=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1);a[3*e]=n*Math.sin(c)*Math.cos(l),a[3*e+1]=n*Math.sin(c)*Math.sin(l),a[3*e+2]=n*Math.cos(c)*.5;let d=o[Math.floor(Math.random()*o.length)];s[3*e]=d.r,s[3*e+1]=d.g,s[3*e+2]=d.b,r[e]=Math.random(),i[e]=.2+.8*Math.random()}return{centers:t,randoms:a,colors:s,sizes:r,speeds:i}})(0),[]);return(0,o.useEffect)(()=>{a.current&&(a.current.uniforms.uPixelRatio.value=r.getPixelRatio())},[r]),(0,w.D)(t=>{if(a.current){a.current.uniforms.uTime.value=t.clock.elapsedTime;let s=e.current,r=0;r=s<.72?0:s>.95?1:(s-.72)/.22999999999999998,a.current.uniforms.uProgress.value=N.cj9.lerp(a.current.uniforms.uProgress.value,r,.08)}}),(0,s.jsxs)("points",{ref:t,children:[(0,s.jsxs)("bufferGeometry",{children:[(0,s.jsx)("bufferAttribute",{attach:"attributes-position",args:[i.centers,3]}),(0,s.jsx)("bufferAttribute",{attach:"attributes-aCenter",args:[i.centers,3]}),(0,s.jsx)("bufferAttribute",{attach:"attributes-aRandom",args:[i.randoms,3]}),(0,s.jsx)("bufferAttribute",{attach:"attributes-aColor",args:[i.colors,3]}),(0,s.jsx)("bufferAttribute",{attach:"attributes-aSize",args:[i.sizes,1]}),(0,s.jsx)("bufferAttribute",{attach:"attributes-aSpeed",args:[i.speeds,1]})]}),(0,s.jsx)("shaderMaterial",{ref:a,vertexShader:k,fragmentShader:z,transparent:!0,depthWrite:!1,blending:N.EZo,uniforms:{uTime:{value:0},uProgress:{value:0},uPixelRatio:{value:1}}})]})},C=o.memo(({scrollRef:e})=>(0,s.jsx)("div",{className:"fixed inset-0 pointer-events-none z-[40]","aria-hidden":"true",children:(0,s.jsx)(j.Hl,{camera:{position:[0,0,15],fov:45},gl:{alpha:!0,antialias:!1,powerPreference:"high-performance"},dpr:[1,2],children:(0,s.jsx)(S,{scrollRef:e})})}));var M=a(1337);function A({className:e,...t}){return(0,s.jsx)("div",{className:(0,M.cn)("animate-pulse rounded-md bg-muted",e),...t})}let P=({opacity:e})=>{let[t,a]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=document.createElement("script");return e.type="module",e.src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js",e.async=!0,e.onload=()=>{a(!0)},document.head.appendChild(e),()=>{document.head.removeChild(e)}},[]),(0,s.jsxs)("div",{className:"relative w-full h-full flex items-center justify-center pointer-events-auto",style:{opacity:e},children:[!t&&(0,s.jsx)("div",{className:"absolute inset-0 flex items-center justify-center z-10",children:(0,s.jsx)(A,{className:"w-64 h-64 rounded-xl bg-muted/20 animate-pulse"})}),t&&(0,s.jsx)("model-viewer",{src:"/models/output.glb",alt:"3D Model","shadow-intensity":"1","camera-controls":!0,"disable-zoom":!0,"auto-rotate":!0,"rotation-per-second":"10deg",style:{width:"100%",height:"100%",transition:"opacity 0.7s"},suppressHydrationWarning:!0})]})},_=({scrollProgress:e})=>{if(!(e<.6))return null;let t=Math.min(1,Math.max(0,(e-.1)/.1)),a=Math.min(1,Math.max(0,(e-.2)/.05)),r=1-t,i=1-Math.max(0,(a-.8)*5);return(0,s.jsx)("div",{className:"fixed inset-0 pointer-events-none z-20 flex flex-col items-center justify-center",role:"heading","aria-level":1,"aria-label":"Just 5 Images",children:(0,s.jsxs)("div",{className:"w-full max-w-7xl px-4 flex items-center justify-center perspective-1000",children:[(0,s.jsx)("div",{className:"flex-1 text-right relative z-10 pr-4",children:(0,s.jsx)(g.P.span,{"aria-hidden":"true",className:"inline-block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white whitespace-nowrap",style:{x:100*t,opacity:r,filter:`blur(${10*t}px)`},children:"Just"})}),(0,s.jsx)("div",{className:"flex-none relative z-20",children:(0,s.jsx)(g.P.div,{"aria-hidden":"true",className:"relative w-24 h-24 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-3xl border-4 border-primary bg-black/80 backdrop-blur-md flex items-center justify-center glow-card origin-center",style:{opacity:i,rotateY:90*a,scale:1+.1*t,transformStyle:"preserve-3d"},children:(0,s.jsx)("span",{className:"text-6xl sm:text-8xl md:text-[10rem] font-bold text-primary text-glow-mint backface-hidden mt-[-10px]",children:"5"})})}),(0,s.jsx)("div",{className:"flex-1 text-left relative z-10 pl-4",children:(0,s.jsx)(g.P.span,{"aria-hidden":"true",className:"inline-block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white whitespace-nowrap",style:{x:-100*t,opacity:r,filter:`blur(${10*t}px)`},children:"Images"})})]})})};var E=a(2356),F=a(6982);let D=[{image:"/images/front.jpg",label:"Front"},{image:"/images/back.jpg",label:"Back"},{image:"/images/right.jpg",label:"Right"},{image:"/images/top.jpg",label:"Top"},{image:"/images/left.jpg",label:"Left"}],R=b.Ik({email:b.Yj().email("Invalid email address"),phone:b.Yj().min(10,"Phone number must be at least 10 digits").max(15,"Phone number too long").regex(/^[0-9]+$/,"Digits only")});function T(){let[e,t]=(0,o.useState)(0),[a,r]=(0,o.useState)(!1),[n,b]=(0,o.useState)(!1),[g,w]=(0,o.useState)(!1),j=(0,o.useRef)(0),N=(0,o.useRef)(null),[k,z]=(0,o.useState)("hidden"),{register:S,handleSubmit:M,reset:A,formState:{errors:T}}=(0,u.mN)({resolver:(0,f.u)(R),defaultValues:{email:"",phone:""}});(0,o.useEffect)(()=>{let e=()=>{if(!N.current)return;let e=window.scrollY,a=N.current.scrollHeight-window.innerHeight;if(a<=0)return;let s=Math.min(Math.max(e/a,0),1);j.current=s,t(s),s<.25?z("hidden"):s<.35?z("single"):s<.45?z("two"):s<.55?z("three"):s<.65?z("bento"):z("center")};return window.addEventListener("scroll",e),e(),()=>window.removeEventListener("scroll",e)},[]);let Y=async e=>{w(!0);try{let t={Email:e.email,Phone:e.phone,Source:"Image-to-3D Page"},a=await (0,E.A)(t);a.success||200===a.status?(v.o.success("You're on the list!",{description:"We'll notify you when early access opens."}),b(!0),A()):v.o.error("Something went wrong",{description:a.message||"Please try again later."})}catch(e){v.o.error("Submission failed",{description:e.message||"Please check your connection."})}finally{w(!1)}},I=Math.min(1,Math.max(0,(e-.92)/.06));return(0,s.jsxs)("div",{ref:N,style:{height:"600vh"},className:"jsx-394e33762a50f5db relative bg-black min-h-screen",children:[(0,s.jsx)(i(),{id:"394e33762a50f5db",children:"footer{display:none!important}"}),(0,s.jsx)(F.default,{}),(0,s.jsxs)("div",{className:"jsx-394e33762a50f5db fixed inset-0 overflow-hidden bg-gradient-to-b from-black to-[#050a05]",children:[(0,s.jsx)("div",{className:"jsx-394e33762a50f5db absolute inset-0 opacity-[0.03] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:40px_40px]"}),(0,s.jsx)("div",{className:"jsx-394e33762a50f5db fixed right-6 top-1/2 -translate-y-1/2 z-[70] flex flex-col gap-4",children:[0,.3,.6,.9].map((t,a)=>(0,s.jsx)("button",{onClick:()=>(e=>{if(!N.current)return;let t=N.current.scrollHeight-window.innerHeight;window.scrollTo({top:t*e,behavior:"smooth"})})(t),"aria-label":`Scroll to section ${a+1}`,className:`jsx-394e33762a50f5db w-3 h-3 rounded-full transition-all duration-300 ${.15>Math.abs(e-t)?"bg-[#2dffa7] scale-125":"bg-white/20 hover:bg-white/50"}`},a))}),(0,s.jsx)("div",{style:{opacity:+(e<.1),transition:"opacity 0.5s"},className:"jsx-394e33762a50f5db fixed bottom-10 inset-x-0 z-[60] flex justify-center pointer-events-none",children:(0,s.jsxs)("div",{className:"jsx-394e33762a50f5db text-white/50 flex flex-col items-center gap-2 animate-bounce",children:[(0,s.jsx)("span",{className:"jsx-394e33762a50f5db text-xs uppercase tracking-widest font-sans",children:"Scroll to Explore"}),(0,s.jsx)(x.A,{className:"w-6 h-6"})]})}),(0,s.jsx)(_,{scrollProgress:e}),(0,s.jsx)("div",{style:{opacity:1-Math.max(0,(e-.7)/.05)},className:"jsx-394e33762a50f5db fixed inset-0 flex items-center justify-center pointer-events-none perspective-1000",children:(0,s.jsx)("div",{className:"jsx-394e33762a50f5db relative w-full h-full max-w-[100vw] flex items-center justify-center",children:D.map((e,t)=>(0,s.jsx)(y,{index:t,image:e.image,label:e.label,stage:k},t))})}),e>.72&&e<.98&&(0,s.jsx)(C,{scrollRef:j}),(0,s.jsxs)("div",{style:{opacity:Math.min(1,Math.max(0,(e-.92)/.05))},className:"jsx-394e33762a50f5db fixed top-24 inset-x-0 flex flex-col items-center justify-center z-[60] pointer-events-none",children:[(0,s.jsxs)("h2",{className:"jsx-394e33762a50f5db text-4xl md:text-6xl font-bold text-white tracking-tight mb-4 drop-shadow-2xl text-center font-display",children:["Real Life ",(0,s.jsx)("span",{className:"jsx-394e33762a50f5db text-[#2dffa7] inline-block",children:"To 3D"})]}),(0,s.jsx)("p",{className:"jsx-394e33762a50f5db text-lg md:text-xl text-muted-foreground uppercase font-light text-center font-sans",children:"100% Automated With AI"})]}),(0,s.jsx)("div",{style:{pointerEvents:e>.92?"auto":"none",opacity:I,transform:"scale(1)",transition:"opacity 0.2s linear"},onMouseDown:()=>r(!0),onTouchStart:()=>r(!0),className:"jsx-394e33762a50f5db absolute inset-0 z-50 flex items-center justify-center",children:(0,s.jsxs)("div",{className:"jsx-394e33762a50f5db w-full h-[50vh] mt-20 relative group",children:[(0,s.jsx)(P,{opacity:1}),!a&&e>.95&&(0,s.jsxs)("div",{className:"jsx-394e33762a50f5db absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-black/60 text-white px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm animate-pulse border border-white/10 font-sans",children:[(0,s.jsx)(m.A,{className:"w-4 h-4"}),(0,s.jsx)("span",{className:"jsx-394e33762a50f5db text-sm font-medium",children:"Drag to Rotate"})]})]})}),(0,s.jsx)("div",{style:{opacity:+(e>.95),pointerEvents:e>.95?"auto":"none",transition:"opacity 0.5s"},className:"jsx-394e33762a50f5db absolute bottom-8 sm:bottom-12 inset-x-0 flex justify-center z-[70] px-4",children:(0,s.jsxs)("div",{className:"jsx-394e33762a50f5db flex flex-col xl:flex-row items-center gap-6 w-full max-w-5xl justify-center font-sans",children:[n?(0,s.jsx)("div",{className:"jsx-394e33762a50f5db bg-[#2dffa7]/10 border border-[#2dffa7]/30 text-[#2dffa7] px-8 py-4 rounded-full text-xl font-medium backdrop-blur-md animate-in fade-in zoom-in duration-500",children:"You're on the list! \uD83D\uDE80"}):(0,s.jsxs)("form",{onSubmit:M(Y),className:"jsx-394e33762a50f5db w-full md:w-auto flex flex-col md:flex-row items-stretch md:items-center p-2 rounded-[2rem] bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 shadow-2xl shadow-emerald-500/10 gap-2 md:gap-0",children:[(0,s.jsxs)("div",{className:"jsx-394e33762a50f5db relative w-full md:w-64",children:[(0,s.jsx)(d.p,{type:"email",placeholder:"Email Id*",...S("email"),className:"w-full bg-transparent text-white px-6 py-4 md:py-3 border-none focus-visible:ring-0 focus-visible:bg-white/5 rounded-full md:rounded-l-full md:rounded-r-none placeholder:text-white/30 h-auto"}),T.email&&(0,s.jsx)("span",{className:"jsx-394e33762a50f5db absolute -bottom-6 left-6 text-xs text-red-400 font-medium whitespace-nowrap",children:T.email.message})]}),(0,s.jsx)("div",{className:"jsx-394e33762a50f5db hidden md:block w-px h-6 bg-white/10 mx-2"}),(0,s.jsxs)("div",{className:"jsx-394e33762a50f5db relative w-full md:w-56",children:[(0,s.jsx)(d.p,{type:"tel",placeholder:"Phone Number",...S("phone"),className:"w-full bg-transparent text-white px-6 py-4 md:py-3 border-none focus-visible:ring-0 focus-visible:bg-white/5 rounded-none placeholder:text-white/30 h-auto"}),T.phone&&(0,s.jsx)("span",{className:"jsx-394e33762a50f5db absolute -bottom-6 left-6 text-xs text-red-400 font-medium whitespace-nowrap",children:T.phone.message})]}),(0,s.jsx)(c.$,{type:"submit",disabled:g,className:"md:ml-2 bg-[#2dffa7] hover:bg-[#2dffa7]/90 text-black font-semibold px-8 py-3.5 rounded-full transition-all h-auto min-w-[140px] disabled:opacity-70",children:g?(0,s.jsx)(h.A,{className:"w-5 h-5 animate-spin"}):"Join Waitlist"})]}),(0,s.jsxs)(l(),{href:"/",className:"group flex items-center gap-2 text-white/70 hover:text-white transition-colors font-medium text-sm md:text-base px-4 py-2",children:[(0,s.jsx)(p.A,{className:"w-4 h-4 group-hover:-translate-x-1 transition-transform"}),"Back to Homepage"]})]})})]})]})}},1337:(e,t,a)=>{"use strict";a.d(t,{cn:()=>i});var s=a(9722),r=a(622);function i(...e){return(0,r.QP)((0,s.$)(e))}},2356:(e,t,a)=>{"use strict";a.d(t,{A:()=>i,R:()=>r});let s="8b30a147-c47e-4011-bee9-1295529000f1",r=async e=>{try{let t=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:s,subject:`New Contact: ${e.Name}`,from_name:"MetaShop Contact Us",...e})}),a=await t.json();if(!t.ok)throw Error(a.message||"Something went wrong");return{success:!0,...a}}catch(e){throw Error(e.message||"Failed to submit form")}},i=async e=>{try{let t=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:s,subject:"New Waitlist Signup",from_name:"MetaShop Waitlist",...e})}),a=await t.json();if(!t.ok)throw Error(a.message||"Something went wrong");return{success:!0,...a}}catch(e){throw Error(e.message||"Failed to join waitlist")}}},4474:(e,t,a)=>{"use strict";a.d(t,{$:()=>l});var s=a(5155);a(2115);var r=a(2442),i=a(8460),o=a(1337);let n=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function l({className:e,variant:t,size:a,asChild:i=!1,...l}){let c=i?r.DX:"button";return(0,s.jsx)(c,{"data-slot":"button",className:(0,o.cn)(n({variant:t,size:a,className:e})),...l})}},6982:(e,t,a)=>{"use strict";a.d(t,{default:()=>d});var s=a(5155),r=a(8500),i=a.n(r),o=a(5772),n=a(1628),l=a(9857),c=a(2115);function d(){let[e,t]=(0,c.useState)(!1);return(0,s.jsxs)("header",{className:"fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4 md:pt-6",children:[(0,s.jsx)("div",{className:"absolute top-0 left-0 right-0 h-full bg-black/70 backdrop-blur-xl [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"}),(0,s.jsxs)("div",{className:"relative z-10 mx-auto max-w-[1400px] flex items-center justify-between gap-4 rounded-full border border-white/10 bg-black/80 backdrop-blur-md px-4 md:px-6 py-3",children:[(0,s.jsxs)(i(),{href:"/",className:"flex items-center gap-2 flex-shrink-0",children:[(0,s.jsx)(o.default,{src:"/logos/metashop-logo.svg",alt:"MetaShop",width:32,height:32,className:"w-8 h-8"}),(0,s.jsx)("span",{className:"hidden md:inline text-lg md:text-xl font-semibold text-white",children:"MetaShop"})]}),(0,s.jsxs)("nav",{className:"hidden lg:flex items-center gap-8",children:[(0,s.jsx)(i(),{href:"/",className:"text-sm text-white/90 hover:text-white transition-colors",children:"Home"}),(0,s.jsx)("a",{href:"https://blitzapp.metashopai.com/",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-white/90 hover:text-white transition-colors",children:"Blitz"}),(0,s.jsx)(i(),{href:"/image-to-3d",className:"text-sm text-white/90 hover:text-white transition-colors",children:"Image to 3D"}),(0,s.jsx)(i(),{href:"/faq",className:"text-sm text-white/90 hover:text-white transition-colors",children:"FAQ"}),(0,s.jsx)(i(),{href:"/contact",className:"text-sm text-white/90 hover:text-white transition-colors",children:"Contact Us"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2 md:gap-3 flex-shrink-0",children:[(0,s.jsx)(i(),{href:"/contact",className:"lg:hidden text-xs md:text-sm text-white/90 hover:text-white transition-colors whitespace-nowrap",children:"Call us"}),(0,s.jsx)("span",{className:"hidden lg:inline text-sm text-white/70 whitespace-nowrap",children:"Call: +91 84 1292 1292"}),(0,s.jsxs)(i(),{href:"/contact",className:"flex items-center gap-1.5 md:gap-2 bg-[#2dffa7] hover:bg-[#2dffa7]/90 text-black px-3 md:px-4 lg:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors whitespace-nowrap",children:["Book a Demo",(0,s.jsx)(n.A,{className:"w-3 h-3 md:w-4 md:h-4"})]}),(0,s.jsx)("button",{className:"lg:hidden p-2 text-white",onClick:()=>t(!e),children:(0,s.jsx)(l.A,{className:"w-5 h-5"})})]})]}),e&&(0,s.jsx)("div",{className:"lg:hidden absolute top-20 left-4 right-4 bg-black/95 backdrop-blur-md border border-white/10 rounded-3xl p-6 z-50",children:(0,s.jsxs)("nav",{className:"flex flex-col gap-4",children:[(0,s.jsx)(i(),{href:"/",className:"text-sm text-white/90 hover:text-white transition-colors py-2",children:"Home"}),(0,s.jsx)("a",{href:"https://blitzapp.metashopai.com/",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-white/90 hover:text-white transition-colors py-2",children:"Blitz"}),(0,s.jsx)(i(),{href:"/image-to-3d",className:"text-sm text-white/90 hover:text-white transition-colors py-2",children:"Image to 3D"}),(0,s.jsx)(i(),{href:"/faq",className:"text-sm text-white/90 hover:text-white transition-colors py-2",children:"FAQ"}),(0,s.jsx)("div",{className:"border-t border-white/10 pt-4 mt-2 flex flex-col gap-3",children:(0,s.jsx)(i(),{href:"/contact",className:"text-sm text-white/90 hover:text-white transition-colors",children:"Call: +91 84 1292 1292"})})]})})]})}},9598:(e,t,a)=>{Promise.resolve().then(a.bind(a,885))},9658:(e,t,a)=>{"use strict";a.d(t,{p:()=>i});var s=a(5155);a(2115);var r=a(1337);function i({className:e,type:t,...a}){return(0,s.jsx)("input",{type:t,"data-slot":"input",className:(0,r.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",e),...a})}}},e=>{e.O(0,[831,367,413,718,953,607,609,369,971,441,794,358],()=>e(e.s=9598)),_N_E=e.O()}]);