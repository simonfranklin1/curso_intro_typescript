import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const Context = () => {
    const details = useContext(AppContext);
    
  return (
    <div>
       <p>linguagem context {details?.language}</p> 
    </div>
  )
}

export default Context