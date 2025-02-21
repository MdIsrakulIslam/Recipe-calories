import { UserPen } from 'lucide-react';

export default function Navbar() {
    return (
      
    <nav className="navbar flex  justify-between items-center p-4 ml-70 mr-70">
      <div className="navbar-logo">Calories</div>
      
    <div>
      <ul className="navbar-links flex gap-8 mx-auto">
        <li>Home</li>
        <li>Recipe</li>
        <li>About</li>
        <li>Search</li>
      </ul>
      </div>
      
      <div className=" flex items-center gap-2">
      <div className=" border rounded-full bg-gray-300">
        <input type="text" placeholder= " Search" />
        </div>
      
      
      <div className="border rounded-full bg-[#0BE58A] p-1">
      <UserPen />
      </div>
      
      </div>
      
    </nav>
    )
  }
  