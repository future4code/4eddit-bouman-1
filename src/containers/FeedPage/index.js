import React, { Component } from "react";
import { LightBackground, Container } from "../../style/general"
import { NavBar, LogoNavBar, LogoutButton } from "../../style/navbar"
import ListPosts from "./ListPosts"
import FieldPost from "./FieldPost"
import logocortado from "../../img/logocortado.png"
import { push } from "connected-react-router";
import { routes } from "../Router";
import { connect } from "react-redux";

class FeedPage extends Component {

  signOut = () => {
    window.localStorage.removeItem("token")
    this.props.reloadPage()
  }

  render() {
    return (
      <LightBackground>
        <NavBar>
          <LogoNavBar src={logocortado} />
          <LogoutButton onClick={this.signOut}>Sair</LogoutButton>
        </NavBar>
        <Container>
          <FieldPost />
          <ListPosts />
        </Container>
      </LightBackground>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  reloadPage: () => dispatch(push(routes.login)),
})

export default connect(null, mapDispatchToProps)(FeedPage)