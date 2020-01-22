import React, { Component } from "react";
import { BackgroundColor, ImageCapa, LoginArea, Title, InputText, InputPassword, Link, ButtonLight } from "../../style/LoginPage"
import LogoImg from "../../img/logo-cortado.png"
import PessoasImg from "../../img/pessoas.png"
import { connect } from "react-redux";
import { login } from "../../actions/login"

class LoginPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async(event) => {
    event.preventDefault()
    
    const { email, password } = this.state

    await this.props.login(email, password)
  }

  

  render() {
    const { email, password } = this.state

    return (
      <BackgroundColor>
        <ImageCapa src={LogoImg} />
        <LoginArea onSubmit={this.handleSubmit}>
          <Title>Login</Title>
          <InputText onChange={this.handleFieldChange} name="email" value={email} id="filled-basic" label="E-mail" type="email" variant="filled" margin="dense" />
          <InputPassword onChange={this.handleFieldChange} name="password" value={password} id="filled-password-input" label="Senha" type="password" variant="filled" autoComplete="current-password" margin="dense" />
          <Link>Não sou cadastrado</Link>
          <ButtonLight type="submit">Entrar</ButtonLight>
        </LoginArea>
        <ImageCapa src={PessoasImg} />
      </BackgroundColor>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email,password)),
})

export default connect(null, mapDispatchToProps)(LoginPage)
