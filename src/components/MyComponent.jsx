// import React, { useState, useRef, useEffect } from "react";
// import Header from "./Header";
// import UploadSection from "./UploadSection";
// import OptionGroup from "./OptionGroup";
// import ToneSelector from "./ToneSelector";
// import PromptInput from "./PromptInput";
// import Button from "./Button";
// import Footer from "./Footer";
// import GeneratedCaptions from "./GeneratedCaptions";
// import AboutUs from "./AboutUs";
// import { ToastContainer, toast } from "react-toastify"; // Import Toastify
// import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

// function MyComponent() {
//   const [hashtags, setHashtags] = useState(null);
//   const [emojis, setEmojis] = useState(null);
//   const [showCaptions, setShowCaptions] = useState(false); // State to manage visibility of GeneratedCaptions
//   const [mediaPickerValid, setMediaPickerValid] = useState(false); // State to manage media picker validation

//   const captionsRef = useRef(null); // Ref for the GeneratedCaptions section

//   useEffect(() => {
//     if (showCaptions && captionsRef.current) {
//       captionsRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to GeneratedCaptions when visible
//     }
//   }, [showCaptions]); // Scroll only when showCaptions changes to true

//   const handleOptionChange = (title, value) => {
//     if (title === "Do you want Hashtags in your caption?") {
//       setHashtags(value);
//     } else if (title === "Do you want Emojis in your caption?") {
//       setEmojis(value);
//     }
//   };

//   const handleImageChange = (hasImage) => {
//     setMediaPickerValid(hasImage);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (hashtags && emojis && mediaPickerValid) {
//       // Proceed with form submission
//       console.log("Form submitted");
//       setShowCaptions(true); // Show captions on successful form submission
//     } else {
//       // Handle validation error
//       toast.error("Please fill out all required fields"); // Show error message using Toastify
//       setShowCaptions(false); // Hide captions if validation fails
//     }
//   };

//   return (
//     <main className="flex flex-col pr-4 pb-14 bg-stone-700">
//       <Header />

//       <section className="flex flex-col items-center self-center px-20 pt-7 pb-12 mt-11 max-w-full bg-stone-900 shadow-[10px_8px_50px_rgba(255,255,255,0.25)] w-[1345px] max-md:px-5 max-md:mt-10">
//         <div className="flex flex-col ml-3 max-w-full w-[821px]">
//           <form className="flex flex-col ml-3 max-w-full w-[821px]">
//             <h1 className="self-center text-2xl font-extrabold text-center text-white">
//               Enter Details to Generate Caption
//             </h1>
//             <UploadSection onImageChange={handleImageChange} />
//             <OptionGroup
//               title="Do you want Hashtags in your caption?"
//               options={["#Yes", "#No"]}
//               isRequired={true}
//               selectedOption={hashtags}
//               onChange={handleOptionChange}
//             />
//             <OptionGroup
//               title="Do you want Emojis in your caption?"
//               options={["Yes 👍🏼", "No 👎🏼"]}
//               isRequired={true}
//               selectedOption={emojis}
//               onChange={handleOptionChange}
//             />
//             <ToneSelector />
//             <PromptInput />
//             {/* Generate Captions Button */}
//             <div className="self-center mt-6">
//               <Button
//                 text="Generate Captions"
//                 variant="generate" // Specific variant for styling
//                 onClick={handleSubmit}
//                 className="px-4 py-2.5 text-lg font-semibold rounded-3xl" // Adjusting button size
//               />
//             </div>
//           </form>
//         </div>

//         {/* GeneratedCaptions section */}
//         {showCaptions && (
//           <div ref={captionsRef} className="generated-captions-section mt-8">
//             <GeneratedCaptions />
//           </div>
//         )}

//         {/* About Us Section */}
//         {!showCaptions && <AboutUs />} {/* Render AboutUs before captions are generated */}

//         {/* About Us Section below captions when they are generated */}
//         {showCaptions && (
//           <div className="mt-8">
//             <AboutUs />
//           </div>
//         )}
//       </section>

//       <Footer />
//       <ToastContainer /> {/* Add ToastContainer for displaying messages */}
//     </main>
//   );
// }

// export default MyComponent;

import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import UploadSection from "./UploadSection";
import OptionGroup from "./OptionGroup";
import ToneSelector from "./ToneSelector";
import PromptInput from "./PromptInput";
import Button from "./Button";
import Footer from "./Footer";
import GeneratedCaptions from "./GeneratedCaptions";
import AboutUs from "./AboutUs";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

function MyComponent() {
  const [hashtags, setHashtags] = useState(null);
  const [emojis, setEmojis] = useState(null);
  const [showCaptions, setShowCaptions] = useState(false); // State to manage visibility of GeneratedCaptions
  const [mediaPickerValid, setMediaPickerValid] = useState(false); // State to manage media picker validation
  const [scrollToCaptions, setScrollToCaptions] = useState(false); // New state to control scroll effect

  const captionsRef = useRef(null); // Ref for the GeneratedCaptions section

  useEffect(() => {
    if (scrollToCaptions && captionsRef.current) {
      captionsRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to GeneratedCaptions when visible
      setScrollToCaptions(false); // Reset the scroll trigger
    }
  }, [scrollToCaptions]); // Depend on scrollToCaptions state

  const handleOptionChange = (title, value) => {
    if (title === "Do you want Hashtags in your caption?") {
      setHashtags(value);
    } else if (title === "Do you want Emojis in your caption?") {
      setEmojis(value);
    }
  };

  const handleImageChange = (hasImage) => {
    setMediaPickerValid(hasImage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (hashtags && emojis && mediaPickerValid) {
      // Proceed with form submission
      console.log("Form submitted");
      setShowCaptions(true); // Show captions on successful form submission
      setScrollToCaptions(true); // Trigger the scroll effect
    } else {
      // Handle validation error
      toast.error("Please fill out all required fields"); // Show error message using Toastify
      setShowCaptions(false); // Hide captions if validation fails
    }
  };

  return (
    <main className="flex flex-col pr-4 pb-14 bg-stone-700">
      <Header />

      <section className="flex flex-col items-center self-center px-20 pt-7 pb-12 mt-11 max-w-full bg-stone-900 shadow-[10px_8px_50px_rgba(255,255,255,0.25)] w-[1345px] max-md:px-5 max-md:mt-10">
        <div className="flex flex-col ml-3 max-w-full w-[821px]">
          <form className="flex flex-col ml-3 max-w-full w-[821px]">
            <h1 className="self-center text-2xl font-extrabold text-center text-white">
              Enter Details to Generate Caption
            </h1>
            <UploadSection onImageChange={handleImageChange} />
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
            {/* Generate Captions Button */}
            <div className="self-center mt-6">
              <Button
                text="Generate Captions"
                variant="generate" // Specific variant for styling
                onClick={handleSubmit}
                className="px-4 py-2.5 text-lg font-semibold rounded-3xl" // Adjusting button size
              />
            </div>
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

        {/* About Us Section below captions when they are generated */}
        {showCaptions && (
          <div className="mt-8">
            <AboutUs />
          </div>
        )}
      </section>

      <Footer />
      <ToastContainer /> {/* Add ToastContainer for displaying messages */}
    </main>
  );
}

export default MyComponent;
