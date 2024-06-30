import React from 'react'
import './intro.scss'
import { Button } from '../../components/Button'

export const Intro = () => {
  return (
    <section id='intro'>
        <img className='img1' src="https://framerusercontent.com/images/hIinn2d88oxvunwX5C8HaI2Gw40.png" alt="" />
     
        <div>
            <h1>Micro Movements</h1>
            <h1>Monumental Outcomes</h1>
            <p>Elevate your fitness journey with Kaizen: where every stitch inspires progress</p>

            <Button props="KAIZEN"/>
         </div>
          
        <img className='img2' src="https://framerusercontent.com/images/Xqe0KaJMXHyOT34d7rfJmIJA.png?scale-down-to=512" alt="" />
    </section>
  )
}
