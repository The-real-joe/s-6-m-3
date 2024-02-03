import React from 'react';
import styled from 'styled-components';


const StyledFigure = styled.figur`
max-width: 300px;
figcaption{
    font-style: italic;
}
`


export default function Figure({image, author , date}){
return (
    <figure>
      <img src={imageURL}></img>
      <figcaption>Awesome pic taken on {date}</figcaption>
    </figure>
)
}