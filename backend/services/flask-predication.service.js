const flaskResponse = async (data) => {
  const response = await fetch("alskjdlaksjd", { data })
  if (response.success) {
    return response.data
  }
}

module.exports = { flaskResponse }
