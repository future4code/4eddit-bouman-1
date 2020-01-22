import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { Container, Box, Input, LightButton, Image } from "../../style/lorenzo"
import { SignUpForm } from "./signUpForm"
import { signUp } from "../../actions/lorenzo"

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
      <Container id="signup">
        <Box id="purple">
          Cadastre-se
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
        </Box>
        <Box>
          <Image src={require("../../img/logo-cortado.png")} alt="4eddit" />
          <Image src={require("../../img/sign-up-image.svg")} alt="Cadastre-se!" />
        </Box>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUp: (username, email, password) => dispatch(signUp(username, email, password))
})

export default connect(null, mapDispatchToProps)(SignUpPage);