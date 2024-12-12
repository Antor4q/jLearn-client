import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarCollapseBtn,
    NavbarContainer,
    NavbarItem,
    NavbarList,
  } from 'keep-react'
import { NavLink } from 'react-router-dom';
  


const NavbarComponent = () => {
    return (
         <section className='lg:max-w-[1240px] px-4 lg:px-0 mx-auto'>
             <Navbar className='border-none'>
      <NavbarContainer>
        <NavbarBrand>
           <h3 className="text-3xl font-bold font-serif"><span className='text-blue-600'>j</span>Learn</h3>
        </NavbarBrand>
        <NavbarList>
          <NavbarItem><NavLink style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="/">Home </NavLink></NavbarItem>
          <NavbarItem><NavLink style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="/lessons">Lessons </NavLink></NavbarItem>
          <NavbarItem><NavLink style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="tutorials">Tutorials </NavLink></NavbarItem>
         
          <NavbarItem active>SignIn</NavbarItem>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
        <NavbarItem><NavLink style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="/">Home </NavLink></NavbarItem>
          <NavbarItem><NavLink style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="lessons">Lessons </NavLink></NavbarItem>
          <NavbarItem><NavLink style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="tutorials">Tutorials </NavLink></NavbarItem>
          <NavbarItem active>SignIn</NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
         </section>
    );
};

export default NavbarComponent;