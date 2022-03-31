import React from 'react';
import styled from 'styled-components';


export const MovieCardStyled= styled.div`

            width: 20rem;
            height:15rem;
            background:black;
            border-radius: 1rem;

`

export default function MovieCard() {
  return (
    <MovieCardStyled>
        movieCard
    </MovieCardStyled>
  )
}
