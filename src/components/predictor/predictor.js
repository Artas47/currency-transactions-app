import React from "react";
import * as S from "./predictor.styles";
import { connect } from "react-redux";
import {
  incrementPlnRate,
  plnRateChange,
  decrementPlnRate
} from "../../actions/index";

const Predictor = props => {
  const onInputChange = e => {
    props.plnRateChange(e.target.value);
  };
  return (
    <S.Predictor>
      1 EURO ={" "}
      <S.UpArrow onClick={() => props.incrementPlnRate()}> &uarr;</S.UpArrow>
      <S.PredictorInput
        type="number"
        value={Math.round(props.plnRate * 100) / 100}
        onChange={e => onInputChange(e)}
      />
      <S.DownArrow onClick={() => props.decrementPlnRate()}>&darr;</S.DownArrow>
    </S.Predictor>
  );
};

const mapStateToProps = state => {
  return { plnRate: state.currency.plnRate };
};

export default connect(
  mapStateToProps,
  { incrementPlnRate, plnRateChange, decrementPlnRate }
)(Predictor);
