export function rwdThreshold(windowWidth) {
  if (windowWidth < 768) return "sm";
  if (windowWidth < 992) return "md";
  else return "lg";
}
