export const SignUpForm = [
  {
    name: "username",
    placeholder: "Nome de usuário",
    required: true,
    pattern: "^[a-zA-Z0-9_]{6,}$",
    errorMessage: "Digite um nome de usuário válido com, no mínimo, 6 caracteres, usando apenas letras, números e underline (_).",
  },
  {
    name: "email",
    type: "email",
    placeholder: "E-mail",
    required: true,
    errorMessage: "Digite um endereço de e-mail válido."
  },
  {
    name: "password",
    type: "password",
    placeholder: "Senha",
    required: true,
  },
  {
    name: "agreement",
    type: "checkbox",
    label: "Eu li e aceito os termos e condições de uso do site",
    required: true,
  }
]