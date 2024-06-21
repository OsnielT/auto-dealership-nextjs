// src/components/ColorPicker.js
import { useTheme } from '@/context/ThemeContext';

const ColorPicker = () => {
  const { primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor } = useTheme();

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
      <div>
        <label className="text-primary block mb-1">Secondary Color</label>
        <input
          type="color"
          value={secondaryColor}
          onChange={(e) => setSecondaryColor(e.target.value)}
          className="w-full h-10 border-2 border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default ColorPicker;
