import React, { InputHTMLAttributes } from "react";
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";

export interface PasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: any) => void;
  placeholder: string;
  custom?: string;
  customFont?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  placeholder,
  custom,
  customFont,
}) => {
  const [show, setShow] = React.useState(false);
  let actualSize = custom || "";
  let fontSize = customFont || "";
  return (
    <div
      className={
        actualSize +
        " flex flex-row gap-0 h-20 w-3/4 justify-center items-center bg-black/50 rounded-lg shadow-md shadow-black md:h-1/2 focus-within:border-b-[#0BCAAD] focus-within:border-b-2 focus-within:shadow-none md:pt-2 md:pb-2 " 
      }
    >
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        className={
          fontSize +
          " text-white text-xl md:text-3xl outline-none border-none p-0 bg-transparent focus:outline-transparent focus:border-transparent flex-grow w-full ml-4 " 
        }
        placeholder={placeholder}
      />
      {show ? (
        <RiEyeCloseLine
          className="text-white text-xl hover:opacity-50 cursor-pointer md:h-1/2 mr-4 "
          onClick={() => setShow(!show)}
          size={48}
        />
      ) : (
        <RiEyeLine
          className="text-white text-xl hover:opacity-50 cursor-pointer md:h-1/2 mr-4 "
          onClick={() => setShow(!show)}
          size={48}
        />
      )}
    </div>
  );
};
