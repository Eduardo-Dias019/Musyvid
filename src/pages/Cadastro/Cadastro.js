//IMPORTS
import React from "react";
import { useState } from "react";
import validator from "validator";
import { HiEye } from "react-icons/hi";
import { Link } from "react-router-dom";

//CSS
import "./Cadastro.css";

const Cadastro = () => {
  /* VERIFY THE PASSWORD */

  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Senha forte");
    } else {
      setErrorMessage("Senha fraca");
    }

    /* SHOW/HIDE PASSWORD */

    let btn = document.querySelector("#eye-on");
    btn.addEventListener("click", function() {
      let input = document.querySelector("#password");
      if (input.getAttribute("type") === "password") {
        input.setAttribute("type", "text");
      } else {
        input.setAttribute("type", "password");
      }
    });
  };
  return (
    <div>
      <form>
        <div id="text-top">
          <h2>Crie sua conta para acessar a plataforma</h2>
        </div>

        <div id="form-input">
          <div id="name">
            <h4>Seu nome:</h4>
            <input type="text" placeholder="Digite seu nome" />
          </div>
          <div id="email">
            <h4>E-mail: </h4>
            <input type="email" placeholder="Digite seu e-mail" />
          </div>
          <div id="password-input">
            <h4>Senha:</h4>
            <input
              id="password"
              type="password"
              placeholder="Crie uma senha"
              onChange={(e) => validate(e.target.value)}></input>
            <span>
              <HiEye id="eye-on" size={25} />
            </span>
          </div>
          <span
            style={{
              fontWeight: "900",
              color: "orange",
            }}>
            {errorMessage}
          </span>
          <h5>
            Crie uma senha com no mínimo 8 caracteres, uma letra maiúscula, uma
            letra minúscula e um caractere especial
          </h5>

          <span>
            <Link to="/">
              <button id="button-sig-in">IR PARA LOGIN</button>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Cadastro;
