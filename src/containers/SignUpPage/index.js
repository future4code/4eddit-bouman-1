import React, { Component } from "react";
import { connect } from "react-redux";
import { Background, Container, Box, Input, LightButton, Image } from "../../style/general"
import { Link, Title } from "../../style/LoginPage"
import { SignUpForm } from "./signUpForm"
import { signUp } from "../../actions/general"
import { push } from "connected-react-router";
import { routes } from "../Router";

class SignUpPage extends Component {
  state = {
    form: {},
  }

  handleInputChange = ev => {
    const { name, value } = ev.target;
    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  handleOnSubmit = ev => {
    ev.preventDefault();
    const { username, email, password } = this.state.form
    this.props.signUp(username, email, password)
    this.setState({ [password]: "" })
  };

  render() {
    return (
      <Background>
        <Container id="signup">
          <Box id="purple">
            <Title>Cadastre-se</Title>
            <form onSubmit={this.handleOnSubmit}>
              {SignUpForm.map((input) => (
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
              <LightButton type="submit">Cadastrar</LightButton>
            </form>
            <Link onClick={this.props.goToLoginPage}>Eu já tenho uma conta</Link>
          </Box>
          <Box id="image">
            <Image src={require("../../img/logo-cortado.png")} alt="4eddit" />
            <Image src={require("../../img/entrar.png")} alt="Cadastre-se!" />
          </Box>
        </Container>
      </Background>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUp: (username, email, password) => dispatch(signUp(username, email, password)),
  goToLoginPage: () => dispatch(push(routes.login)),
})

export default connect(null, mapDispatchToProps)(SignUpPage);