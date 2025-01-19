"use client";

import React, { useState } from "react";

import "./media.css";

import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Array containing the image and link data for each slide
  const slides = [
    {
      imageSrc: "/spotify-slide.png",
      link: "https://github.com/sushinectar/prime-video",
      text: "A Spotify clone",
    },
    {
      imageSrc: "/primevideo-slide.png",
      link: "https://github.com/sushinectar/prime-video",
      text: "A Prime Video clone",
    },
    {
      imageSrc: "/weather-slide.png",
      link: "https://github.com/sushinectar/weather-app",
      text: "A Weather App",
    },
    {
      imageSrc: "/ndkforum-slide.png",
      link: "https://github.com/sushinectar/ndk-forum",
      text: "A forum of CS 1.6 server",
    },
  ];

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
        {/* Summary about */}
        <div className="container flex flex-col gap-8">
          <div className="container-text flex flex-col justify-center items-center text-center gap-10">
            <div className="container-tittle">
              <h1 className="container-h1 text-6xl font-bold">Software</h1>
              <h2 className="container-h2 text-5xl font-bold">Developer</h2>
            </div>
            <p className="w-72">
              I'm Luciano Rodrigues, a software developer and pentester with a
              focus on building efficient, secure, and user-friendly web
              solutions. Currently, I'm working as a freelancer, turning ideas
              into functional and robust digital experiences.
            </p>
          </div>
          <div className="flex items-center justify-center mb-16">
            <div className="container-img relative overflow-hidden rounded-t-full w-64 h-64 shadow-[10px_12px_0px_rgba(183,48,7,1)] border-2 border-zinc-950">
              <Image
                src="/photo-me.JPEG"
                alt="Luciano Photo"
                layout="fill"
                objectFit="cover"
                className="rounded-t-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
        <div className="w-screen bg-zinc-950 pt-24 pr-8 pb-24 pl-8">
          <div className="flex flex-col gap-8 border-dashed-custom border-dashed p-6">
            <h1 className="text-xl text-zinc-100 font-semibold">
              Tools I use and am learning
            </h1>
            <p className="text-zinc-300">
              The most effective way to stay organized and productive in my work
              is by utilizing these four essential tools, whether I'm working
              alone or collaborating with a team.
            </p>
            <div className="flex gap-4">
              <Image
                src="/notion-icon.png"
                alt="Notion Icon"
                width={50}
                height={50}
              />
              <Image
                src="/figma-icon.png"
                alt="Figma Icon"
                width={50}
                height={50}
              />
              <Image
                src="/next-icon.png"
                alt="NextJS Icon"
                width={50}
                height={50}
              />
              <Image
                src="/tailwind-icon.png"
                alt="TailwindCSS Icon"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col text-center items-center w-screen p-3 gap-4">
          <h1 className="text-3xl font-bold">See my latest projects</h1>
          <p className="text-zinc-700">
            Take a glimpse into my latest projects and explore what I've
            accomplished so far.
          </p>
          <a href="projects" className="text-custom font-semibold m-6">
            See some of my projects
          </a>
          <Carousel className="w-60">
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 mb-4">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <a href={slide.link}>
                          <Image
                            src={slide.imageSrc}
                            alt={`Project ${index + 1}`}
                            width={300}
                            height={200}
                            className="rounded-lg"
                          />
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                  <h1 className="font-semibold">{slide.text}</h1>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="w-screen bg-zinc-950 pt-24 pr-8 pb-24 pl-8">
          <div className="flex flex-col gap-8 border-dashed-custom border-dashed p-6">
            <h1 className="text-xl text-zinc-100 font-semibold">
              Ways to contact me
            </h1>
            <p className="text-zinc-300">
              The most reliable ways to get in touch with me are through these
              three channels: LinkedIn, Instagram, and email. Whether you’re
              looking to collaborate, share ideas, or just say hi, feel free to
              reach out!
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/nectarsushi/">
                <Image
                  src="/instagram.png"
                  alt="Instagram Icon"
                  width={50}
                  height={50}
                />
              </a>
              <a href="https://www.linkedin.com/in/luciano-rodrigues-25173133b/">
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn Icon"
                  width={50}
                  height={50}
                />
              </a>
              <a href="mailto:contato.sushinectar@gmail.com">
                <Image
                  src="/o-email.png"
                  alt="Email Icon"
                  width={50}
                  height={50}
                />
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-8 m-8">
        <div className="grid grid-cols-2 gap-4">
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
      </footer>
    </div>
  );
}
