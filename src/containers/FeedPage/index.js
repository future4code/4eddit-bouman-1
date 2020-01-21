import React, { Component } from "react";
import { LightBackground, Container, PostBox, ContentBox, Title, Text, ReactionBox, Input } from "../../style/lorenzo"
// import redux

class FeedPage extends Component {
  state = {
    form: {},
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token")

    if (token === null) {
      this.props.goToLoginPage()
    }

    this.props.getPosts()
  }

  render() {
    return (
      <LightBackground>
        <Container>
          <PostBox>
            <ContentBox>
              <Title>Joe Biden calls game developers "little creeps" who make titles that "teach you how to kill"</Title>
              <br />
              <Text>Because Joe Biden isn't going after giant corporations, he will keep the status quo and the Millionaires and billionaires who own things like Fox News, CNN and other major news organizations wont have to worry about paying their fair share of taxes if Joe Biden wins.</Text>
            </ContentBox>
            <ReactionBox>
              <Input />
            </ReactionBox>
          </PostBox>
          <PostBox>
            <ContentBox>
              <Title>Joe Biden calls game developers "little creeps" who make titles that "teach you how to kill"</Title>
              <br />
              <Text>Because Joe Biden isn't going after giant corporations, he will keep the status quo and the Millionaires and billionaires who own things like Fox News, CNN and other major news organizations wont have to worry about paying their fair share of taxes if Joe Biden wins.</Text>
            </ContentBox>
            <ReactionBox>
              <Input />
            </ReactionBox>
          </PostBox>
        </Container>
      </LightBackground>
    )
  }
}

const mapStateToProps = state => ({
})


const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);