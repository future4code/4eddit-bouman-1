import axios from "axios";
import { push } from "connected-react-router"
import { routes } from "../containers/Router";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourEddit"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlphR1dLRWRjZXlaWjlORkxPUGgxIiwiZW1haWwiOiJwZWRyby5kYXJ2YXNAZ21haWwuY29tIiwidXNlcm5hbWUiOiJkYXJ2YXMiLCJpYXQiOjE1NzM1Nzk5MTd9.sKiIIRgiQm2qesnrNmFujNlXF02ytx-IvLKnNFHqXgA"

export const getPosts = () => async(dispatch) => {
  // const token = window.localStorage.getItem("token")
  try {
    const response = await axios.get(`${baseUrl}/posts`, {
      headers: {
        auth: token
      }
    })
    dispatch(setPostsAction(response.data.posts))
  } catch {
    window.alert("Erro")
  }
}

const setPostsAction = (posts) => ({
  type: "SET_POSTS_ACTION",
  payload: {
      posts,
  }
}) 

export const signUp = (username, email, password) => async () => {
  const signUpInfo = {
    username,
    email,
    password,
  }
  try {
    axios.post(`${baseUrl}/signup`, signUpInfo)
    window.alert("Usuário criado com sucesso! Você será redirecionado ao feed.")
  } catch {
    window.alert("Erro")
  }
}