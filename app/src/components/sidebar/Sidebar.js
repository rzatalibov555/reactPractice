import React, {useContext} from "react";
import './sidebar.css'
import { RateContext } from "../../context/RateContext";

export const Sidebar = () => {


    const { state } = useContext(RateContext)
    console.log(state)
    // console.log(Object.keys(state.currency))
    return(
        
        <div className="sideBar">
            <div className="sideBarHead">
                <h3>All Exchange</h3>
            </div>

            <div className="sideBarContent">
                <ul>
                    {
                        Object.keys(state.currency).map((item, i) => {
                            return(
                                
                                <li key = {item} >
                                    {/* console.log({item}) */}
                                    {/* console.log(state.currency[item]) */}
                                    <p>
                                        <span>
                                            <img src={state.currency[item].flag} alt={item}/> &nbsp; {item}
                                        </span> &nbsp; {state.currency[item].name}
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            
        </div>
    )
}