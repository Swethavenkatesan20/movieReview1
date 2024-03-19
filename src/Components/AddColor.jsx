import { useState } from "react"

export const AddColor=()=>{
    const [colorval,setColorval]=useState("green")
    const [colorList,setcolorList]=useState([colorval])

    const inputStyle={
        backgroundColor:colorval
        
    }

    // const divStyle={
    //     height:"30px",
    //     width:"250px",
    //     backgroundColor:colorList
    // }
    return(
        <div>
        <input type="text" name="" value={colorval} onChange={(e)=>{setColorval(e.target.value)}}style={inputStyle}/>
        <button onClick={()=>{setcolorList([...colorList,colorval])}}>add color</button>
        <br /> <br />
        {colorList.map((element)=><div style={{height:"30px",width:"400px",backgroundColor:element}}> </div>)}
        
        </div>
    )
}