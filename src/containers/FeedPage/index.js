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

class FeedPage extends Component {
  state = {
    form: {},
  }

  componentDidMount() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlphR1dLRWRjZXlaWjlORkxPUGgxIiwiZW1haWwiOiJwZWRyby5kYXJ2YXNAZ21haWwuY29tIiwidXNlcm5hbWUiOiJkYXJ2YXMiLCJpYXQiOjE1NzM1Nzk5MTd9.sKiIIRgiQm2qesnrNmFujNlXF02ytx-IvLKnNFHqXgA"
    if (token === null) {
      this.props.goToLoginPage()
    } else {
      this.props.getPosts()
    }
  } 


  render() {
    return (
      <LightBackground>
        <Container>
          {this.props.posts.map(post => {
            return (
              <PostContainer maxWidth="sm">
                  <PostCard>
                      <UserNameBox>
                          <UserName>{post.username}</UserName>
                          <Text>{post.text}</Text>
                      </UserNameBox>
                      <BottonField>
                          <FormControlLabel
                              control={<Checkbox icon={<ArrowUpwardIcon color="default"/>} checkedIcon={<ArrowUpwardIcon color="secondary" />} value="checkedH" />}
                          />
                          <CountVote>4343</CountVote>
                          <FormControlLabel
                              control={<Checkbox icon={<ArrowDownwardIcon color="default"/>} checkedIcon={<ArrowDownwardIcon color="secondary" />} value="checkedH" />}
                          />
                          <CountComment>0 Comentários</CountComment>
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
})

export default connect(mapStateToProps, mapDispatchToProps) (FeedPage)