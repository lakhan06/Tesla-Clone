 import React from 'react'
 import styled from 'styled-components'
 import Section from './Section'
 
 function Home({BurggerStatus,SetBurggerStatus}) {
   return (
     <Container status={BurggerStatus}>
     <Section
        title="Model S"
        discription="Order Online For touchless Delivery"
        backgroundImg="model-s.jpg"
        leftbtnText="Custom Order"
        rightBtnText="Existing Inventory"
     />
     <Section
        title="Model Y"
        discription="Order Online For touchless Delivery"
        backgroundImg="model-y.jpg"
        leftbtnText="Custom Order"
        rightBtnText="Existing Inventory"
     />
     <Section
        title="Model 3"
        discription="Order Online For touchless Delivery"
        backgroundImg="model-3.jpg"
        leftbtnText="Custom Order"
        rightBtnText="Existing Inventory"
     />
     <Section
        title="Model X"
        discription="Order Online For touchless Delivery"
        backgroundImg="model-x.jpg"
        leftbtnText="Custom Order"
        rightBtnText="Existing Inventory"
     />
     <Section
        title="Lowest Cost Solar Panels in America"
        discription="Money-Back guarantee"
        backgroundImg="solar-panel.jpg"
        leftbtnText="Order now"
        rightBtnText="Learn More"
     />
     <Section
        title="Solar for New Roofs"
        discription="Solar Roof Costs Less Then a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftbtnText="Order now"
        rightBtnText="Learn More"
     />
     <Section
        title="Acessories"
        discription=""
        backgroundImg="accessories.jpg"
        leftbtnText="Shop now"
        
     />
     
     
     </Container>
   )
 }
 
 export default Home

 const Container=styled.div`

 height:100vh;
 opacity:${props=>props.status?`0.4`:`1`};
 `

