import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

const WithRouterSample = () => {
  const location = useLocation();
  const match = useParams();
  const history = useNavigate();
  
  const attrs = {
    rows: 8,
    cols: 30,
    readOnly: true,
    autoFocus: false,
    style: {
      resize: 'none'
    }
  }
  
  return (
    <div>
      <h4>location (useLocation)</h4>
      <textarea {...attrs} value={JSON.stringify(location, null, 2)} />
      <h4>match (useParams)</h4>
      <textarea {...attrs} value={JSON.stringify(match, null, 2)} />
      <br />
      <button onClick={() => history('/')}>홈으로</button>
    </div>
  );
}

export default WithRouterSample;