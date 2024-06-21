"use client";
import React, { useState } from "react";
import { FaPalette } from "react-icons/fa";
import ColorPicker from "@/common/components/ColorPicker/ColorPicker";

const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-row items-end z-50">
      <button
        className="bg-primary text-white p-3 rounded-l-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaPalette size={24} />
      </button>
      <div className={`${isOpen ? "-right-0" :"-right-full"} relative overflow-hidden transition-all duration-150 ease-in-out`}>
        <ColorPicker />
      </div>
    </div>
  );
};

export default SidePanel;
