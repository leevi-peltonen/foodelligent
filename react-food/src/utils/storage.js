export const storageSave = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const storageRead = key => {
  const data = localStorage.getItem(key)
  if (data) {
    return JSON.parse(data)
  }
  return null
}

export const storageRemove = key => {
  localStorage.getItem(key) && localStorage.removeItem(key)
}