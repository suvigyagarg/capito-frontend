import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-200 py-12 px-8 mt-16 shadow-lg rounded-lg">
      <div className=" flex flex-col container mx-auto">
        <div className='flex items-center justify-center '><h2 className="text-3xl font-bold text-center mb-8">Meet Our Contributors</h2>
        </div>
        <div className="flex items-center justify-center md:space-x-12 space-y-6 md:space-y-0">
          <div className="flex flex-row items-start">
            <a href="https://github.com/contributor1" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <FaGithub className="text-white text-5xl mb-3" />
              <span className="text-white text-lg">Contributor 1</span>
            </a>
          </div>
          <div className="flex flex-row items-start">
            <a href="https://github.com/contributor2" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <FaGithub className="text-white text-5xl mb-3" />
              <span className="text-white text-lg">Contributor 2</span>
            </a>
          </div>
          <div className="flex flex-row items-start">
            <a href="https://github.com/contributor3" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <FaGithub className="text-white text-5xl mb-3" />
              <span className="text-white text-lg">Contributor 3</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
