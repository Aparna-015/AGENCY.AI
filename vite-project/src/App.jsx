import React from 'react'
import Navbar from './components/Navbar';

const App = () => {

  const[theme,setTheme]=React.useState('light');
  return (
    <div className="bg-red-400 dark:bg-black">
      
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App