import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../module/counter';

const CounterContainer = ({ number, diff, increase, decrease, setDiff }) => {
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={increase}
      onDecrease={decrease}
      onSetDiff={setDiff}
    />
  );
};

// mapStateToProps
/* const mapStateToProps = state => ({
  number: state.counter.number,
  diff: state.counter.diff
}); */

//mapDispatchToProps
/* const mapDispatchToProps = {
  increase,
  decrease,
  setDiff
}; */
/* const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increase,
      decrease,
      setDiff
    },
    dispatch
  ); */

export default connect(
  state => state.counter, //mapStateToProps
  { increase, decrease, setDiff } //mapDispatchToProps
)(CounterContainer);

/* 위 코드는 다음과 동일합니다.
  const enhance = connect(mapStateToProps, mapDispatchToProps);
  export defualt enhance(CounterContainer);
*/