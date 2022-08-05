import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <main className=" sub-section flex flex-col md:flex-row justify-between items-center py-4">
        <Link to="/" className="font-extrabold text-4xl flex-[2]">
          <span className="text-primary-color capitalize">news</span>feed
        </Link>
        <div className="flex justify-between flex-[4] w-full bg-gradient-to-t from-black to-primary-color p-3">
          <p className="text-white">
            Best Selling <strong className="uppercase">blog</strong> and{" "}
            <strong className="uppercase">magazine</strong> <br />
            <span className="text-primary-color">Experience the change</span>
          </p>
          <button className="uppercase bg-primary-color px-3 text-white">
            <Link to="/">purchase now</Link>
          </button>
        </div>
      </main>
    </header>
  );
};

export default Header;
