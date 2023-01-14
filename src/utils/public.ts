const base = import.meta.env.VITE_BASE
console.log(base);


export function getAssetsUrl(url: string) {
  return `${base}${url}`
}