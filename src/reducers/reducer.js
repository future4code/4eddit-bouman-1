const initialState = {
  allPosts: [],
  selectedPostId: "",
  selectedPost: {},
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return { ...state, allPosts: action.payload.posts }
    case "SELECT_POST_ID":
      return { ...state, selectedPostId: action.payload.postId }
    case "SET_POST_DETAILS":
      return { ...state, selectedPost: action.payload.postId }
    default:
      return state;
  }
}

export default posts;