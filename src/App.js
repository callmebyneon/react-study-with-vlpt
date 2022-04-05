import React, { useState } from 'react';

import './App.scss';
import Button from './components/Button';
import OuterBox from './components/OuterBox';
import CheckBox from './components/CheckBox';

function App() {
  const [check, setCheck] = useState(false);

  const onChange = (e) => {
    setCheck(e.target.checked);
  };

  return (
    <OuterBox className="App">
      <div>
        <CheckBox onChange={onChange} checked={check}>
          다음 약관에 모두 동의
        </CheckBox>
        <p>
          <b>check: </b>
          {check ? 'true' : 'false'}
        </p>
      </div>
      <hr />
      <div className="buttons">
        <Button size="large" onClick={() => alert('It worked!')}>
          BUTTON
        </Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray">
          BUTTON
        </Button>
        <Button color="gray">BUTTON</Button>
        <Button size="small" color="gray">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">
          BUTTON
        </Button>
        <Button color="pink">BUTTON</Button>
        <Button size="small" color="pink">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="blue" outline>
          BUTTON
        </Button>
        <Button color="gray" outline>
          BUTTON
        </Button>
        <Button size="small" color="pink" outline>
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth>
          BUTTON
        </Button>
        <Button size="medium" fullWidth color="gray">
          BUTTON
        </Button>
        <Button size="small" fullWidth color="pink">
          BUTTON
        </Button>
      </div>
    </OuterBox>
  );
}

export default App;
