import React, { Component } from "react";
import { BackgroundColor, ImageCapa, LoginArea, Title, InputText, InputPassword, Link, ButtonLight } from "../../style/LoginPage"
import LogoImg from "../../img/logo-cortado.png"
import PessoasImg from "../../img/pessoas.png"

class LoginPage extends Component {
  render() {
    return (
      <BackgroundColor>
        <ImageCapa src={LogoImg} />
        <LoginArea>
          <Title>Login</Title>
          <InputText id="filled-basic" label="E-mail" type="email" variant="filled" margin="dense" />
          <InputPassword id="filled-password-input" label="Senha" type="password" variant="filled" autoComplete="current-password" margin="dense" />
          <Link>Não sou cadastrado</Link>
          <ButtonLight>Entrar</ButtonLight>
        </LoginArea>
        <ImageCapa src={PessoasImg} />
      </BackgroundColor>
    );
  }
}

export default LoginPage;
