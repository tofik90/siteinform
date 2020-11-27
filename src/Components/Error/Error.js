import React from "react";
import { StyledError } from "./Style";

const Error = (props) => (
  <StyledError>
    Ошибка {props.code}: {props.message}
  </StyledError>
);

export default Error;
