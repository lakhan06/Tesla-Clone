import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section({title,discription,backgroundImg,leftbtnText,rightBtnText}) {
  return (
    <Wrap bgimage={backgroundImg}>
    <Fade bottom>
        
        <ItemText>
            <h1>{title}</h1>
            <p>{discription}</p>
        </ItemText>
    </Fade>
        <Button>
        <Fade bottom>
        <ButtonGroup>
            <LeftButton>
            {leftbtnText}

            </LeftButton>

            
            {rightBtnText &&

            <RightButton>
           {rightBtnText}

            </RightButton>
            }
        </ButtonGroup>
    </Fade>
        <DownArrow src='/images/down-arrow.svg'/>
        </Button>
       

        </Wrap>
  )
}

export default Section

const Wrap=styled.div`
width:100vw;
height:100vh;
    background-image:${props=>`url("/images/${props.bgimage}")`};
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center

`

const ItemText=styled.div`
padding-top:15vh;
text-align:center;
`

const Button=styled.div`
display:flex;
flex-direction:column;
`

const ButtonGroup=styled.div`
display:flex;

margin-bottom:50px;
@media(max-width:768px){
    flex-direction:column;

}

`
const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
${'' /* font-weight:bold; */}
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;


`
const RightButton=styled(LeftButton)`
color:black;
background-color:white;
opacity:0.65;
`

const DownArrow=styled.img`
margin-top:20px;
height:40px;
animation: animatedown infinite 1.5s;
overflow-x: hidden;
`