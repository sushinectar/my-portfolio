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
          </ul>
        </div>
        <div className="chat hidden mt-8">
          <a
            href="mailto:contato.sushinectar@gmail.com"
            className="flex justify-center items-center gap-4"
          >
            <button className="chat-btn bg-custom p-2 rounded-full border border-zinc-900">
              &#10230;
            </button>
            <h1 className="font-semibold">Let’s chat</h1>
          </a>
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
            </ul>
            <div className="mt-8">
              <a className="flex justify-center items-center gap-4">
                <button className="bg-custom p-2 rounded-full border border-zinc-900">
                  &#10230;
                </button>
                <h1>Let’s chat</h1>
              </a>
            </div>
          </div>
        </div>
      )}

      <main className="mt-40 flex flex-col justify-center items-center">
        <div className="container flex flex-col justify-center items-center px-8 pb-12">
          <div className="container-tittle">
            <h1 className="container-h1 text-6xl">Recent</h1>
            <h2 className="container-h2 text-5xl font-bold">Projects</h2>
          </div>
          <div className="projects flex flex-col my-6 gap-10">
            <a
              href="https://github.com/sushinectar/spotify-clone"
              className="flex flex-col gap-10"
            >
              <button className="projects-btn mx-10 p-4 rounded-3xl shadow-[5px_6px_0px_rgba(0,0,0,1)] border-2 border-zinc-950">
                <Image
                  className="projects-img"
                  src="/spotify-slide.png"
                  alt="A Spotify Clone"
                  width={200}
                  height={200}
                />
              </button>
              <div className="projects-text flex flex-col mx-10 gap-4">
                <h1 className="font-semibold text-xl">
                  Spotify Clone &#10230;
                </h1>
                <p>A Spotify app clone redesign made in React Native</p>
              </div>
            </a>

            <a
              href="https://github.com/sushinectar/prime-video"
              className="flex flex-col gap-10"
            >
              <button className="projects-btn mx-10 p-4 rounded-3xl shadow-[5px_6px_0px_rgba(0,0,0,1)] border-2 border-zinc-950">
                <Image
                  src="/primevideo-slide.png"
                  alt="A Prime Video clone"
                  width={200}
                  height={200}
                />
              </button>
              <div className="projects-text flex flex-col mx-10 gap-4">
                <h1 className="font-semibold text-xl">
                  Prime Video Clone &#10230;
                </h1>
                <p>A Prime Video clone redesign made in React Native.</p>
              </div>
            </a>

            <a
              href="https://github.com/sushinectar/weather-app"
              className="flex flex-col gap-10"
            >
              <button className="projects-btn mx-10 p-4 rounded-3xl shadow-[5px_6px_0px_rgba(0,0,0,1)] border-2 border-zinc-950">
                <Image
                  src="/weather-slide.png"
                  alt="A Weather App"
                  width={200}
                  height={200}
                />
              </button>
              <div className="projects-text flex flex-col mx-10 gap-4">
                <h1 className="font-semibold text-xl">Weather App &#10230;</h1>
                <p>
                  A Web Application with weather api using NextJS and Tailwind.
                </p>
              </div>
            </a>
          </div>
        </div>
      </main>

      <hr className="" />

      <footer className="flex flex-col gap-8 m-8">
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
            © 2025 Luciano Rodrigues. All Rights Reserved.
          </h1>
        </div>
      </footer>
    </div>
  );
}
