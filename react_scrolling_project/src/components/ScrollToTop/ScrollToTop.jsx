import React from 'react'
import { useState, useEffect } from 'react'
import './ScrollToTop.css'

const ScrollToTop = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
       window.addEventListener('scroll', () => {
        if(window.scroll > 100){
            setBackToTopButton(true)
        } else {
            setBackToTopButton(false)
        }
       })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return <div className='App'>
    {backToTopButton && (
        <button className='cm-up' onClick={scrollUp}>
            <span className='cm-icon'>
            <i class="fa-solid fa-chevron-up"></i>
            </span>
        </button>
    )}
  </div>

}

export default React.memo(ScrollToTop);
