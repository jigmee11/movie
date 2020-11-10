import React from 'react'

const Movie = (props) => {
    return(
        <div className={"one"}>
          <img src={props.src} id={"imgone"} className={"poster"}/>
          <div className={"bottom"}>
          <p>{props.name}</p>
           <p className={"rater"}>{props.rate}</p>
          </div>
        </div>
    );
}
export default Movie;