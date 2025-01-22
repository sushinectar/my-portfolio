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
      <main className="mt-40 flex flex-col justify-center items-center gap-">
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

        <div className="work flex flex-col justify-center items-center text-center w-screen py-24 px-10 bg-purple-100">
          <div className="work-text flex flex-col text-left gap-6">
            <h1 className="font-semibold text-3xl mb-8">
              This is how I do it ✦
            </h1>
            <h2 className="font-semibold">
              Creating experiences that matter by putting users and their needs
              at the forefront.
            </h2>
            <h3 className="text-zinc-800">
              Every project I take on—whether in development or cybersecurity—is
              guided by a commitment to meaningful impact. My focus is on
              creating solutions that are intuitive, reliable, and purposeful,
              ensuring users feel understood and valued at every step of the
              journey.
            </h3>
          </div>
          <div className="work-list flex flex-col items-center mt-16 gap-12">
            <div className="flex text-left gap-6">
              <div className="star-img flex justify-center items-center w-16 h-16 p-4 rounded-xl shadow-[5px_6px_0px_rgba(0,0,0,1)] border-2 border-zinc-950 bg-yellow-100">
                <Image src="/star.png" alt="Star icon" width={30} height={30} />
              </div>
              <p className="w-52">
                <b>Empathy first.</b> I start by understanding the problem from
                the user's perspective, asking the right questions to shape
                decisions that align with real-world needs.
              </p>
            </div>
            <div className="flex text-left gap-6">
              <div className="bullseye-img flex justify-center items-center w-16 h-16 p-4 rounded-xl shadow-[5px_6px_0px_rgba(0,0,0,1)] border-2 border-zinc-950 bg-lime-100">
                <Image
                  src="/bullseye.png"
                  alt="Star icon"
                  width={30}
                  height={30}
                />
              </div>
              <p className="w-52">
                <b>Simplicity is key.</b> By stripping away the unnecessary, I
                create streamlined, effective solutions that prioritize
                functionality, consistency, and clarity.
              </p>
            </div>
            <div className="flex text-left gap-6">
              <div className="hand-img flex justify-center items-center w-16 h-16 p-4 rounded-xl shadow-[5px_6px_0px_rgba(0,0,0,1)] border-2 border-zinc-950 bg-blue-100">
                <Image
                  src="/hand-shake.png"
                  alt="Star icon"
                  width={30}
                  height={30}
                />
              </div>
              <p className="w-52">
                <b>Collaboration builds greatness.</b> From brainstorming to
                development, open communication and teamwork drive the best
                results. Iteration is an opportunity to refine and improve
                ideas.
              </p>
            </div>
          </div>
        </div>
        <div className="tools-main w-screen bg-zinc-900 pt-24 pr-8 pb-24 pl-8">
          <div className="tools flex flex-col gap-8 p-6">
            <div className="tools-text flex flex-col gap-4">
              <h1 className="text-xl text-zinc-100 font-semibold">
                Tools I use and am learning
              </h1>
              <p className="text-zinc-300">
                The most effective way to stay organized and productive in my
                work is by utilizing these four essential tools, whether I'm
                working alone or collaborating with a team.
              </p>
            </div>
            <div className="flex gap-4">
              <Image
                className="notion-img"
                src="/notion-icon.png"
                alt="Notion Icon"
                width={50}
                height={50}
              />
              <Image
                className="figma-img"
                src="/figma-icon.png"
                alt="Figma Icon"
                width={50}
                height={50}
              />
              <Image
                className="next-img"
                src="/next-icon.png"
                alt="NextJS Icon"
                width={50}
                height={50}
              />
              <Image
                className="tail-img"
                src="/tailwind-icon.png"
                alt="TailwindCSS Icon"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </main>
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
            © 2024 Luciano Rodrigues. All Rights Reserved.
          </h1>
        </div>
      </footer>
    </div>
  );
}
