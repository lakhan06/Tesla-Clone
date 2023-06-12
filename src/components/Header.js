import React ,{useState}from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { selectCars } from '../features/Car/Carslice';
import { useSelector } from 'react-redux';


function Header({BurggerStatus,SetBurggerStatus}) {
    // const [BurggerStatus,SetBurggerStatus]=useState(false);
    const cars=useSelector(selectCars)
  return (

    <Container>
    <a>
        <img src="images/logo.svg" alt="" />
    </a>
    <Menu>

    {
        cars && cars.map((car,index)=>(


    <a href='#' key={index}>{car}</a>
        )

        )
    }
    
    </Menu>
    <RightMenu>

    <a href='#'>Shop</a>
    <a href='#'>Tesla Account</a>
<CustomMenu onClick={()=>SetBurggerStatus(true)}/>
    </RightMenu>

    <BurgerMenu status={BurggerStatus}>
    <CloseWrapper>

    <CustomClose onClick={()=>SetBurggerStatus(false)}/>
    </CloseWrapper>
    {
        cars && cars.map((car,index)=>(


    <li> <a href='#' key={index}>{car}</a></li>
        )

        )
    }
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Trade-in</a></li>
        
    </BurgerMenu>
    </Container>
  )
}

export default Header

const Container =styled.div`
min-height:50px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
width:100%;
z-index:1;
opacity:${props=>props.status?`0.1`:`1`};
`

const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
flex-wrap:nowrap;
}

@media(max-width:768px){
    display:none;
}
`
const RightMenu=styled.div`
display:flex;
align-items:center;


a{
    font-weight:600;
    text-transform:uppercase;
flex-wrap:nowrap;
    margin-right:10px;
}
`
const CustomMenu=styled(MenuIcon)`
cursor:pointer;

`

const BurgerMenu=styled.div`

position:fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:300px;
z-index:10;
list-style:none;
padding:20px;
transform:${props=>props.status?`translateX(0)`:`translateX(100%)`};
transition:all 0.2s;

li{
    padding: 15px 0;
    border-bottom:1px solid rgba(0,0,0,0.2);

    a{
        font-weight:600;
    }
}


`

const CustomClose=styled(CloseIcon)`
cursor:pointer;

`
const  CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;
`
