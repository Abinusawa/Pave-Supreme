import React from 'react'

//components
import Navbar from './components/Navbar'
import Header from './components/Header'
//import features from '../components/Features'
import { leagueTableData, resultData } from './dummyData';

//containers
import Table from './containers/Table'
import Mdr from './containers/Mdr'
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
       
        <Header />
        
        <div className='grid'>
            <Table data={leagueTableData} />
            <div className='vertical-line'></div>
            <Mdr Sdata={resultData}/>
        </div>
        
        
      </div>
      
    </div>
  )
}

export default App;
 