import React from "react";

function OptionGroup({ title, options, isRequired, onChange, selectedOption }) {
  const handleOptionChange = (event) => {
    const value = event.target.value;
    // Toggle the selection if the same option is clicked again, else select the new option
    onChange(title, selectedOption === value ? null : value);
  };

  return (
    <fieldset className="flex flex-col items-center pl-4 mt-6 w-full text-xl max-md:max-w-full">
      <legend className="w-full font-semibold text-center text-white mb-4">
        {title} {isRequired && <span className="text-red-500">*</span>}
      </legend>
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-md text-lg leading-none text-emerald-300">
        {options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center gap-2 cursor-pointer ${selectedOption === option ? 'text-emerald-300' : 'text-stone-300'}`}
          >
            <input
              type="radio"
              name={title.replace(/\s+/g, "")}
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              className="sr-only"
              aria-label={option}
            />
            <div className={`w-4 h-4 border rounded-full border-emerald-300 ${selectedOption === option ? 'bg-emerald-300' : 'bg-transparent'}`} />
            <span>{option}</span>
          </label>
        ))}
      </div>
      {isRequired && !selectedOption && (
        <p className="text-red-500 mt-2">This field is required.</p>
      )}
    </fieldset>
  );
}

export default OptionGroup;
