import { motion, useScroll, useTransform } from "framer-motion";

export default function OrangeParallaxBg() {
  const { scrollYProgress } = useScroll();

  // Subtle, premium parallax
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  // Slow texture drift
  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["0% 0%", "40% 60%"]
  );

  return (
    <motion.div
      style={{ y, scale, backgroundPosition }}
      className="
        container-bg
        absolute inset-0 z-0
        will-change-transform
      "
    />
  );
}
