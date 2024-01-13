const Button = ({ type, children, width }) => {
  return (
    <button
      className={`
        py-3 px-6 rounded-full font-[500] text-gray-50 bg-black
      ${width === "full" && "w-full"}
      ${type === "primary" && "primary"}
      ${
        type === "outline" &&
        "border border-primary text-primary bg-transparent"
      }
      ${type === "text" && "underline text-primary py-0 px-0 bg-transparent"}
        `}
    >
      {children}
    </button>
  );
};

export default Button;
