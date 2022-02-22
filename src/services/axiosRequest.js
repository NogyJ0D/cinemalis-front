import axios from 'axios'

export default async function axiosRequest (url, method, body) {
  return await axios({
    url,
    method,
    data: body,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
  })
    .then(res => { return res })
    .then(data => {
      // console.log(data.data)
      return data.data
    })
    .catch(err => { return err })
}
