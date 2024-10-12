interface BurgerIconProps {
  isOpen: boolean;
  toggleMenu: () => void;
}
const BurgerIcon: React.FC<BurgerIconProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div
      onClick={toggleMenu}
      className="flex items-center justify-center sm:hidden"
    >
      <button className="relative w-5 h-4 focus:outline-none z-[99]">
        <span
          className={`block absolute rounded-full h-0.5 w-full ${
            isOpen ? "bg-white" : "bg-black"
          } transform transition duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-0" : "-translate-y-[6px]"
          }`}
        ></span>
        <span
          className={`block absolute rounded-full h-0.5 w-full ${
            isOpen ? "bg-white" : "bg-black"
          } transition duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block absolute rounded-full h-0.5 w-full ${
            isOpen ? "bg-white" : "bg-black"
          } transform transition duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-0" : "translate-y-[6px]"
          }`}
        ></span>
      </button>
    </div>
  );
};

export default BurgerIcon;
