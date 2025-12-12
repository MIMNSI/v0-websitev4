import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Model3DProps {
  opacity: number;
}

export const Model3D = ({ opacity }: Model3DProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scripts.sirv.com/sirvjs/v3/sirv.js?modules=model";
    script.async = true;

    // Simulate loading completion or wait for script load
    script.onload = () => {
      // Give it a moment to initialize the viewer
      setTimeout(() => setIsLoaded(true), 1000);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center pointer-events-auto"
      style={{ opacity }}
    >
      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Skeleton className="w-64 h-64 rounded-xl bg-muted/20 animate-pulse" />
        </div>
      )}

      {/* Sirv Container */}
      <div
        className={`Sirv transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ width: "100%", height: "100%" }}
      >
        <div
          data-src="https://demo.sirv.com/model.glb"
          data-options="zoom: false; mousewheel: false; hint: false; autospin: false;"
          style={{ width: "100%", height: "100%" }}
        ></div>
      </div>
    </div>
  );
};
