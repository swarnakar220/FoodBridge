import { Link } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-white shadow">
      <Link to="/" className="text-xl font-bold text-emerald-600">
        FoodBridge
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/" className="text-sm font-medium text-slate-700">
          Home
        </Link>
        <Link to="/about" className="text-sm font-medium text-slate-700">
          About Us
        </Link>
        <Link to="/contact" className="text-sm font-medium text-slate-700">
          Contact Us
        </Link>
        <Link to="/login" className="text-sm font-medium text-slate-700">
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-1.5 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default PublicNavbar;