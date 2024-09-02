import React, { createContext, useState } from "react";

const EditorContext = createContext(null);

const EditorProvider = ({ children }) => {
  const [content, setContent] = useState([]);

  return (
    <EditorContext.Provider value={{ content, setContent }}>
      {children}
    </EditorContext.Provider>
  );
};

export { EditorProvider, EditorContext };
