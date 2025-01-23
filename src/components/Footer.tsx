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
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-white">
                Courses
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              {/* <FaFacebookF size={20} /> */}
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              {/* <FaTwitter size={20} /> */}
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              {/* <FaInstagram size={20} /> */}
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
      <p className="text-center text-xs pt-12">2025 Music Academy. All Rights Recived. Developed By Puzzels.co</p>
    </footer>
  );
}
