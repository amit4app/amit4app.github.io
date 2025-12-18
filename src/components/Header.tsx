import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">Amitabh Sharma</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-white">
          <a href="#home" className="hover:text-fuchsia-300 transition">Home</a>
          <a href="#about" className="hover:text-fuchsia-300 transition">About</a>
          <a href="#skills" className="hover:text-fuchsia-300 transition">Skills</a>
          <a href="#projects" className="hover:text-fuchsia-300 transition">Projects</a>
          <a href="#blog" className="hover:text-fuchsia-300 transition">Blog</a>
          <a href="#contact" className="hover:text-fuchsia-300 transition">Contact</a>
        </nav>

        {/* Mobile Button */}
        <button className="md:hidden text-white text-3xl" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Menu */}
        {open && (
          <nav className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-lg flex flex-col items-center py-6 space-y-4 md:hidden text-white">
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#blog" onClick={() => setOpen(false)}>Blog</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
}
