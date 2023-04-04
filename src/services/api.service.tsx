const random = () => Math.floor(Math.random() * 123) + 1

export const API = () => {
  const API: string = `https://randomfox.ca/images/${random()}.jpg`
  // console.log(`API ${API}`)
  return API
}
