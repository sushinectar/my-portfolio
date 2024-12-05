"use client"
import React, { useState } from "react"
import Image from "next/image"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <nav className="flex justify-around items-center bg-zinc-100 p-8 border">
        {/*logo*/}
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
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

      <main className="flex flex-col justify-center gap-12">
        {/* summary about */}
        <div className="flex flex-col justify-center items-center text-center gap-10 mt-10">
          <h1 className="text-6xl font-bold">Web Developer</h1>
          <p className="w-72">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Senectus sit netus nascetur morbi quam nulla primis.
            Dapibus mus consequat vestibulum sem parturient nunc egestas? Posuere malesuada mi lacinia tincidunt
            vestibulum interdum. Primis arcu phasellus ante sed dictum. Morbi consectetur tempor adipiscing nec ligula.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative overflow-hidden rounded-full w-48 h-48">
            <Image
              src="/photo-me.JPEG"
              alt="Luciano Photo"
              layout="fill"
              objectFit="cover"
              className="rounded-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
