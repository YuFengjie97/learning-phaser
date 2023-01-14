const base = import.meta.env.VITE_BASE
console.log(base);


export function getUrl(url: string) {
  return `${base}${url}`
}