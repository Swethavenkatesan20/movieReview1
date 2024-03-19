import { useState } from "react"
export const Counter=()=>{

    const[dislike,setDislike]=useState(0)
    const[like,setLike]=useState(0)
    return(
        <>
        <div className="counterContainer">
       {/* like */}
       <button style={{ backgroundColor: 'rgb(2, 83, 2)', color: 'white' }} onClick={()=>{
        //like+1
        setLike(like+1)
        console.log(like);
       }}>👍{like} </button>

       {/* dislike */}
       <button style={{ backgroundColor: 'rgb(148, 19, 19)', color: 'white' }} onClick={()=>{
        //like+1
        setDislike(dislike+1)
        console.log(dislike);
       }}>👎{dislike}</button>
        
        
        </div>
        </>
    )
}

//hitting the button we change varialb==ble