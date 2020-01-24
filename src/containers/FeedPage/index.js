import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { getPosts } from "../../actions/lorenzo"
import { LightBackground, Container } from "../../style/lorenzo"
import { PostContainer, PostCard, UserNameBox, UserName, Text, BottonField, CountVote, CountComment, ButtonLight, TextAreaComment } from '../../style/PostPage'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { putVoteDirection } from '../../actions/vote'

class FeedPage extends Component {
  
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

  render() {

    return (
      
      <LightBackground>
        <Container>
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
  goToLoginPage: () => dispatch(push(routes.root)),
  getPosts: () => dispatch(getPosts()),
  putVoteDirection: (postId, direction) => dispatch(putVoteDirection(postId, direction))
})

export default connect(mapStateToProps, mapDispatchToProps) (FeedPage)