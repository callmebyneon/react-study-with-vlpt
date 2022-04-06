import React from 'react';
import { useNavigate } from 'react-router-dom';

const History = ({ history}) => {
  const navigate = useNavigate();
  
  const goBack = () => {
    const answer = window.confirm('Really want this?');
    if (answer) {
      navigate(-1);
    }
  };

  const goHome = () => {
    const answer = window.confirm('Really want this?');
    if (answer) {
      navigate('/');
    }
  };
  
  return (
    <div>
      <button onClick={goBack}>&lt; back</button>
      <button onClick={goHome}>go home</button>
    </div>
  );
}

export default History;