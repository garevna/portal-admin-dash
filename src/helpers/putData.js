export default async (path, payload) => {
  const response = await (await fetch(`${process.env.VUE_APP_API_URL}/${path}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: process.env.VUE_APP_AUTHORIZATION_KEY
    },
    body: JSON.stringify(payload)
  })).json()

  return response
}
