import React from "react";

function Button({ text, variant = "default", onClick, className = "" }) {
  const styles = {
    default: "bg-stone-500 text-stone-900", // Default style
    generate: "bg-emerald-500 text-white hover:bg-emerald-600", // Style for the "Generate Captions" button
    selected: "bg-emerald-500 text-white", // Style for selected tone buttons
    unselected: "bg-transparent text-white border-2 border-white hover:bg-emerald-500 hover:text-white", // Style for unselected tone buttons
  };

  return (
    <button
      type="button" // Prevents default form submission behavior
      className={`gap-2.5 px-6 py-2.5 text-lg font-semibold leading-none rounded-3xl ${styles[variant]} ${className} max-md:px-5`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
