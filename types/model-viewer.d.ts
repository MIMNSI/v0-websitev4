// v0-websitev4/types/model-viewer.d.ts

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src: string;
          "camera-controls"?: boolean;
          "auto-rotate"?: boolean;
          "rotation-per-second"?: string;
          "shadow-intensity"?: string;
          loading?: "eager" | "lazy";
          ar?: boolean;
          "ios-src"?: string;
          suppressHydrationWarning?: boolean;
        },
        HTMLElement
      >;
    }
  }
}
// This line ensures the file is treated as a module, which is good practice.
export {};
