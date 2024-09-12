import React, { useState, useRef } from 'react';

const Form = () => {
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
      <h2 className="text-lg font-semibold mb-4">Textfield</h2>

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

      {/* Email Section */}
      <div className="mb-4 p-4 border rounded-md shadow-sm bg-gray-100 relative">
        <h3 className="font-medium">1. Name</h3>
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={() => console.log('Remove email field')}
        >
          🗑
        </button>

        <div className="mt-2">
          <label className="block text-sm font-medium">Required</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={emailRequired}
              onChange={() => setEmailRequired(!emailRequired)}
              className="mr-2"
            />
            <span>{emailRequired ? 'Yes' : 'No'}</span>
          </div>
        </div>

        <div className="mt-2">
          <label htmlFor="placeholder" className="block text-sm font-medium">
            Placeholder
          </label>
          <input
            type="text"
            id="placeholder"
            value={placeholderText}
            onChange={(e) => setPlaceholderText(e.target.value)}
            placeholder="eg. Write here..."
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mt-2">
          <label htmlFor="validation" className="block text-sm font-medium">
            Validation
          </label>
          <select
            id="validation"
            value={validationType}
            onChange={(e) => setValidationType(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select...</option>
            <option value="email">Email format</option>
            <option value="required">Required</option>
          </select>
        </div>
      </div>

      {/* Background Image / Video URL */}
      <div className="mb-4 p-4 border rounded-md shadow-sm bg-gray-100 relative">
        <h3 className="font-medium">2. Email</h3>
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={() => console.log('Remove email field')}
        >
          🗑
        </button>

        <div className="mt-2">
          <label className="block text-sm font-medium">Required</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={emailRequired}
              onChange={() => setEmailRequired(!emailRequired)}
              className="mr-2"
            />
            <span>{emailRequired ? 'Yes' : 'No'}</span>
          </div>
        </div>

        <div className="mt-2">
          <label htmlFor="placeholder" className="block text-sm font-medium">
            Placeholder
          </label>
          <input
            type="text"
            id="placeholder"
            value={placeholderText}
            onChange={(e) => setPlaceholderText(e.target.value)}
            placeholder="eg. Write here..."
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mt-2">
          <label htmlFor="validation" className="block text-sm font-medium">
            Validation
          </label>
          <select
            id="validation"
            value={validationType}
            onChange={(e) => setValidationType(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select...</option>
            <option value="email">Email format</option>
            <option value="required">Required</option>
          </select>
        </div>
      </div>



      {/* Background Image */}
      <div className="mb-4 p-4 border rounded-md shadow-sm bg-gray-100 relative">
        <h3 className="font-medium">3. Phone</h3>
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={() => console.log('Remove email field')}
        >
          🗑
        </button>

        <div className="mt-2">
          <label className="block text-sm font-medium">Required</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={emailRequired}
              onChange={() => setEmailRequired(!emailRequired)}
              className="mr-2"
            />
            <span>{emailRequired ? 'Yes' : 'No'}</span>
          </div>
        </div>

        <div className="mt-2">
          <label htmlFor="placeholder" className="block text-sm font-medium">
            Placeholder
          </label>
          <input
            type="text"
            id="placeholder"
            value={placeholderText}
            onChange={(e) => setPlaceholderText(e.target.value)}
            placeholder="eg. Write here..."
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mt-2">
          <label htmlFor="validation" className="block text-sm font-medium">
            Validation
          </label>
          <select
            id="validation"
            value={validationType}
            onChange={(e) => setValidationType(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select...</option>
            <option value="email">Email format</option>
            <option value="required">Required</option>
          </select>
        </div>
      </div>

      <div className="mb-4 p-4 border rounded-md shadow-sm bg-gray-100 relative">
        <h3 className="font-medium">4. Message</h3>
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={() => console.log('Remove email field')}
        >
          🗑
        </button>

        <div className="mt-2">
          <label className="block text-sm font-medium">Required</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={emailRequired}
              onChange={() => setEmailRequired(!emailRequired)}
              className="mr-2"
            />
            <span>{emailRequired ? 'Yes' : 'No'}</span>
          </div>
        </div>

        <div className="mt-2">
          <label htmlFor="placeholder" className="block text-sm font-medium">
            Placeholder
          </label>
          <input
            type="text"
            id="placeholder"
            value={placeholderText}
            onChange={(e) => setPlaceholderText(e.target.value)}
            placeholder="eg. Write here..."
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mt-2">
          <label htmlFor="validation" className="block text-sm font-medium">
            Validation
          </label>
          <select
            id="validation"
            value={validationType}
            onChange={(e) => setValidationType(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select...</option>
            <option value="email">Email format</option>
            <option value="required">Required</option>
          </select>
        </div>
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

export default Form;