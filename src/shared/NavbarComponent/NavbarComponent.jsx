import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarCollapseBtn,
    NavbarContainer,
    NavbarItem,
    NavbarList,
  } from 'keep-react'
import toast, { Toaster } from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
  


const NavbarComponent = () => {

  const navigate = useNavigate()

  const handleLogOut = () => {
    try {
      // Remove token
      localStorage.removeItem("authToken");
      
      // Show logout toast message
      toast.success("You are logged out");
      
      // Navigate to the SignIn page
      navigate("/signIn");
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("An error occurred during logout.");
    }
  };
    return (
         <section className='lg:max-w-[1240px] px-4 lg:px-0 mx-auto'>
             <Navbar className='border-none'>
      <NavbarContainer>
        <NavbarBrand>
           <h3 className="text-3xl font-bold font-serif"><span className='text-blue-600'>j</span>Learn</h3>
        </NavbarBrand>
        <NavbarList>
          
          <NavbarItem><NavLink style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="/" end>Lessons </NavLink></NavbarItem>
          <NavbarItem><NavLink style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="tutorials">Tutorials </NavLink></NavbarItem>
         
          <NavbarItem><button onClick={handleLogOut} className='text-white bg-blue-500 p-3 rounded-xl'>LogOut</button> <Toaster/></NavbarItem>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
        
          <NavbarItem><NavLink style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="/" end>Lessons </NavLink></NavbarItem>
          <NavbarItem><NavLink style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="tutorials">Tutorials </NavLink></NavbarItem>
          <NavbarItem><button onClick={handleLogOut} className='text-white bg-blue-500 p-3 rounded-xl'>LogOut</button> <Toaster/></NavbarItem>
         
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
         </section>
    );
};

export default NavbarComponent;