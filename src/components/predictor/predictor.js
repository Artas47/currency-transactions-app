import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as Styles from './predictor.styles'
import {
  incrementPlnRate,
  decrementPlnRate,
  changePlnRate,
} from '../../actions/index'
import {selectPlnRate} from '../../selectors/selectors'

const Predictor = () => {
  const dispatch = useDispatch()
  const plnRate = useSelector(selectPlnRate)
  const onInputChange = e => {
    dispatch(changePlnRate(e.target.value))
  }
  return (
    <Styles.Predictor>
      1 EURO =
      <Styles.UpArrow onClick={() => dispatch(incrementPlnRate())}>
        &uarr;
      </Styles.UpArrow>
      <Styles.PredictorInput
        data-testid="plnRate-value"
        type="number"
        value={plnRate}
        onChange={e => onInputChange(e)}
      />
      <Styles.DownArrow onClick={() => dispatch(decrementPlnRate())}>
        &darr;
      </Styles.DownArrow>
    </Styles.Predictor>
  )
}

export default Predictor
