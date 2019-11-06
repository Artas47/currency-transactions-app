import React from "react";
import * as S from "./predictor.styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  incrementPlnRate,
  changePlnRate,
  decrementPlnRate
} from "../../actions/index";

const Predictor = ({
  plnRate,
  incrementPlnRate,
  decrementPlnRate,
  changePlnRate
}) => {
  const onInputChange = e => {
    changePlnRate(e.target.value);
  };
  const roundedPlnRate = Math.round(plnRate * 100) / 100;
  return (
    <S.Predictor>
      1 EURO =<S.UpArrow onClick={() => incrementPlnRate()}> &uarr;</S.UpArrow>
      <S.PredictorInput
        type="number"
        value={roundedPlnRate}
        onChange={e => onInputChange(e)}
      />
      <S.DownArrow onClick={() => decrementPlnRate()}>&darr;</S.DownArrow>
    </S.Predictor>
  );
};

const mapStateToProps = state => {
  return { plnRate: state.currency.plnRate };
};

export default connect(
  mapStateToProps,
  { incrementPlnRate, changePlnRate, decrementPlnRate }
)(Predictor);

Predictor.propTypes = {
  plnRate: PropTypes.number
};
