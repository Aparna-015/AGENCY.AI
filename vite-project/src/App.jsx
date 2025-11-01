import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';

const App = () => {

  const[theme,setTheme]=React.useState('light');
  return (
    <div className="dark:bg-black">
      
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <TrustedBy/>
    </div>
  )
}

export default App