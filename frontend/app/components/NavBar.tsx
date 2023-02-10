import Link from 'next/link';
import React from 'react';
import DarkModeSwitch from './DarkModeSwitch';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center did h-12 bg-custom-cream dark:bg-custom-black">
    <ul className="flex items-center justify-center w-full list-none text-custom-black dark:text-custom-white">
        <Link href={`/about`}>
        <p className="m-6 relative group">
          <b>About</b>
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-custom-black transition-all group-hover:w-full dark:bg-custom-white"></span>
        </p>
        </Link>
        <Link href={`/projects`}>
        <p className="m-6 relative group">
          <b>Projects</b>
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-custom-black transition-all group-hover:w-full dark:bg-custom-white"></span>
        </p>
        </Link>
        <Link href={`/articles`}>
        <p className="m-6 relative group">
          <b>Articles</b>
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-custom-black transition-all group-hover:w-full dark:bg-custom-white"></span>
        </p>
        </Link>
    </ul>
    <ul className="flex items-center justify-center w-full list-none">
        <DarkModeSwitch/>
    </ul>
    </nav>
  )
}

export default NavBar;