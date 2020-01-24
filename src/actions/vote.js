import axios from 'axios';

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/"

export const putVoteDirection = (postId, direction) => async (dispatch, getState) => {

    const Id = postId
    const token = window.localStorage.getItem("token")
    const axiosConfig = {
        headers: {
            auth: token
        }
    }

    try{
        await axios.put(`${baseUrl}${Id}/vote`, { direction }, axiosConfig)
        console.log("sucesso")
    }catch(error){
        console.log(error)
    }
    //dispatch(getTasks())
}