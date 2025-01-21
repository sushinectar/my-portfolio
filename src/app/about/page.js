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
                <a href="" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="projects" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <main className="mt-40 flex flex-col justify-center items-center gap-12">
        <div className="container flex flex-col gap-8">
          <div className="container-text flex flex-col justify-center items-center text-center gap-10">
            <div className="container-tittle">
              <h1 className="container-h1 text-6xl">Hi there,</h1>
              <h2 className="container-h2 text-5xl font-bold">I'm Luciano</h2>
            </div>
            <p className="w-72">
              I'm a software developer and pentester passionate about creating
              functional, secure, and visually appealing digital experiences. I
              specialize in building responsive websites and apps with a focus
              on performance, design, and security. Currently freelancing, I
              collaborate with clients to bring ideas to life while exploring
              new technologies. Based in Brazil, I enjoy engaging with tech
              communities, refining my skills, and working on creative projects.
              Outside of coding, I love discovering coffee spots, gaming, and
              enjoying the sunrise after late brainstorming sessions. Reach out
              for a chat or collaboration!
            </p>
          </div>
          <div className="flex items-center justify-center mb-16">
            <div className="container-img relative overflow-hidden rounded-full w-64 h-64 border-2 border-zinc-950">
              <Image
                src="/photo-about.jpeg"
                alt="Luciano Photo"
                layout="fill"
                objectFit="cover"
                className="object-bottom scale-110"
              />
            </div>
          </div>
        </div>

        <div></div>
      </main>
    </div>
  );
}
