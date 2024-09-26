import { AlertTriangle, BatteryFull, Languages, Settings } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full p-6 px-8 flex justify-between items-center">
      <div className="text-4xl font-bold flex items-center justify-center">
        <span>peppermint</span>
        <span className="text-xl mx-2"> | </span>
        <span className="font-extrabold text-[#A4FCFD]">OS</span>
      </div>
      <div className="flex justify-center items-center gap-10 text-gray-300">
        <div className="flex justify-center items-center p-2 gap-2 max-lg:hidden">
          <span className="cursor-pointer">
            <AlertTriangle className="mr-2 inline-block" />
            Errors
          </span>

          <span className="text-xl mx-3 text-gray-500"> | </span>

          <span className="cursor-pointer">
            <Languages className="mr-2 inline-block" />
            Language
          </span>

          <span className="text-xl mx-3 text-gray-500"> | </span>

          <span className="cursor-pointer">
            <Settings className="mr-2 inline-block" />
            Settings
          </span>
        </div>
        <div className="flex justify-center items-center gap-4">
          <span className="text-2xl">
            <BatteryFull size={40} className="inline-block text-white" /> 98%
          </span>

          <span className="text-lg">01:23:00</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
