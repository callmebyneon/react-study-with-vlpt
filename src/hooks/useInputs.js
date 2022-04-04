import { useReducer, useCallback } from 'react';

import reducer from '../reducer';
import { CHANGE_INPUT, RESET_INPUT } from './../store/actions';

function useInputs (initialForm) {
  const [form, dispatch] = useReducer(reducer, initialForm);
  
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: CHANGE_INPUT,
      name,
      value
    })
  }, []);

  const reset = useCallback(() => dispatch({ type: RESET_INPUT }), []);

  return [form, onChange, reset];
};

export default useInputs;