import React from 'react';
import styled from 'styled-components';

const Contaner = styled.div`
  font-size: 13px;
  color: #333333;
`;

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return <Contaner>Hello world</Contaner>;
};

export default App;
