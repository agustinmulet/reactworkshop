import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

library.add(fab);

const Icono = styled.div`
  .girar {
    animation: spin infinite 20s linear;
    color: #53c1de;
  }
  .tuiter {
    color: #1c88cc;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Iconito = props => (
  <Icono>
    <FontAwesomeIcon
      className={props.icono === "react" ? "girar" : "tuiter"}
      icon={["fab", props.icono]}
      size={props.tamanio}
    />
  </Icono>
);

export default Iconito;
