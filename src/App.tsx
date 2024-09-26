import { useEffect } from "react";
import Header from "./components/header";
import Passcode from "./components/passcode";

function App() {
  useEffect(() => {
    document.title = "Peppermint OS";
  }, []);

  return (
    <div className="bg-[#222626] text-white h-screen flex flex-col">
      <Header />
      <main className="flex flex-1 justify-between p-8">
        <div className="w-1/2 flex justify-center">
          <Passcode />
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="https://i.ibb.co/HTMFmLW/image-61.png"
            alt="Peppermint Robot"
            className="w-[620px] h-[500px]" 
          />
        </div>
      </main>
    </div>
  );
}

export default App;
