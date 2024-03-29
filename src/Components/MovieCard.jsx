import { useState } from "react"
import { Counter } from "./Counter"
import { useNavigate } from "react-router-dom"


export const MovieCard=({name,poster,rating,summary,id})=>{

    
    const[show,setShow]=useState(false)
    const navigate=useNavigate()

    const ratingStyle={
        // backgroundColor:"pink"
        color: rating>8?"green":"red"
    }   
    return(
        <>
        
        <div className="card m-1 ms-2 bg-dark text-white " style={{width: "19rem",height:"480px"}}>
            <img src={poster} className="card-img-top" style={{height:"300px"}} alt="..."/>
            <div className="card-body">
              <div className='d-flex justify-content-between'>
              <div className='d-flex '>
                    <h6 className="card-title">{name}</h6>
                    <h6 onClick={()=>setShow(!show)}>{show?"🔽":"🔼"}</h6>

                    {/* ti display or navigate to trailer */}
                <h6 onClick={()=>navigate(`/movies/${id} `)}>ℹ</h6>
                    
                    
               </div>
               <div style={ratingStyle}>{rating}</div>
              </div>
                {show && <p className="card-text overflow-hidden" style={{height:"75px"}}>{summary}</p>}
                <Counter/>
            </div>
        </div>
        
        </>
    )
}