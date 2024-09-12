import React, { useState } from "react";

function ToneSelector() {
  const [selectedTone, setSelectedTone] = useState(null);

  const tones = [
    { name: "Anxious", fillColor: "bg-neutral-300", textColor: "text-black" },
    { name: "Happy", fillColor: "bg-yellow-400", textColor: "text-black" },
    { name: "Vague", fillColor: "bg-lime-50", textColor: "text-black" },
    { name: "Dramatic", fillColor: "bg-rose-600", textColor: "text-white" },
    { name: "Charming", fillColor: "bg-orange-400", textColor: "text-black" },
    { name: "Arrogant", fillColor: "bg-purple-900", textColor: "text-white" },
    { name: "Sympathetic", fillColor: "bg-sky-200", textColor: "text-black" },
    { name: "Optimistic", fillColor: "bg-green-300", textColor: "text-black" },
    { name: "Money-Minded", fillColor: "bg-yellow-400", textColor: "text-black" },
    { name: "Professional", fillColor: "bg-slate-500", textColor: "text-white" },
  ];

  const handleToneClick = (toneName) => {
    setSelectedTone(selectedTone === toneName ? null : toneName);
  };

  return (
    <div className="mt-9 w-full">
      <h3 className="font-semibold text-center text-white">
        Pick a Tone for Your Caption
      </h3>
      <div className="flex flex-wrap gap-5 justify-between self-stretch mt-7 w-full font-bold leading-tight whitespace-nowrap max-md:max-w-full">
        {tones.map((tone, index) => (
          <button
            key={index}
            type="button" // Prevent form submission and page refresh
            className={`gap-2.5 self-stretch px-6 py-2 text-lg font-semibold leading-none rounded-3xl border-2 min-h-[31px] max-md:px-5 transition duration-300
              ${selectedTone === tone.name
                ? `${tone.fillColor} ${tone.textColor}` // Filled when selected
                : `border-${tone.fillColor.replace('bg-', '')} text-white hover:${tone.fillColor} hover:${tone.textColor} bg-transparent` // Hollow when not selected
              }`}
            onClick={() => handleToneClick(tone.name)}
          >
            {tone.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ToneSelector;
