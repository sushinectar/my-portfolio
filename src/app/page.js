"use client"

import React, { useState } from "react"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Array containing the image and link data for each slide
  const slides = [
    {
      imageSrc: "/primevideo-slide.png",
      link: "https://github.com/sushinectar/prime-video",
      text: "A Prime Video clone",
    },
    {
      imageSrc: "/ndkforum-slide.png",
      link: "https://github.com/sushinectar/ndk-forum",
      text: "A forum of CS 1.6 server",
    },
  ]

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex justify-around items-center bg-zinc-100 p-4 border z-10">
        {/* Logo */}
        <div>
          <h1 className="font-semibold text-xl">Luciano Rodrigues</h1>
        </div>
        <div className="flex">
          <button className="bg-translucent text-4xl text-zinc-950 rounded-md" onClick={toggleMenu}>
            =
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-lg relative w-3/4 max-w-md">
            <button className="absolute top-2 right-2 text-gray-600" onClick={toggleMenu}>
              &#10005;
            </button>
            <ul className="flex flex-col gap-4 text-center">
              <li>
                <a href="" className="text-lg hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="about" className="text-lg hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="projects" className="text-lg hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="contact" className="text-lg hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      <main className="mt-40 flex flex-col justify-center gap-12">
        {/* Summary about */}
        <div className="flex flex-col justify-center items-center text-center gap-10">
          <h1 className="text-6xl font-bold">Web Developer</h1>
          <p className="w-72">
            I'm Luciano Rodrigues, a web developer and pentester with a focus on building efficient, secure, and
            user-friendly web solutions. Currently, I'm working as a freelancer, turning ideas into functional and
            robust digital experiences.
          </p>
        </div>
        <div className="flex items-center justify-center mb-16">
          <div className="relative overflow-hidden rounded-t-full w-64 h-64 shadow-[10px_12px_0px_rgba(183,48,7,1)] border-2 border-zinc-950">
            <Image
              src="/photo-me.JPEG"
              alt="Luciano Photo"
              layout="fill"
              objectFit="cover"
              className="rounded-t-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
        <div className="bg-zinc-950 pt-24 pr-8 pb-24 pl-8">
          <div className="flex flex-col gap-8 border-dashed-custom border-dashed p-6">
            <h1 className="text-xl text-zinc-100 font-semibold">Tools I use and am learning</h1>
            <p className="text-zinc-300">
              The most effective way to stay organized and productive in my work is by utilizing these four essential
              tools, whether I'm working alone or collaborating with a team.
            </p>
            <div className="flex gap-4">
              <Image src="/notion-icon.png" alt="Notion Icon" width={50} height={50} />
              <Image src="/figma-icon.png" alt="Figma Icon" width={50} height={50} />
              <Image src="/next-icon.png" alt="NextJS Icon" width={50} height={50} />
              <Image src="/tailwind-icon.png" alt="TailwindCSS Icon" width={50} height={50} />
            </div>
          </div>
        </div>
        <div className="flex flex-col text-center items-center p-3 gap-4">
          <h1 className="text-3xl font-bold">See my latest projects</h1>
          <p className="text-zinc-700">
            Take a glimpse into my latest projects and explore what I've accomplished so far.
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
        <div className="bg-zinc-950 pt-24 pr-8 pb-24 pl-8">
          <div className="flex flex-col gap-8 border-dashed-custom border-dashed p-6">
            <h1 className="text-xl text-zinc-100 font-semibold">Ways to contact me</h1>
            <p className="text-zinc-300">
              The most reliable ways to get in touch with me are through these three channels: LinkedIn, Instagram, and
              email. Whether you’re looking to collaborate, share ideas, or just say hi, feel free to reach out!
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/nectarsushi/">
                <Image src="/instagram.png" alt="Instagram Icon" width={50} height={50} />
              </a>
              <a href="https://www.linkedin.com/in/luciano-rodrigues-25173133b/">
                <Image src="/linkedin.png" alt="LinkedIn Icon" width={50} height={50} />
              </a>
              <a href="mailto:contato.sushinectar@gmail.com">
                <Image src="/o-email.png" alt="Email Icon" width={50} height={50} />
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex flex-col bg-zinc-100 gap-8 m-8">
        <div className="grid grid-cols-2 gap-4">
          <a href="" className="text-zinc-700">
            HOME
          </a>
          <a href="/about" className="text-zinc-700">
            ABOUT
          </a>
          <a href="/projects" className="text-zinc-700">
            PROJECTS
          </a>
          <a href="/contact" className="text-zinc-700">
            CONTACTS
          </a>
        </div>
        <h1 className="text-sm text-zinc-950">© 2024 Luciano Rodrigues. All Rights Reserved.</h1>
      </footer>
    </div>
  )
}
