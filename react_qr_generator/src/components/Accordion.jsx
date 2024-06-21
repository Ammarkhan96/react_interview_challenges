import React, { useState } from 'react'

function Accordion(props) {
    const [setActive, setActiveState] = useState("")

    function activeAccordion(){
        setActiveState(setActive === "" ? "active" : "")
    }

  return (
    <div>
        <div className={`accordion ${setActive}`} onClick={activeAccordion}>
            <div className='accordion-heading'>
                <h3>{props.title}</h3>
                <i className='fas fa-angle-down'></i>
            </div>
            <p className='accordion-content'>{props.content}</p>
        </div>
    </div>
  )
}

export default Accordion