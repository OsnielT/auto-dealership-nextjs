"use client";
import React, { useState } from "react";
import { FaPalette } from "react-icons/fa";
import ColorPicker from "@/common/components/ColorPicker/ColorPicker";

const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 flex items-center">
      <div className={`flex items-center transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-40'}`}>
        <button
          className="bg-primary text-white p-3 rounded-l-lg focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaPalette size={24} />
        </button>
        <div className="bg-white shadow-2xl rounded-l-lg overflow-hidden">
          <ColorPicker action={()=>setIsOpen(!isOpen)} />
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
