
import React from "react";

function PromptInput() {
  return (
    <div className="flex flex-col mt-14 max-w-full text-lg leading-none h-[115px] w-[776px] max-md:mt-10">
      <label
        htmlFor="imagePrompt"
        className="font-semibold text-white max-md:max-w-full"
      >
        Prompt for Image (if any)
      </label>
      <textarea
        id="imagePrompt"
        className="gap-2.5 px-2.5 pt-2.5 pb-12 mt-3.5 w-full text-black rounded-md border-2 border-emerald-300 border-solid min-h-[82px] max-md:max-w-full"
        placeholder="Enter Prompt"
      />
    </div>
  );
}

export default PromptInput;
