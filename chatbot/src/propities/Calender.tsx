import React, { useRef, useState } from 'react';

const  Calender = () => {
  // Reference to the hidden file input
  const fileInputRef = useRef(null);

  // State to handle action list visibility
  const [actionsVisible, setActionsVisible] = useState(false);
  const [selectedActions, setSelectedActions] = useState([]);

  // List of available actions
  const actions = [
    'Notify',
    'Set team',
    'Add price'
  ];

  // Function to trigger file input click
  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Function to toggle actions list visibility
  const handleActionsButtonClick = () => {
    setActionsVisible(!actionsVisible);
  };

  // Function to handle adding new actions
  const handleAddAction = (action) => {
    setSelectedActions([...selectedActions, action]);
    setActionsVisible(false); // Hide the action list after selection
  };



  

  return (
    <div className="w-full max-w-sm mx-auto p-6 border rounded-lg shadow-sm bg-white relative">
      <h2 className="text-lg font-semibold mb-4"> Calendert</h2>

      {/* Always jump to */}
      <div className="mb-4">
        <label htmlFor="jump" className="block text-sm font-medium mb-1">
          Always jump to
        </label>
        <select id="jump" className="w-full border border-gray-300 rounded-md p-2">
          <option value="">Select...</option>
          <option value="">No Jump</option>
          <option value="">Send lead</option>
          <option value="">Stop</option>
          <option value="">Send lead and continue</option>
        </select>
      </div>


      <div className="mb-4">
        <label htmlFor="jump" className="block text-sm font-medium mb-1">
         Data selection
        </label>
        <select id="jump" className="w-full border border-gray-300 rounded-md p-2">
          <option value="">Select...</option>
          <option value="">Date and time</option>
          <option value="">Date range (coming soon)</option>
          <option value="">Ourly</option>
          <option value="">Calendly</option>

        </select>
      </div>

      {/* Actions */}
      <div className="mb-4 relative">
        <button
          onClick={handleActionsButtonClick}
          className="w-full border border-gray-300  rounded-md p-2 flex justify-between items-center"
        >
          Actions ({selectedActions.length})
          <span className={`ml-2 transform ${actionsVisible ? 'rotate-180' : 'rotate-0'}`}>
            ▼
          </span>
        </button>

        {actionsVisible && (
          <div className="absolute right-0 top-0 mt-2 w-64 p-4 bg-white border border-gray-300 rounded-md shadow-md z-10">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Actions</span>
              <button onClick={handleActionsButtonClick} className="text-red-500">✕</button>
            </div>
            <button onClick={() => console.log('Add new action')} className="w-full text-blue-600 text-sm mb-2">
              + Add new action
            </button>
            <ul className="space-y-1">
              {actions.map((action, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleAddAction(action)}
                >
                  {action}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Dynamic Action Content */}
      <div className="mb-4">
        {selectedActions.map((action, index) => (
          <div key={index} className="p-4 mb-4 border rounded-md bg-gray-100 relative">
            <button className="absolute top-2 right-2 text-gray-500" onClick={() => {
              setSelectedActions(selectedActions.filter((_, i) => i !== index));
            }}>
              ✕
            </button>
            {action === 'Notify' && (
              <div>
                <label className="block text-sm font-medium mb-1">Notify</label>
                <select className="w-full border border-gray-300 rounded-md p-2 mb-2">
                  <option value="">Select...</option>
                  {/* Add other options as needed */}
                </select>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Notify selected team
                </label>
              </div>
            )}
            {action === 'Set team' && (
              <div>
                <label className="block text-sm font-medium mb-1">Set team</label>
                <select className="w-full border border-gray-300 rounded-md p-2 mb-2">
                  <option value="">Select...</option>
                  {/* Add other options as needed */}
                </select>
                <p className="text-sm text-gray-500">Select team to be notified. This setting will only set a team, notifying needs to be set separately later in flow.</p>
              </div>
            )}
            {action === 'Add price' && (
              <div>
                <label className="block text-sm font-medium mb-1">Price</label>
                <input
                  type="text"
                  placeholder="eg. 100"
                  className="w-full border border-gray-300 rounded-md p-2 mb-2"
                />
                <p className="text-sm text-gray-500">You can set a price for this option.</p>
              </div>
            )}
          </div>
        ))}
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

      

      {/* Background Image / Video URL */}
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
            onChange={(e) => console.log(e.target.files[0])}
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
        <label className="block text-sm font-medium mb-1">
          Background Image
        </label>
        <div className="w-full h-36 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-2">
          <span className="text-gray-400">Image</span>
        </div>
        <input
          type="text"
          placeholder="https://url.com/image.jpg"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* AI Intent */}
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

export default Calender;