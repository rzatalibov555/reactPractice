import React, {useContext} from "react";
import './exchange.css'
import { RateContext } from "../../context/RateContext";

export const Exchange = () => {

    const { state } = useContext(RateContext)

    const currency = { ...state.currency }
    
    return(
        <div className="exchange">
            <div className="exchangeCointainer">
                <div className="exchangeContent">
                    <div>
                        <p>Baza Valyuta: &nbsp; &nbsp; Date: </p>
                    </div>

                    <ul>
                        {
                            Object.keys(currency).map((item, i)=>{
                                return(
                                    <li key={item}>
                                        <span> <img src={currency[item].flag} alt={item}/> {item} </span>
                                        <span> {`1${state.base} = ${currency[item].course} ${item}`} </span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}