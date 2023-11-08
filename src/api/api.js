async function getTracks() {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/catalog/track/all/',
    {
      method: 'GET',
    }
  )
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const data = await response.json()
  return data
}
export default getTracks

export async function registerUser(email, password, username) {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/signup/',
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        username,
      }),
      headers: {
        'content-type': 'application/json',
      },
    }
  )
  if (response.ok) {
    const data = await response.json()
    return data
  }
  if (response.status === 400) {
    const data = await response.json()
    if (data?.email) {
      throw new Error(data.email[0])
    }
    if (data?.password) {
      throw new Error(data.password[1])
    }
    throw new Error('Проверьте введенные данные')
  }
  if (response.status === 500) {
    throw new Error('Сервер сломался')
  }
  return null
}

export async function loginUser(email, password) {
  await getTokenData(email, password)
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/login/',
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'content-type': 'application/json',
      },
    }
  )
  if (response.ok) {
    const data = await response.json()
    return data
  }
  if (response.status === 400) {
    const data = await response.json()
    if (data?.email) {
      throw new Error(data.email[0])
    }
    if (data?.password) {
      throw new Error(data.password[1])
    }
    throw new Error('Проверьте введенные данные')
  }
  if (response.status === 500) {
    throw new Error('Сервер сломался')
  }
  return null
}

function saveToken(token) {
  localStorage.setItem('token', token.access)
  localStorage.setItem('refreshToken', token.refresh)
  console.log(token)
  console.log(token.access)
  console.log(token.refresh)
}

async function getTokenData(email, password) {
  const res = await fetch('https://skypro-music-api.skyeng.tech/user/token/', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
  if (res.status === 200) {
    const tokenData = await res.json()
    saveToken(tokenData)
  }
}

export async function refreshToken(refresh) {
  const res = await fetch(
    'https://skypro-music-api.skyeng.tech/user/token/refresh/',
    {
      method: 'POST',
      body: JSON.stringify({
        refresh: refresh,
      }),
      headers: {
        'content-type': 'application/json',
      },
    }
  )
  const token = await res.json()
  return token
}

export async function getCategory(id) {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/selection/${id}/`,
    {
      method: 'GET',
    }
  )
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const data = await response.json()
  return data?.items
}
