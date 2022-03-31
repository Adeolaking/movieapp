import styled from 'styled-components';
import MovieCard from '../../movieCard';

const Container =styled.div`
  h4{
    margin-bottom: 0;
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


export default function Section() {
  
    
  return (

    <Container>
          <h4>Categories</h4>
          <SectionStyled>
                  <MovieCard/>
                  <MovieCard/>
                  <MovieCard/>
                  <MovieCard/>
                  <MovieCard/>
                  <MovieCard/>
                  <MovieCard/>
                  <MovieCard/>
                  <MovieCard/>
            </SectionStyled>

              <h4>Categories 2</h4>
            <SectionStyled>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </SectionStyled>
    </Container>
 

  )
}
