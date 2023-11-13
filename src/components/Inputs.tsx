import React from "react";

interface Inputprops {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  textvalue: string;
  name: string;
  ontextChangeEvent?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onareaChangeEvent?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Input: React.FC<Inputprops> = ({
  id,
  label,
  type,
  disabled,
  formatPrice,
  required,
  textvalue,
  name,
  ontextChangeEvent,
  onareaChangeEvent,
}) => {
  return (
    <div className="w-full relative">
      {type === "area" ? (
        <>
          <textarea
            id={id}
            disabled={disabled}
            required={required}
            value={textvalue}
            onChange={onareaChangeEvent}
            placeholder=" "
            name={name}
            // type={type}
            className={`
        peer w-full p-4 pt-6 bg-transparent border-2  rounded-xl  font-light outline-none
         transition disabled:opacity-70 disabled:cursor-not-allowed  border-neutral-300 
         h-[150px]
         ${formatPrice ? "pl-9" : "pl-4"}
        `}
          />
          <label
            className={`absolute text-md duration-150
       transform -translate-y-3 top-5 z-10 origin-[0]
       ${formatPrice ? "left-9" : "left-4"}
       peer-placeholder-shown:scale-100 
       peer-placeholder-shown:translate-y-0
       peer-focus:scale-75
       peer-focus:-translate-y-4
       text-zinc-400
       `}
          >
            {label}
          </label>
        </>
      ) : (
        <>
          <input
            id={id}
            disabled={disabled}
            required={required}
            placeholder=" "
            value={textvalue}
            onChange={ontextChangeEvent}
            type={type}
            name={name}
            className={`
        peer w-full p-4 pt-6 bg-transparent border-2  rounded-xl  font-light outline-none
         transition disabled:opacity-70 disabled:cursor-not-allowed  border-neutral-300 
         ${formatPrice ? "pl-9" : "pl-4"}
        `}
          />
          <label
            className={`absolute text-md duration-150
       transform -translate-y-3 top-5 z-10 origin-[0]
       ${formatPrice ? "left-9" : "left-4"}
       peer-placeholder-shown:scale-100 
       peer-placeholder-shown:translate-y-0
       peer-focus:scale-75
       peer-focus:-translate-y-4
       text-zinc-400
       `}
          >
            {label}
          </label>
        </>
      )}
    </div>
  );
};

export default Input;
