// src/components/ColorPicker.js
import { useTheme } from '@/context/ThemeContext';

const ColorPicker = ({action}) => {
  const { primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor, saveColorsToLocalStorage } = useTheme();

  const handleSaveColors = () => {
    saveColorsToLocalStorage();
    action();
  };

  return (
    <div className="bg-white text-dark shadow-2xl rounded-lg overflow-hidden p-4">
      <div className="mb-4">
        <label className="text-primary block mb-1">Primary Color</label>
        <input
          type="color"
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
          className="w-full h-10 border-2 border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="text-primary block mb-1">Secondary Color</label>
        <input
          type="color"
          value={secondaryColor}
          onChange={(e) => setSecondaryColor(e.target.value)}
          className="w-full h-10 border-2 border-gray-300 rounded-md"
        />
      </div>
      <button
        onClick={handleSaveColors}
        className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/75 transition duration-300"
      >
        Save Colors
      </button>
    </div>
  );
};

export default ColorPicker;
