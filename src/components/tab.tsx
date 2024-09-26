type Props = {
  label: "Admin" | "Operator";
  isSelected: boolean;
  onClick: () => void;
};

const Tab = ({ label, isSelected, onClick }: Props) => {
  return (
    <button
      className={`py-5 px-10 transition duration-300 font-bold ${
        isSelected
          ? "bg-[#314B4C] text-[#A4FCFD]"
          : "bg-[#303A3A] text-[#40B2B2]"
      } 
      ${
        label==="Operator" ? 'rounded-r-lg': 'rounded-s-lg mr-1'
      }
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Tab;
