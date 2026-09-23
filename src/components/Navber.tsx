

import logo from "../assets/logo-text.png";

const Navber = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <img src={logo} alt="logo" className="h-10" />

        <ul className="hidden md:flex gap-8 font-medium">
          <li className="text-pink-500">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex gap-4 items-center">
          <button className="cursor-pointer">Sign In</button>

          <button className="cursor-pointer px-5 py-2 rounded-full text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navber;