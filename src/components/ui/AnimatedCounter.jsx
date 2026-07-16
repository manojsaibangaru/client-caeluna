import { useCountUp } from "../../hooks/useCountUp";

export default function AnimatedCounter({ value, suffix = "", prefix = "", className = "" }) {
  const { ref, value: current } = useCountUp(value);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {current}
      {suffix}
    </span>
  );
}
