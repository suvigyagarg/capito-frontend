import React from "react";
import { FaRegCopy } from "react-icons/fa"; // Import the copy icon
import { ToastContainer, toast } from "react-toastify"; // Import Toast components
import "react-toastify/dist/ReactToastify.css"; // Import Toast CSS

function CaptionBox({ text }) {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text).then(
      () => {
        // Show toast notification on successful copy
        toast.success("Copied to clipboard!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      },
      (err) => {
        console.error("Failed to copy: ", err);
      }
    );
  };

  return (
    <div className="flex flex-col px-10 py-8 mt-8 leading-5 rounded-xl border border-emerald-400 border-solid bg-slate-600 bg-opacity-10 max-md:px-5 max-md:max-w-full">
      <div className="flex justify-between items-start">
        <p className="max-md:max-w-full">{text}</p>
        <button onClick={handleCopyToClipboard} className="ml-4 text-white">
          <FaRegCopy className="cursor-pointer hover:text-emerald-400 text-2xl" />
        </button>
      </div>

      {/* Toast Container to show notifications */}
      <ToastContainer />
    </div>
  );
}

export default CaptionBox;
