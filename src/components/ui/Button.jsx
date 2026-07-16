import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const variants = {
  primary:
    "bg-gradient-to-r from-navy-700 to-sky-accent-2 text-white shadow-lg shadow-navy-700/25 hover:shadow-xl hover:shadow-navy-700/30",
  secondary:
    "bg-white text-navy-800 border border-navy-200 hover:border-navy-400 shadow-sm",
  ghost:
    "bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm",
};

export default function Button({
  children,
  variant = "primary",
  icon = true,
  className = "",
  as = "button",
  href,
  ...props
}) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  const Component = motion[as] ?? motion.button;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className={classes}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <Component
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
      {...props}
    >
      {content}
    </Component>
  );
}
