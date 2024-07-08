import React from "react";

function Header() {
  return (
    <div className="lg:px-20 navbar bg-base-100">
      <div className="navbar-start w-full text-center justify-center lg:navbar-start">
        <a className="btn btn-ghost text-xl">𝓛𝓪𝓻𝓲𝓼𝓼𝓪</a>
      </div>
      <div className="hidden lg:flex lg:navbar-end">
        <a href="#form">
          <button className="btn px-10">Pre-order</button>
        </a>
      </div>
    </div>
  );
}

export default Header;
