import React from 'react';
import { useSearchParams } from 'react-router-dom';

function About() {
  const [searchParams] = useSearchParams();
  const detail = searchParams.get('detail') === 'true';
  return (
    <div>
      <h1>소개</h1>
      <p>I'm Studying `react-router` now.</p>
      {detail && <p>And more information ...</p>}
    </div>
  );
}

export default About;