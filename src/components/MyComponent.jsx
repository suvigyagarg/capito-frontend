import React, { useState, useRef } from "react";
import Header from "./Header";
import UploadSection from "./UploadSection";
import OptionGroup from "./OptionGroup";
import ToneSelector from "./ToneSelector";
import PromptInput from "./PromptInput";
import Button from "./Button";
import Footer from "./Footer";
import GeneratedCaptions from "./GeneratedCaptions"; // Import GeneratedCaptions component
import AboutUs from "./AboutUs"; // Import the AboutUs component

function MyComponent() {
  const [hashtags, setHashtags] = useState(null);
  const [emojis, setEmojis] = useState(null);
  const [showCaptions, setShowCaptions] = useState(false); // State to manage visibility of GeneratedCaptions

  const captionsRef = useRef(null); // Ref for the GeneratedCaptions section

  const handleOptionChange = (title, value) => {
    if (title === "Do you want Hashtags in your caption?") {
      setHashtags(value);
    } else if (title === "Do you want Emojis in your caption?") {
      setEmojis(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (hashtags && emojis) {
      // Proceed with form submission
      console.log("Form submitted");
      setShowCaptions(true); // Show captions on successful form submission

      // Scroll to GeneratedCaptions section
      if (captionsRef.current) {
        captionsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Handle validation error
      console.log("Please fill out all required fields");
      setShowCaptions(false); // Hide captions if validation fails
    }
  };

  return (
    <main className="flex flex-col pr-4 pb-14 bg-stone-700">
      <Header />

      <section className="flex flex-col items-center self-center px-20 pt-7 pb-12 mt-11 max-w-full bg-stone-900 shadow-[10px_8px_50px_rgba(255,255,255,0.25)] w-[1345px] max-md:px-5 max-md:mt-10">
        <div className="flex flex-col ml-3 max-w-full w-[821px]">
          <form onSubmit={handleSubmit} className="flex flex-col ml-3 max-w-full w-[821px]">
            <h1 className="self-center text-2xl font-extrabold text-center text-white">
              Enter Details to generate Caption
            </h1>
            <UploadSection />
            <OptionGroup
              title="Do you want Hashtags in your caption?"
              options={["#Yes", "#No"]}
              isRequired={true}
              selectedOption={hashtags}
              onChange={handleOptionChange}
            />
            <OptionGroup
              title="Do you want Emojis in your caption?"
              options={["Yes 👍🏼", "No 👎🏼"]}
              isRequired={true}
              selectedOption={emojis}
              onChange={handleOptionChange}
            />
            <ToneSelector />
            <PromptInput />
            <Button text="Generate Captions" />
          </form>
        </div>

        {/* GeneratedCaptions section */}
        {showCaptions && (
          <div ref={captionsRef} className="generated-captions-section mt-8">
            <GeneratedCaptions />
          </div>
        )}

        {/* About Us Section */}
        {!showCaptions && <AboutUs />} {/* Render AboutUs before captions are generated */}
      </section>

      {/* About Us Section below captions when they are generated */}
      {showCaptions && (
        <div className="mt-8">
          <AboutUs />
        </div>
      )}

      <Footer />
    </main>
  );
}

export default MyComponent;
