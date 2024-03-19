import { MovieCard } from "./MovieCard"



export const MovieList = ({movieList}) => {
  return (
    <div className='d-flex flex-wrap bg-dark text-white' style={{gap:"2%"}}>      
    {
      // here map method has element and index since it is array. to access index number id is assed as props and used in movieCard
      movieList.map((element,index)=>(<MovieCard key={index} {...element} id={index}/>))
    }

    </div>
    
  )
}

