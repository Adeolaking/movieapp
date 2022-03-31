import styled from "styled-components";


const Header = styled.header`
    background: url('media/image.jpg');
    background-size: cover;
    height: 75vh;
    width: 100%;

    display:flex;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem;

    h1{
        color: white;
        text-align:left;
        font-weight: 500;
        font-size: 4.5rem;

        @media(max-width: 400px){
            text-align: center;
        }
    }


`
export default Header;


