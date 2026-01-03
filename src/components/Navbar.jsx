// Note: This component shows the navigation bar with links to Home and Profile.
import logo from "./../assets/logo-ironhack-blue.png";
// Note: Import Link for navigation
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between h-20 items-center px-4">
        <div className="flex items-center space-x-2 w-1/4">

          {/* Home Button (Logo) - Link to Home */}
          <Link to="/" className="flex items-center text-l py-1">
            {/* Note: Clicking logo goes to Home */}
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>

        <div className="flex justify-center w-1/2">
        <span className="text-xl">
            Cohort Tools
          </span>
        </div>

        <div className="w-1/4 flex justify-end mr-4">
          {/* User Profile Button - Link to Profile */}
          <Link to="/profile" className="flex items-center text-l py-1">
            {/* Note: Clicking user icon goes to Profile */}
            <img
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-1.png"
              alt="Logo"
              className="h-10 w-auto border-solid border border-white rounded-3xl p-1"
            />
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
