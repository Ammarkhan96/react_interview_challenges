import { useState } from "react";
import { pakistanData } from "./data";
import './DropDown.css';

export default function Dropdown(){
    const [countryState, setCountryState] = useState(Object.keys(pakistanData)[0]);

    function handleState(e){
        setCountryState(e.target.value);
    }

    return(
        <div >
            <select name="state" id="state" className="border border-gray-300 rounded-lg p-2 mb-4" onChange={handleState} value={countryState}>
                {
                    Object.keys(pakistanData).map((value,index)=>{
                        return <option value={`${value}`} key={index}>{value}</option>
                    })
                }
            </select>
            <select name="city" id="city" className="border ml-2 border-gray-300 rounded-lg p-2">
                {
                    (pakistanData[countryState]).map((city,index)=>{
                        return <option value={`${city}`} key={index}>{city}</option>
                    })
                }
            </select>
        </div>
    );
}
