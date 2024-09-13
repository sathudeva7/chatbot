import React, { useState, useRef } from 'react';

const Multiselect = () => {
  // States
  const [emailRequired, setEmailRequired] = useState(true);
  const [placeholderText, setPlaceholderText] = useState('eg. Write here...');
  const [validationType, setValidationType] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Function to trigger file input click
  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto p-6 border rounded-lg shadow-sm bg-white relative">
      <h2 className="text-lg font-semibold mb-4 bg-color-blue ">Multiselect</h2>

      {/* Always jump to */}
      <div className="mb-4">
        <label htmlFor="jump" className="block text-sm font-medium mb-1">
          Always jump to
        </label>
        <select id="jump" className="w-full border border-gray-300 rounded-md p-2">
          <option value="">Select...</option>
          <option value="no_jump">No Jump</option>
          <option value="send_lead">Send lead</option>
          <option value="stop">Stop</option>
          <option value="send_lead_continue">Send lead and continue</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="jump" className="block text-sm font-medium mb-1">
          List type
        </label>
        <select id="jump" className="w-full border border-gray-300 rounded-md p-2">
          <option value="">Select...</option>
          <option value="no_jump">Radio button</option>
          <option value="send_lead">Select list</option>
        </select>
      </div>

      {/* Actions */}
      <div className="mb-4">
        <button
          className="w-full bg-gray-200 border border-gray-300 text-black rounded-md p-2 flex justify-between items-center"
        >
          Actions (0)
          <span className="ml-2 transform rotate-0">⌘</span>
        </button>
      </div>

      {/* Button Text */}
      <div className="mb-4">
        <label htmlFor="btn-text" className="block text-sm font-medium mb-1">
          Button text
        </label>
        <input
          type="text"
          id="btn-text"
          placeholder="eg. next"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      
      <div className="mb-4 p-4 border rounded-md shadow-sm bg-gray-100 relative">
        <h3 className="font-medium">1. I'm good thanks!</h3>
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={() => console.log('Remove email field')}
        >
          🗑
        </button>

      <div className="mb-4 ">
        <div className="w-full h-[100px] w-[200px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-2">
          <span className="text-gray-400">Image</span>
        </div>
       
      </div>

      <button className="bg-gray-200 text-black px-4 py-2 rounded-md text-sm font-medium flex items-center text-sm font-medium text-gray-700 hover:text-white hover:bg-black">
            Advanced
          </button>


      </div>
      <div className="mb-4 p-4 border rounded-md shadow-sm bg-gray-100 relative">
        <h3 className="font-medium">2.No thanks</h3>
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={() => console.log('Remove email field')}
        >
          🗑
        </button>

      <div className="mb-4 ">
        <div className="w-full h-[100px] w-[200px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-2">
          <span className="text-gray-400">Image</span>
        </div>
       
      </div>

      <button className="bg-gray-200 text-black px-4 py-2 rounded-md text-sm font-medium flex items-center text-sm font-medium text-gray-700 hover:text-white hover:bg-black">
            Advanced
          </button>
      </div>


      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Background Image / Video URL
        </label>
        <div className="w-full h-36 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-2">
          <button
            type="button"
            className="bg-black text-white px-4 py-2 rounded-md"
            onClick={handleFileButtonClick}
          >
            Choose video
          </button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="video/*"
            onChange={(e) => console.log(e.target.files ? e.target.files[0].name : 'No file')}
          />
        </div>
        <input
          type="text"
          placeholder="https://url.com/master.mp4"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Background Image */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Background Image</label>
        <div className="w-full h-36 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-2">
          <span className="text-gray-400">Image</span>
        </div>
        <input
          type="text"
          placeholder="https://url.com/image.jpg"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>




      <div className="mb-4">
        <label htmlFor="ai-intent" className="block text-sm font-medium mb-1">
          AI Intent
        </label>
        <input
          type="text"
          id="ai-intent"
          placeholder="eg. Pricing"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Wait time */}
      <div className="mb-4">
        <label htmlFor="wait-time" className="block text-sm font-medium mb-1">
          Wait time
        </label>
        <input
          type="text"
          id="wait-time"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>


    </div>
  );
};

export default Multiselect