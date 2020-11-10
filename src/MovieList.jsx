import React, { useState } from 'react'
import Movie from './movie'

const MovieList = ({ movies }) => {
    return (
        <div className={"container"}>
            {movies.map(e => {
                return (
                    <Movie name={e.name} rate={e.rating} src={e.src} />
                );
            })}
        </div>
    )
}
export default MovieList;