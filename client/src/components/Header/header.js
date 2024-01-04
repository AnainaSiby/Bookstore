import { NavItem, Navbar } from 'react-bootstrap'
import './header.css'
import { NavLink } from 'react-router-dom'



export default function Header(){
   return(
     <div>
       <Navbar className='nav-main'>
        <div className='nav-inside container-fluid'>
        <div className='nav-head container'>
        <NavItem>
           <NavLink to="/">BOOKSTORE</NavLink>
         </NavItem>
        </div>
        <div className='nav-options container'>
         <NavItem className='items'>
           <NavLink to="/">Home</NavLink>
         </NavItem>
         <NavItem className='items'>
           <NavLink to="/addbook">Add Book</NavLink>
         </NavItem>
         <NavItem className='items'>
           <NavLink to="/mybooks">My Library</NavLink>
         </NavItem>
         </div>
         </div>
       </Navbar>
     </div>
   )
}