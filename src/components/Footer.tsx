// import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
"use client";
export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white font-bold text-lg mb-4">About Us</h2>
          <p>
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" aria-label="Home" className="hover:text-white transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" aria-label="About" className="hover:text-white transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="/courses" aria-label="Courses" className="hover:text-white transition duration-300">
                Courses
              </a>
            </li>
            <li>
              <a href="/contact" aria-label="Contact" className="hover:text-white transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Contact Us</h2>
          <p>
            New Delhi, India
            <br />
            Delhi 10001
          </p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <p className="text-center text-xs pt-12">
        2025 Music Academy. All Rights Reserved. Developed By Puzzels.co
      </p>
    </footer>
  );
}
