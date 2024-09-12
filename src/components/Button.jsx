
import React from "react";

function Button({ text }) {
  return (
    <button className="gap-2.5 self-center px-6 py-2.5 mt-16 text-lg font-semibold leading-none rounded-3xl bg-stone-500 text-stone-900 max-md:px-5 max-md:mt-10">
      {text}
    </button>
  );
}

export default Button;
