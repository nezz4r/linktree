export async function load() {
  let data = await import("../data/data.json")
  return {...data}
}