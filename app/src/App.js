import React from 'react'
import './App.css';
import Layout from './components/layout/Layout';

import CHF from './image/CHF.png'
import AZE from './image/Flag_of_Azerbaijan.svg.png'
import JYP from './image/JPY.png'
import USD from './image/usa.png'
import EUR from './image/euro.png'

import { RateContext } from './context/RateContext';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
        base:"USD",
        rate:"",
        date:"",
        currency: {
                    USD: {name: "Dollar", flag: USD, course: "1.70"},
                    EURO:{name: "Evro",   flag: EUR, course: "1.70"},
                    AZN: {name: "Manat",  flag: AZE, course: "1.70"},
                    CHF: {name: "İsveçrə frankı",  flag: CHF, course: "1.70"},
                    JPY: {name: "Yaponiya yenasi",  flag: JYP, course: "1.70"},
                  }
    };




  }

  render() {
    return (
        <RateContext.Provider value={{ state:this.state }}>
          <Layout/>
        </RateContext.Provider>
        
    )
  };

}



export default App