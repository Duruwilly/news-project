import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import DecoLine from "./DecoLine";

const Footer = () => {
  return (
    <footer className="bg-black py-16 mt-5">
      <main className="sub-section text-white">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <Link to="/" className="font-extrabold text-4xl">
              <span className="text-primary-color capitalize">news</span>feed
            </Link>
            <p className="my-4">
              we feed you with the latest top headline at your one stop from all
              over the world
            </p>
            <div className="flex items-center gap-5">
              <a
                href="#"
                target="_blank"
                className="text-2xl bg-blue-800 rounded-full p-2"
              >
                <FaFacebookF />
              </a>
              <a
                href=""
                target="_blank"
                className="text-2xl bg-blue-500 rounded-full p-2"
              >
                <FaTwitter />
              </a>
              <a
                href=""
                target="_blank"
                className="text-2xl bg-pink-700 rounded-full p-2"
              >
                <AiFillInstagram />
              </a>
              <a
                href=""
                target="_blank"
                className="text-2xl bg-primary-color rounded-full p-2"
              >
                <AiFillYoutube />
              </a>
            </div>
          </div>

          <div>
            <p>Tags</p>
            <DecoLine />
            <div className="flex flex-wrap gap-1 mt-4">
              <div className="bg-primary-color p-1">
                <p>Football</p>
              </div>
              <div className="bg-fuchsia-700 p-1">
                <p>Covid 19</p>
              </div>
              <div className="bg-yellow-700 p-1">
                <p>Life Style</p>
              </div>
              <div className="bg-violet-400 p-1">
                <p>Trending News</p>
              </div>
              <div className="bg-blue-500 p-1">
                <p>Technology</p>
              </div>
              <div className="bg-indigo-700 p-1">
                <p>Travel</p>
              </div>
              <div className="bg-blue-700 p-1">
                <p>Health</p>
              </div>
            </div>
          </div>

          <div>
            <p>Stay In Touch</p>
            <DecoLine />
            <div className="mt-4">
              <p>
                To be updated with all the latest news, offers and special
                announcements.
              </p>
              <form action="">
                <input
                  type="text"
                  required
                  placeholder="FullName"
                  name="name"
                  className="my-2 mx-0 w-full p-3 block bg-white text-gray-300 focus:outline-none focus:border focus:border-primary-color focus:text-black placeholder-whit"
                />
                <button
                  type="submit"
                  className="w-full p-3 bg-primary-color capitalize font-bold hover:bg-transparent hover:text-white hover:border hover:border-primary-color"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
