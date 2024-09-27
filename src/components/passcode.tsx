import { useEffect, useState } from "react";
import Tab from "./tab";
import NumberPad from "./number-pad";

const Passcode = () => {
  const [selectedTab, setSelectedTab] = useState<"Admin" | "Operator">("Admin");
  const [passcode, setPasscode] = useState<string>("");

  function handleNumPadClick(num: string) {
    if (passcode.length < 6) {
      setPasscode((prevState) => prevState + num);
    }
  }

  function handleClearBtn() {
    setPasscode("");
  }

  // check if passcode is correct
  useEffect(() => {
    setTimeout(() => {
      if (selectedTab === "Admin" && passcode.length === 6) {
        if (passcode === "123456") {
          alert(`Welcome Admin`);
        } else alert("Wrong passcode");

        setPasscode("");
      } else if (selectedTab === "Operator" && passcode.length === 6) {
        if (passcode === "456789") {
          alert(`Welcome Operator`);
        } else alert("Wrong passcode");

        setPasscode("");
      }
    }, 100);
  }, [passcode]);

  // if tab changes rest the passcode
  useEffect(() => {
    setPasscode("");
  }, [selectedTab]);

  return (
    <div className="p-6 flex flex-col items-center justify-center gap-4 text-2xl">
      <div className="mb-6 flex">
        <Tab
          isSelected={selectedTab === "Admin"}
          label="Admin"
          onClick={() => setSelectedTab("Admin")}
        />
        <Tab
          isSelected={selectedTab === "Operator"}
          label="Operator"
          onClick={() => setSelectedTab("Operator")}
        />
      </div>

      <div className="flex flex-col items-center mb-4">
        <p className="text-[#DEFFFF] mb-2">Enter Passcode</p>
        <div className="flex mb-4 justify-center gap-2">
          {[...new Array(6)].map((_, i) => (
            <div
              key={i}
              className={`w-6 h-6 rounded-full border-2 border-[#345455] ${
                i < passcode.length ? "bg-teal-400" : ""
              }`}
            />
          ))}
        </div>
      </div>

      <NumberPad handleNumPadClick={handleNumPadClick} handleClearBtn={handleClearBtn}/>
    </div>
  );
};

export default Passcode;
