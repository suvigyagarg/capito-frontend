import React, { useState, useRef } from "react";

function UploadSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col justify-center items-center px-20 py-6 mt-9 max-w-full font-light rounded-xl border border-emerald-400 border-dashed bg-slate-600 bg-opacity-10 text-stone-200 w-[793px] max-md:px-5 relative">
      <div className="flex flex-col items-center max-w-full relative">
        <h2 className="text-4xl mb-6 text-center">Drag Files to Upload or Browse</h2>
        <div className="relative flex flex-col items-center">
          {selectedImage ? (
            <div className="relative">
              <img
                src={selectedImage}
                alt="Selected Preview"
                className="object-contain rounded-xl w-[300px] h-auto"
              />
              <button
                onClick={handleRemoveImage}
                className="absolute top-2 right-2 bg-black text-white rounded-full p-2 text-lg flex items-center justify-center"
                aria-label="Remove Image"
              >
                <span>&times;</span>
              </button>
            </div>
          ) : (
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/67ab0ab4953f4bc47d2c6de9ea2c041ca444e6bfd580484d49daf47add91cd2f?placeholderIfAbsent=true&apiKey=0c9893eacbd14cb49f961c6c82a60e12"
              alt="Upload icon"
              className="object-contain mb-6 rounded-xl w-[50px]"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
            className="absolute inset-0 opacity-0 cursor-pointer"
            aria-label="Choose file"
            id="file-input"
          />
          <button
            type="button"
            onClick={triggerFileInput}
            className="bg-stone-500 text-stone-900 px-6 py-2.5 mt-4 text-lg font-semibold leading-none rounded-3xl"
            aria-label="Upload Files"
          >
            Browse Files
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadSection;
