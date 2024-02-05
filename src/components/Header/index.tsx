import Image from "next/image";
import React from "react";

export default function index() {
  return (
    <header className="max-w-7xl mx-auto bg-bg-secondary h-[100px] flex items-center px-8 py-4">
      <div className="logo">
        <Image alt="Logo" src="/logo.jpeg" width={165} height={80} />
      </div>
      <nav className="nav">
        <ul className="navlist">
          <li className="navitem"></li>
          <li className="navitem"></li>
        </ul>
      </nav>
    </header>
  );
}
