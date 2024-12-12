

import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';


const Dashboard = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  

    return (
        <div className="h-screen flex flex-col lg:flex-row">
        {/* Sidebar for Desktop */}
        <aside className="hidden fixed min-h-screen  lg:block w-64 bg-gray-800 text-white">
          <h3 className="text-3xl font-bold p-4 font-serif"><span className='text-blue-600'>j</span>Learn</h3>
          <div className="flex flex-col space-y-2 p-4">
          <NavLink className="flex hover:bg-[#2f82ff95] items-center gap-2" style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="/dashboard" end>Manage Lessons</NavLink>
          <NavLink className="flex hover:bg-[#2f82ff95] items-center gap-2" style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="/dashboard/manageUsers">Manage Users</NavLink>
          <NavLink className="flex hover:bg-[#2f82ff95] items-center gap-2" style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="/dashboard/manageVocabulary">Manage Vocabularies</NavLink>
           
          </div>
        </aside>
  
        {/* Top Bar for Mobile and Tablet */}
        <header className="lg:hidden bg-gray-800 text-white p-4 flex justify-between items-center">
        <h3 className="text-3xl font-bold p-4 font-serif"><span className='text-blue-600'>j</span>Learn</h3>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            ☰
          </button>
        </header>
  
        {/* Mobile Menu with Dropdown Effect */}
        <div
          className={`lg:hidden bg-gray-800 text-white transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-60' : 'max-h-0'
          }`}
        >
         <div className="flex flex-col space-y-2 p-4">
          <NavLink className="flex hover:bg-[#2f82ff95] items-center gap-2" style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="/dashboard"  end>Manage Lessons</NavLink>
          <NavLink className="flex hover:bg-[#2f82ff95] items-center gap-2" style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="/dashboard/manageUsers">Manage Users</NavLink>
          <NavLink className="flex hover:bg-[#2f82ff95] items-center gap-2" style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="/dashboard/manageVocabulary">Manage Vocabularies</NavLink>
           
          </div>
        </div>
  
        {/* Main Content */}
        <main className="flex-1 lg:pl-[256px]">
          <Outlet/>
        </main>
      </div>
    );
};

export default Dashboard;