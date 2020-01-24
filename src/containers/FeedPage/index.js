import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { createPost, getPosts, selectPostId } from "../../actions/lorenzo"
import { LightBackground, Container, Box, Input, LightButton, Image } from "../../style/lorenzo"
import { PostContainer, PostCard, UserNameBox, UserName, Text, BottonField, CountVote, CountComment, ButtonLight, TextAreaComment } from '../../style/PostPage'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { putVoteDirection } from '../../actions/vote'
import { newPostForm } from "./newPostForm";

class FeedPage extends Component {
  constructor(props){
  super(props)
  this.state = {
    form: {},
  }
}
  
  componentDidMount(){
    this.props.getPosts()
  }


  checkId = (event) => {
    const direction = event.target.value
    const id = event.target.name
    
    if(direction === "0"){
      this.props.putVoteDirection(id, +1)
      this.props.getPosts()
    }else{
      this.props.putVoteDirection(id, 0)
      this.props.getPosts()
    }
    
  }

  putDownVote = (event) => {
    const direction = event.target.value
    const id = event.target.name
    
    if(direction !== '-1'){
      this.props.putVoteDirection(id, -1)
      this.props.getPosts()
    }else{
      this.props.putVoteDirection(id, 0)
      this.props.getPosts()
    }
  }

  handleInputChange = ev => {
    const { name, value } = ev.target;
    this.setState({ form: { ...this.state.form, [name]: value } });
  }

  createPost = ev => {
    ev.preventDefault();
    const { text, title } = this.state.form
    this.props.createPost(text, title)
    this.setState({ form: {} })
  }

  goToPostPage = postId => {
    const { selectPostId, goToSelectedPost } = this.props
    selectPostId(postId)
    goToSelectedPost()

  }


render(){
    return (     
      <LightBackground>
        <Container>
        <Box id="purple">
            <form>
              {newPostForm.map(input => (
                <div key={input.name}>
                  {input.label && <label htmlFor={input.name}>{input.label}: </label>}
                  <Input
                    id={input.name}
                    name={input.name}
                    placeholder={input.placeholder}
                    type={input.type}
                    value={this.state.form[input.name] || ""}
                    required={input.required}
                    pattern={input.pattern}
                    title={input.errorMessage}
                    onChange={this.handleInputChange}
                  />
                </div>
              ))}
              <ButtonLight type="submit" onClick={this.createPost}>Publicar</ButtonLight>
            </form>
          </Box>

          {this.props.posts.map(post => {
            return (
              <PostContainer maxWidth="sm" key={post.id}>
                  <PostCard>
                      <UserNameBox>
                          <UserName>{post.username}</UserName>
                          <Text>{post.text}</Text>
                      </UserNameBox>
                      <BottonField>
                          <FormControlLabel
                              control={
                                <Checkbox
                                  onClick={this.checkId} 
                                  name={post.id} 
                                  value={post.userVoteDirection} 
                                  icon={
                                    <ArrowUpwardIcon color={post.userVoteDirection === 1 ? "secondary" : "primary"}/>}
                                  checkedIcon={
                                    <ArrowUpwardIcon color={post.userVoteDirection === 1 ? "secondary" : "primary"} />} 
                                />}
                          />
                          <CountVote>{post.votesCount}</CountVote>
                          <FormControlLabel
                              control={
                                <Checkbox 
                                  onClick={this.putDownVote} 
                                  name={post.id} 
                                  value={post.userVoteDirection} 
                                  icon={<ArrowDownwardIcon color={post.userVoteDirection === -1 ? "secondary" : "primary"} />} 
                                  checkedIcon={<ArrowDownwardIcon color={post.userVoteDirection === -1 ? "secondary" : "primary"} />} 
                                />}
                          />
                          <CountComment>{post.commentsNumber} Comentários</CountComment>
                      </BottonField>
                  </PostCard>          

              </PostContainer>

            )
          })}
        </Container>
      </LightBackground>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.allPosts,
})



const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
  putVoteDirection: (postId, direction) => dispatch(putVoteDirection(postId, direction)),
  createPost: (text, title) => dispatch(createPost(text, title)),
  selectPostId: postId => dispatch(selectPostId(postId)),
  goToSelectedPost: () => dispatch(push(routes.post)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage)