import React from "react";
import * as S from "./custom-button.styles";

const CustomButton = props => {
  return <S.CustomButton {...props}>{props.children}</S.CustomButton>;
};

export default CustomButton;
