const flaskResponse = async (data) => {
  const response = await fetch("alskjdlaksjd", { data })
  if (!response.ok) {
    return response.data
  }
}

export { flaskResponse }
