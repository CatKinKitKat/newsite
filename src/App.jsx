import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Error from './pages/Error'
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route><Error type="404" /> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
