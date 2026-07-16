export default function Logo({ light = false }) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <svg width="34" height="34" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="16" fill={light ? "#ffffff" : "#0B1533"} fillOpacity={light ? "0.12" : "1"} />
        <path
          d="M32 12 L48 20 V38 C48 48 40 54 32 56 C24 54 16 48 16 38 V20 Z"
          fill="url(#logoGradient)"
        />
        <path
          d="M32 22 L40 26.5 V37 C40 42.5 36.5 46 32 47.5 C27.5 46 24 42.5 24 37 V26.5 Z"
          fill={light ? "#0B1533" : "#ffffff"}
        />
        <defs>
          <linearGradient id="logoGradient" x1="16" y1="12" x2="48" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1D3480" />
            <stop offset="1" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
      </svg>
      <span className={`font-display text-xl font-bold tracking-tight ${light ? "text-white" : "text-navy-900"}`}>
        CAELUNA
      </span>
    </div>
  );
}
