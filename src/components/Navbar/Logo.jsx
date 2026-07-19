import logoMark from "../../assets/logo-mark.png";

export default function Logo({ light = false }) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <img src={logoMark} alt="CAELUNA" className="h-9 w-9 rounded-lg object-cover" />
      <span className={`font-display text-xl font-bold tracking-tight ${light ? "text-white" : "text-navy-900"}`}>
        CAELUNA
      </span>
    </div>
  );
}
