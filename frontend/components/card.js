import Reacr from 'react';
import Figure from './figure';
import styled from 'styled-components';

const StyleCard= styled.div`
border: 1px solid black;
padding: 2rem;
border-radius: 12px;
h2{
    margin: 0 0 1rem 0;
    color: ${pr=>pr.$color};
    font-size: 2.5em;
}
p{
    margin: 0 0 1.5rem 0;

    &::first-line{
        font-size: 1.5rem;
    }
}
`


export default function Card({title, text, image, date}){
    return (
      <StyledCard $color="orange" className = 'card'>
    <h2>{title}</h2>
    <p>{text}</p>
    <Figure image={image} author = {author}date={date}/>
  </StyledCard>
    )
}