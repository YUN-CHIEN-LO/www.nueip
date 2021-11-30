/**
 * 產生亂數
 *
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 亂數
 */
export function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
