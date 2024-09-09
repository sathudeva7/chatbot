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
    <div className="chatbot-customizer">
      <h1>Chatbot Customizer</h1>

      <section>
        <h2>Header & Images</h2>
        <label>Header Color: </label>
        <input
          type="color"
          value={headerColor}
          onChange={(e) => setHeaderColor(e.target.value)}
        />
        <br />
        <label>Refresh Button: </label>
        <input
          type="checkbox"
          checked={refreshButton}
          onChange={() => setRefreshButton(!refreshButton)}
        />
        <br />
        <label>Phone Button: </label>
        <input
          type="checkbox"
          checked={phoneButton}
          onChange={() => setPhoneButton(!phoneButton)}
        />
      </section>

      <section>
        <h2>Buttons & Colors</h2>
        <label>Button Color: </label>
        <input
          type="color"
          value={buttonColor}
          onChange={(e) => setButtonColor(e.target.value)}
        />
        <br />
        <label>Button Text Color: </label>
        <input
          type="color"
          value={buttonTextColor}
          onChange={(e) => setButtonTextColor(e.target.value)}
        />
        <br />
        <label>Button Border Color: </label>
        <input
          type="color"
          value={buttonBorderColor}
          onChange={(e) => setButtonBorderColor(e.target.value)}
        />
        <br />
        <label>Border Radius: </label>
        <input
          type="number"
          value={borderRadius}
          onChange={(e) => setBorderRadius(parseInt(e.target.value))}
        />
      </section>

      <section>
        <h2>Background</h2>
        <label>Background Color: </label>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </section>

      <section>
        <h2>Icon & Footer</h2>
        <label>Icon Background Color: </label>
        <input
          type="color"
          value={iconBackgroundColor}
          onChange={(e) => setIconBackgroundColor(e.target.value)}
        />
        <br />
        <label>Privacy Policy Enabled: </label>
        <input
          type="checkbox"
          checked={privacyPolicyEnabled}
          onChange={() => setPrivacyPolicyEnabled(!privacyPolicyEnabled)}
        />
      </section>
    </div>
  );
};

export default Design;
