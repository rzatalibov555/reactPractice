import React from 'react'
import './App.css';
import Layout from './components/layout/Layout';

import CHF from './image/CHF.png'
import AZE from './image/Flag_of_Azerbaijan.svg.png'
import JYP from './image/GPY.png'
import AZN from './image/AZN.webp'
import USD from './image/dollar.png'
import EUR from './image/eur.png'

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
        base:"USD",
        rate:"",
        date:"",
        currency: {
          USD: {name: "Dollar", flag: USD, course: "1.70"},
          EURO: {name: "EURO", flag: EUR, course: "1.70"},
          AZN: {name: "MANAT", flag: AZN, course: "1.70"},
        }
    };




  }

  render() {
    return (
        <Layout/>
    )
  };

}



export default App