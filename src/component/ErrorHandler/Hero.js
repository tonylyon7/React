import React from 'react'

const Hero = (props) => {
    const {heroName} = props

    if(heroName == "joker"){
        throw new Error("Not a hero")
    }
  return <h2>{heroName}</h2>


//     <div>
//         {heroname === "Joker"?
//         <h2>Not an Hero</h2>
//         : Children}
//     </div>
//   )
}

export default Hero