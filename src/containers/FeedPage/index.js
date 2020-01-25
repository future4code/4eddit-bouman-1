import React, { Component } from "react";
import { LightBackground, Container } from "../../style/general"
import ListPosts from "./ListPosts"
import FieldPost from "./FieldPost"

class FeedPage extends Component {

  render() {
    return (
      <LightBackground>
        <Container>
          <FieldPost />
          <ListPosts />
        </Container>
      </LightBackground>
    )
  }
}

export default FeedPage