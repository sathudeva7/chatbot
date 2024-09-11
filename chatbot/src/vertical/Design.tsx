import React, { useState } from "react";

const Design: React.FC = () => {
  const [headerColor, setHeaderColor] = useState<string>("#000000");
  const [refreshButton, setRefreshButton] = useState<boolean>(true);
  const [phoneButton, setPhoneButton] = useState<boolean>(false);
  const [buttonColor, setButtonColor] = useState<string>("#1e306d");
  const [buttonTextColor, setButtonTextColor] = useState<string>("#ffffff");
  const [buttonBorderColor, setButtonBorderColor] = useState<string>("#8681a3");
  const [borderRadius, setBorderRadius] = useState<number>(20);
  const [backgroundColor, setBackgroundColor] = useState<string>("#938aed");
  const [iconBackgroundColor, setIconBackgroundColor] = useState<string>("#1e306d");
  const [privacyPolicyEnabled, setPrivacyPolicyEnabled] = useState<boolean>(false);

  return (
    <div className="flex p-4 space-x-4 ml-[180px] ">
      {/* Left Column */}
      <div className="w-1/2 space-y-4">
        {/* Header Section */}
        <div className="border p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Header</h2>
          <div className="flex space-x-2 mb-2">
            <div className="w-1/2 border h-24 flex items-center justify-center bg-gray-100">Logo</div>
            <div className="w-1/2 border h-24 flex items-center justify-center bg-gray-100">Avatar</div>
          </div>
          <div className="flex items-center mb-2">
            <label className="w-1/2">Header Color: </label>
            <input
              type="color"
              value={headerColor}
              onChange={(e) => setHeaderColor(e.target.value)}
              className="w-1/2"
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="w-1/2">Refresh Button: </label>
            <input
              type="checkbox"
              checked={refreshButton}
              onChange={() => setRefreshButton(!refreshButton)}
            />
          </div>
          <div className="flex items-center">
            <label className="w-1/2">Phone Button: </label>
            <input
              type="checkbox"
              checked={phoneButton}
              onChange={() => setPhoneButton(!phoneButton)}
            />
          </div>
        </div>

        {/* Bottom Icon & Footer */}
        <div className="border p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Bottom Icon & Footer</h2>
          <div className="border h-24 mb-2 flex items-center justify-center bg-gray-100">Icon</div>
          <div className="flex items-center mb-2">
            <label className="w-1/2">Background Color: </label>
            <input
              type="color"
              value={iconBackgroundColor}
              onChange={(e) => setIconBackgroundColor(e.target.value)}
              className="w-1/2"
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="w-1/2">Privacy Policy: </label>
            <input
              type="checkbox"
              checked={privacyPolicyEnabled}
              onChange={() => setPrivacyPolicyEnabled(!privacyPolicyEnabled)}
            />
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-1/2 space-y-4">
        {/* Text Area Customization */}
        <div className="border p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Text Area</h2>
          <div className="flex items-center mb-2">
            <label className="w-1/2">Button Color: </label>
            <input
              type="color"
              value={buttonColor}
              onChange={(e) => setButtonColor(e.target.value)}
              className="w-1/2"
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="w-1/2">Text Color: </label>
            <input
              type="color"
              value={buttonTextColor}
              onChange={(e) => setButtonTextColor(e.target.value)}
              className="w-1/2"
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="w-1/2">Border Color: </label>
            <input
              type="color"
              value={buttonBorderColor}
              onChange={(e) => setButtonBorderColor(e.target.value)}
              className="w-1/2"
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="w-1/2">Border Radius: </label>
            <input
              type="number"
              value={borderRadius}
              onChange={(e) => setBorderRadius(parseInt(e.target.value))}
              className="w-1/2"
            />
          </div>
        </div>

        {/* Background Customization */}
        <div className="border p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Background</h2>
          <div className="flex items-center mb-2">
            <label className="w-1/2">Background Color: </label>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="w-1/2"
            />
          </div>
          {/* Add more controls as needed */}
        </div>
      </div>
    </div>
  );
};

export default Design;
