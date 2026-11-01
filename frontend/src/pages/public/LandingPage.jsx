import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHeart,
  FiTruck,
  FiUsers,
  FiArrowRight,
  FiPackage,
  FiShield,
  FiZap
} from "react-icons/fi";

const features = [
  {
    icon: FiPackage,
    title: "Food Bridge",
    desc: "Donors list surplus food in seconds with photos, quantity, and pickup details.",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    icon: FiUsers,
    title: "NGO Network",
    desc: "Verified NGOs browse available donations and coordinate pickups efficiently.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: FiTruck,
    title: "Real-Time Tracking",
    desc: "Follow every delivery live on a map with GPS updates from volunteers.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: FiShield,
    title: "Verified & Secure",
    desc: "Multi-role access control with JWT auth, NGO verification, and audit logs.",
    color: "from-violet-500 to-violet-600"
  },
  {
    icon: FiZap,
    title: "Instant Notifications",
    desc: "Socket.IO and push notifications keep everyone updated instantly.",
    color: "from-amber-500 to-amber-600"
  },
  {
    icon: FiHeart,
    title: "Impact Analytics",
    desc: "Track meals served, food waste prevented, and environmental impact.",
    color: "from-rose-500 to-rose-600"
  }
];

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#F2E8D8] dark:bg-slate-950">
      {/* Navbar */}
      <nav className="sticky top-0 left-0 w-full z-50 bg-[#DCE8D5]/95 dark:bg-slate-900/90 backdrop-blur shadow-md border-b border-[#C5D4BD]">
        <div className="flex items-center justify-between px-10 py-4 w-full">
          <div className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="FoodBridge"
              className="w-9 h-9 rounded-xl object-cover"
            />
            <span className="font-extrabold text-xl text-slate-900 dark:text-white">
              FoodBridge
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-emerald-600"
            >
              Home
            </Link>
            <Link
              to="/#about"
              className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-emerald-600"
            >
              About Us
            </Link>
            <Link
              to="/#contact"
              className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-emerald-600"
            >
              Contact Us
            </Link>
            <Link
              to="/login"
              className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-emerald-600"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-1.5 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-16 pb-20 max-w-4xl mx-auto">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 px-3.5 py-1.5 text-xs font-semibold mb-5">
          <FiHeart size={12} /> Food Donation & Distribution Platform
        </span>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
          Share Food,{" "}
          <span className="text-emerald-600">Nourish Lives</span>
        </h1>
        <p className="mt-5 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          FoodBridge connects food donors, NGOs, and volunteers through a
          real-time platform that ensures surplus food reaches those who need
          it — tracked every step of the way.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/register"
            className="px-7 py-3 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 flex items-center gap-2"
          >
            Join the Network <FiArrowRight size={18} />
          </Link>
          <Link
            to="/donations"
            className="px-7 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-bold hover:bg-emerald-50"
          >
            Browse Donations
          </Link>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="max-w-3xl mx-auto px-6 pb-20 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          About Us
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
          FoodBridge ek platform hai jo extra food ko NGOs aur zaruratmandon
          tak pahunchata hai. Donors apna surplus food donate karte hain,
          volunteers usse pickup karke NGOs tak deliver karte hain — sab kuch
          real-time tracking ke saath.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-center mb-10 text-slate-900 dark:text-white">
          Everything you need to redistribute food at scale
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow">
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white mb-4`}
              >
                <f.icon size={20} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">
                {f.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-20 text-center">
        <div className="p-10 bg-gradient-to-br from-emerald-500 to-orange-500 rounded-2xl text-white">
          <h2 className="text-3xl font-extrabold">
            Ready to make a difference?
          </h2>
          <p className="text-white/80 mt-3">
            Join hundreds of donors, NGOs, and volunteers already on FoodBridge.
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-emerald-600 font-bold px-8 py-3 mt-6 rounded-lg hover:bg-orange-50 shadow-lg"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Contact Us Footer */}
      <footer
        id="contact"
        className="py-12 text-center bg-slate-800 dark:bg-slate-900 text-white"
      >
        <h2 className="text-2xl font-extrabold">Contact Us</h2>
        <p className="mt-4 text-slate-300">Email: bridgefood.official@gmail.com</p>
        <p className="text-slate-300">Phone: +91 74082 32006</p>
        <p className="text-slate-300">Phone: +91 63021 02649</p>
        <p className="text-slate-300">Phone: +91 63877 94240</p>
        <p className="text-slate-300">Phone: +91 95550 06802</p>
        <p className="text-slate-300">Address: SAREC Mirzapur U.P 231001</p>
        <p className="mt-6 text-sm text-slate-400">
          © {new Date().getFullYear()} FoodBridge. Built to reduce food waste.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;