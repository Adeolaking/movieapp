import React from 'react'
import styled from 'styled-components';


export const MovieCardStyled= styled.div`

            width: 20rem;
            height:23rem;
            background:black;
            border-radius: 1rem;
            overflow:hidden;
            position:relative;
            display: felx;
            justify-content: center;
            align-items:center;
            img{
                width: 100%;
            }
            h4{
                position:absolute;
                color: gray;
                z-index: 300;
                background-image: linear-gradient(to right, #fff6, #ffff);
                padding:.5rem;
                border-radius: 3px;
                
            }

`

export const SectionStyled = styled.section`
            padding: 2rem 0;
            display:flex;
            gap: 1rem;
            flex-wrap: wrap;
            justify-content: flex-start;
            @media(min-width: 400px){
              justify-content: flex-start;
}
            .row--1{

            }

            .row--2{
                
            }

`

const MovieList= (props)=> {
  return (
    <SectionStyled>
        {props.movies.map((movie, index)=> <MovieCardStyled key={index}> <img src={movie.Poster} alt="movie" />
        <h4>{movie.Title}</h4>
        </MovieCardStyled>
        )}
    </SectionStyled>
  )
}

export default MovieList;