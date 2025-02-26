import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Add from './SVG/TabBar/Add';

const AddModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    setIsOpen(false);
    setTimeout(() => navigate(path), 300); // Delayed navigation for smooth exit
  };

  return (
    <div className="relative">
      {/* Trigger Button with Drag to Close */}
      <button
        onMouseDown={() => setIsOpen(true)}
        onMouseUp={() => setIsOpen(false)}
        className="inline-flex h-[35px] items-center justify-center rounded px-[15px] font-medium leading-none text-violet11 outline-none select-none"
      >
        <Add />
      </button>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Slide-Up Panel */}
      <div
        className={`fixed bottom-0 left-1/2 w-full max-w-[500px] translate-x-[-50%] rounded-t-lg bg-white p-5 shadow-lg transition-transform duration-500 ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        {/* Drag Handle */}
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-gray-400"></div>

        {/* Title & Description */}
        <h2 className="text-center text-[17px] font-medium text-mauve12">
          What would you like to add?
        </h2>
        <p className="text-center mb-5 mt-2.5 text-[15px] text-mauve11">
          Would you like to post your tips and experiences or create a job?
        </p>

        {/* Action Buttons */}
        <button
          className="w-full bg-[#130160] text-white py-2 rounded-lg mb-2"
          onClick={() => handleRedirect('/addPost')}
        >
          POST
        </button>

        <button
          className="w-full bg-[#D6CDFE] text-black py-2 rounded-lg"
          onClick={() => handleRedirect('/makeJob')}
        >
          MAKE A JOB
        </button>
      </div>
    </div>
  );
};

export default AddModal;
