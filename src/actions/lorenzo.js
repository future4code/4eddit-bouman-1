import axios from "axios";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourEddit";



const token = window.localStorage.getItem("token");

export const signUp = (username, email, password) => async () => {
  const signUpInfo = {
    username,
    email,
    password
  }
  try {
    await axios.post(`${baseUrl}/signup`, signUpInfo)
    window.alert("Usuário criado com sucesso! Você será redirecionado ao feed.")
  } catch (err) {
    window.alert("Erro: ", err.message) // ???
  }
}

export const getPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/posts`, {
      headers: {
        auth: token
      }
    })
    dispatch(setPosts(response.data.posts))
  } catch {
    window.alert("Erro")
  }
}

const setPosts = (posts) => ({
  type: "SET_POSTS",
  payload: {
    posts
  }
})

export const selectPostId = postId => ({
  type: "SELECT_POST_ID",
  payload: {
    postId
  }
})

export const createPost = (text, title) => async (dispatch) => {
  try {
    await axios.post(`${baseUrl}/posts`, { text, title }, {
      headers: {
        auth: token
      }
    })
    window.alert("Publicação criada com sucesso!")
    dispatch(getPosts())
  } catch {
    window.alert("Erro ao publicar")
  }
}

export const getPostDetails = postId => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/posts/${postId}`, {
      headers: {
        auth: token
      }
    })
    dispatch(setPostDetails(response.data.post));
  } catch {
    window.alert("Erro.")
  }
}

const setPostDetails = (postId) => ({
  type: "SET_POST_DETAILS",
  payload: {
    postId
  }
})