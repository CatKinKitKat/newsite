import React from 'react'
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Personal from './pages/Personal'
import Academic from './pages/Academic'
import Career from './pages/Career'
import Projects from './pages/Projects'
import Curriculum from './pages/Curriculum'
import Contact from './pages/Contact'
import Error from './pages/Error'

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact element={<Home />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/career" element={<Career />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />}></Route>
      </Switch>
    </Router>
  )
}

export default App
