import React from 'react'
import "../assets/design.css"
import { useState } from 'react'

export const Play = () => {


    const [level, setLevel] = useState(4)
    const [currentWord, setCurrentWord] = useState("asdad")
    const [currentNumord, setCurrentNumord] = useState("263452")


    
    const handleChange = (e) => {
        console.log(e)

    }
    

  return (
    <div>
        <table>
            <tbody>
            <tr>
        {
        currentNumord.split("").map((letter, i) => (
           <td key={i}>
           <div className='letter' >
                {letter}
            </div>
            <div>
                <input 
                onChange={e => {handleChange(e)}}
                className='inputLetter'
                maxLength={1} 
                />
            </div>
            </td>
        ))
        }
        </tr>
        </tbody>
        </table>


    </div>
  )
}
