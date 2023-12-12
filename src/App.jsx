
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import PrincipalPage from './views/PrincipalPage'; // Importa tu componente Home
import ContactPage from './views/ContactPage'; // Importa tu componente About

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route exact path="/" element={<PrincipalPage/>} />
        <Route path="/about" element={<ContactPage/>} />
     </Routes>
    </BrowserRouter>

  );
};

export default App;