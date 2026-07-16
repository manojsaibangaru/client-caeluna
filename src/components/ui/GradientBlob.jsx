export default function GradientBlob({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl opacity-40 animate-blob ${className}`}
    />
  );
}
