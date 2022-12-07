import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App = () => {
  return (
    <div className="p-4">
      <Title>Hello CodeSandbox</Title>
      <Button>按钮</Button>
    </div>
  );
};

export default App;
