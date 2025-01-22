"use client";

import React, { useState } from "react";
import Image from "next/image";

import "./media.css";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex justify-around items-center bg-zinc-100 p-8 border z-10">
        {/* Logo */}
        <div>
          <h1 className="font-semibold text-xl">LUCIANO RODRIGUES</h1>
        </div>
        {/* Desktop Menu */}
        <div className="desktop-menu hidden md:flex">
          <ul>
            <li>
              <a href="/" className="text-zinc-700 hover:text-zinc-950">
                HOME
              </a>
            </li>
            <li>
              <a href="/about" className="text-zinc-700 hover:text-zinc-950">
                ABOUT
              </a>
            </li>
            <li>
              <a href="/projects" className="text-zinc-700 hover:text-zinc-950">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="/contact" className="text-zinc-700 hover:text-zinc-950">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            className="bg-translucent text-4xl text-zinc-950 rounded-md"
            onClick={toggleMenu}
          >
            =
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed-menu">
          <div className="menu-container">
            <button className="close-menu" onClick={toggleMenu}>
              &#10005;
            </button>
            <ul>
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      <main className="mt-40 flex flex-col justify-center items-center">
        <div className="container flex flex-col justify-center items-center px-8">
          <div className="container-tittle">
            <h1 className="container-h1 text-6xl">Recent</h1>
            <h2 className="container-h2 text-5xl font-bold">Projects</h2>
          </div>
          <div></div>

        </div>
      </main>

      {/* <footer className="flex flex-col gap-8 m-8">
        <div className="footer flex flex-col gap-8">
          <div className="footer-links grid grid-cols-2 gap-4">
            <a href="" className="text-lg text-zinc-700">
              HOME
            </a>
            <a href="/about" className="text-lg text-zinc-700">
              ABOUT
            </a>
            <a href="/projects" className="text-lg text-zinc-700">
              PROJECTS
            </a>
            <a href="/contact" className="text-lg text-zinc-700">
              CONTACT
            </a>
          </div>
          <h1 className="text-sm text-zinc-700">
            © 2024 Luciano Rodrigues. All Rights Reserved.
          </h1>
        </div>
      </footer> */}
    </div>
  );
}
