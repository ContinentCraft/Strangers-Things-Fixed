const BASE_URL ='https://strangers-things.herokuapp.com'
const COHORT = '2209-FTB-ET-WEB-FT'

export async function getUrl(token){
  const options = {}
  if (token) {
    options.headers = {
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }
  let response = await fetch( `${BASE_URL}/api/${COHORT}/posts`)
  let result = await response.json()
    let posts = result.data.posts
    return posts
  }

export async function registerUser(username, password){
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      }
      }
    )
  }
  const response = await fetch(`${BASE_URL}/api/${COHORT}/users/register`, options)
  const result = await response.json()
  return result.data.token
}

export async function loginUser(username, password){
  let options = {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password
      }
    })
  }
  let response = await fetch(`${BASE_URL}/api/${COHORT}/users/login`, options)
  let result = await response.json()
  console.log(result)
  return result
}

export async function getUserData(token){
let options = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
}
  let response = await fetch(`${BASE_URL}/api/${COHORT}/users/me`, options)
  let result = await response.json()

  return result
}
console.log(getUserData())

export async function createPost(postDetails, token){
  const options = {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`
    },
    body: JSON.stringify({
      post: postDetails
    })
  }
  const response = await fetch(`${BASE_URL}/api/${COHORT}/posts/`, options)
  const result = await response.json()
  return result
}

export async function updatePost(post, id, token){
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`
    },
    body: JSON.stringify({
      post
    })
  }
  const response = await fetch(`${BASE_URL}/api/${COHORT}/posts/${id}`, options)
  const result = await response.json()
  return result
}

export async function deletePost(id, token){
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`
    },
  }
  const response = await fetch(`${BASE_URL}/api/${COHORT}/posts/${id}`, options)
  const result = await response.json()
  return result
}

export async function getMe(token){
  const response = await fetch(`${BASE_URL}/api/${COHORT}/users/${username}`, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },})
  const result = await response.json()
  return result
}