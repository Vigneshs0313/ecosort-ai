/** Make a small JPEG thumbnail so many scans fit in localStorage. The full image is never stored or uploaded. */
export function makeThumb(img: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, max = 160): string {
  const w = (img as HTMLImageElement).naturalWidth || (img as HTMLVideoElement).videoWidth || (img as HTMLCanvasElement).width
  const h = (img as HTMLImageElement).naturalHeight || (img as HTMLVideoElement).videoHeight || (img as HTMLCanvasElement).height
  const s = Math.min(1, max / Math.max(w, h))
  const c = document.createElement('canvas')
  c.width = Math.max(1, Math.round(w * s)); c.height = Math.max(1, Math.round(h * s))
  c.getContext('2d')!.drawImage(img, 0, 0, c.width, c.height)
  return c.toDataURL('image/jpeg', 0.7)
}
export const newId = () => (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2))
