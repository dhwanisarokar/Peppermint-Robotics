type Props = {
  handleNumPadClick: (num: string) => void;
  handleClearBtn: () => void;
};

const NumberPad = ({ handleNumPadClick, handleClearBtn }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-7 max-w-md">
      {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((i) => (
        <button
          className="bg-gray-700 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl transition hover:bg-gray-800"
          key={i}
          onClick={() => handleNumPadClick(i)}
        >
          {i}
        </button>
      ))}
      <div></div>
      <button
        className="bg-gray-700 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl transition hover:bg-gray-800"
        onClick={() => handleNumPadClick("0")}
      >
        0
      </button>
      <button
        className="bg-gray-700 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl transition hover:bg-gray-800"
        onClick={handleClearBtn}
      >
        X
      </button>
    </div>
  );
};

export default NumberPad;
