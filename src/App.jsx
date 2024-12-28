import React from 'react'
import Sidebar from './components/Sidebar'
import AppRoutes from './components/appRoutes'
import './App.css'

const App = () => {
  return (
    <div className='dashboard'>
      <Sidebar/>
      <div className="dashboard--content">
        <AppRoutes/>
      </div>
    </div>  
  )
}   

export default App
