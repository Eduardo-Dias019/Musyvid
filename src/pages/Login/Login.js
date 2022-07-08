//IMPORTS
import React from "react";
import { Link } from "react-router-dom";

//IMAGES
import cover from "../../assets/cover-login.png";

//CSS
import "./Login.css";

const Login = () => {
  return (
    <div>
      <form>
        <div id="top-text">
          <h2>Entre com sua conta</h2>
          <div id="text-create-account">
            <h4>Não tem uma conta? crie a sua </h4>{" "}
            <Link id="blue-link" to="/cadastro">
              aqui
            </Link>
          </div>
        </div>
        <div id="form-input">
          <div id="email-login">
            <h4>E-mail:</h4>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              id="input-email"
            />
          </div>
          <div id="password-login">
            <h4>Senha:</h4>
            <input
              type="password"
              placeholder="Digite sua senha"
              id="input-password"
            />
          </div>
        </div>
        <div id="button">
          <input id="button-login" type="button" value="ENTRAR" />
        </div>
      </form>

      <span id="credits">
        <h4>Desenvolvido por Eduardo Dias e Lucas Begnini</h4>
      </span>

      <aside>
        <h1>Seja bem-vindo(a) a Musyvid</h1>
        <h2>
          Ouça músicas e veja vídeos curtos, <br /> tudo em um só lugar
        </h2>
        <img src={cover} alt="" />
      </aside>
    </div>
  );
};

export default Login;
