import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './Components/Styles/Styles';
import UserForm from './Pages/UserForm';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
