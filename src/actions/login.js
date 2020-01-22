import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from '../containers/Router';

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/fourEddit/'

export const login = (email, password) => async (dispatch) => {
    try{
        await axios.post( `${baseUrl}login`, { email, password })
        const response = await axios.post(`${baseUrl}login`, { email, password })
        window.localStorage.setItem("token", response.data.token)
        dispatch(push(routes.feed))
    }catch(error){
        console.log(error)
        window.alert("Erro no Login!")
    }
}

