import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { getPosts } from "../../actions/lorenzo"
import { LightBackground, Container, PostBox, ContentBox, Title, Text, ReactionBox, Input } from "../../style/lorenzo"

class FeedPage extends Component {
  state = {
    form: {},
  }


  render() {
    return (
      <LightBackground>
        <Container>
          {this.props.posts.map(post => {
            return (
              <PostBox>
                <ContentBox>
                  <Title>{post.title}</Title>
                  <br />
                  {post.username}
                  <br />
                  <Text>{post.text}</Text>
                </ContentBox>
                <ReactionBox>
                  <p>
                    <span onClick={() => this.props.votePost(post.id, 1, this.props.userVoteDirection)}>Up</span>
                    {post.votesCount}
                    <span onClick={() => this.props.votePost(post.id, 0, this.props.userVoteDirection)}>Down</span>
                  </p>
                  <Input />
                </ReactionBox>
              </PostBox>
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

export default FeedPage