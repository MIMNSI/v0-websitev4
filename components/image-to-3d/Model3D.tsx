import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
interface Model3DProps {
  opacity: number;
}

export const Model3D = ({ opacity }: Model3DProps) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const modelSrc = "/models/output.glb";

  useEffect(() => {
    // 1. Inject the model-viewer script from unpkg
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    script.async = true;

    script.onload = () => {
      // Set the flag once the script is available
      setIsScriptLoaded(true);
    };

    // Append to document head (best practice for scripts)
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center pointer-events-auto"
      style={{ opacity }}
    >
      {/* Loading State: Shows the skeleton while the script is loading */}
      {!isScriptLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Skeleton className="w-64 h-64 rounded-xl bg-muted/20 animate-pulse" />
        </div>
      )}

      {/* Model-Viewer Component: Only renders once the script is loaded */}
      {isScriptLoaded && (
        <model-viewer
          src={modelSrc} // Your local GLB file path
          alt="3D Model"
          shadow-intensity="1"
          camera-controls // Enables drag-to-rotate interaction
          auto-rotate // Enables gentle automatic rotation
          rotation-per-second="10deg"
          style={{
            width: "100%",
            height: "100%",
            transition: "opacity 0.7s",
          }}
          // Model Viewer automatically centers and fits the model by default.
          // Add suppressHydrationWarning to potentially quiet client-side warnings if they appear
          suppressHydrationWarning
        >
          {/* Optional: Add a custom loading indicator here if needed */}
        </model-viewer>
      )}
    </div>
  );
};
