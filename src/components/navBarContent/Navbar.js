import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-2 py-8 mb-5">
      <div className="container px-4 mx-auto flex items-center justify-between pt-[32px] pb-[20px] fixed bg-[#0a192f] z-40">
        <div className="w-full relative flex justify-between  px-4 ">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
            href="#pablo"
          >
            Tailwind
          </a>
        </div>

        <div className="lg:flex flex-grow items-center">
          <ul className="flex list-none font-mono">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-[#ccd6f6] hover:opacity-75"
                href="#pablo"
              >
                <span className="ml-2 text-[#58E0C4] pr-3">1. </span>
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-[#ccd6f6] hover:opacity-75"
                href="#pablo"
              >
                <span className="ml-2 text-[#58E0C4] pr-3">2. </span>
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-[#ccd6f6] hover:opacity-75"
                href="#pablo"
              >
                <span className="ml-2 text-[#58E0C4] pr-3">3. </span>
                Work
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-[#ccd6f6] hover:opacity-75"
                href="#pablo"
              >
                <span className="ml-2 text-[#58E0C4] pr-3">4. </span>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button className="bg-transparent hover:bg-[rgba(100,255,218,0.1)] text-[#58E0C4] text-sm	 py-2 px-4 rounded border border-[#58E0C4] border-solid">
          Resume
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
