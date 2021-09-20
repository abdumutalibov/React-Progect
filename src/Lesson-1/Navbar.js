import React from 'react'

import { Link } from 'react-router-dom'
import { Container, Item } from './styleNavbar'
function App() {
  return (
 <Container>
<Link to={'/home'}>
<Item>Heme</Item>
</Link>

   <Link to={'/about'}>
   <Item>About</Item>
   </Link>
   <Link to={'/logo'}>
     <Item>Logo</Item>
   </Link>
 <Link to={'/con'}> 
 <Item>Contact</Item>
 </Link>
  <Link to={'/m'}>
  <Item>Movies</Item>
  </Link>
   
 </Container>
  )
}

export default App
