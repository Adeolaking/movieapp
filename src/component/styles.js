import styled from 'styled-components'


export const Nav= styled.nav`
    padding:2rem;
    display:flex;
    background-color: #282c34;
    align-items: center;
    @media(max-width: 400px){
        justify-content: center;
    }
    .logo{
        padding:.5rem;
        color: #c5c5c5;
        border: solid .2rem ;
        display: inline-block;
    }
`


export const Main = styled.main`
    padding: 1.5rem ;
    .input-cont{
        display: flex;
        flex-direction: column;
        span{
            align-self: flex-start;
            font-weight: 500;
        }
        input{
            padding: .5rem;
            border:gray solid 1px;
            border-radius: .2rem;
            &:focus{
                outline: none;
            }
        }
    }
    
  

`


