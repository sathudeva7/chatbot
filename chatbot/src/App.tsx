import { useState } from "react";
//import "./App.css"
import Chatbot from "./components/Chatbot";

import EditorComponent from "./editor/EditorComponent";
import BlockSelectionBar from "./components/BlockSelectionBar";
import AppLayout from "./layout/AppLayout";

function App() {
  const [editor, setEditor] = useState(null);

  return (
//     <div className="grid grid-cols-3 gap-4">
//    <div></div>
//    <div><EditorComponent /></div>
//    <div><Chatbot /></div>
// </div>
<>
<AppLayout>
<div className="flex min-h-full ml-20 flex-col">


        {/* 3 column wrapper */}
        <div className="mx-auto w-full grow lg:flex xl:px-2">
          {/* Left sidebar & main wrapper */}
          <div className="flex-1 xl:flex">
            <div className="border-b border-gray-200 px-4 py-6 sm:px-6 lg:pl-8 xl:w-64 xl:shrink-0 xl:border-b-0 xl:border-r xl:pl-6">
              {/* Left column area */}<BlockSelectionBar editorInstance={editor} />

            </div>

            <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6"><EditorComponent  onInitialize={setEditor}/></div>
          </div>

          <div className="shrink-0 border-t border-gray-200 px-4 py-6 sm:px-6 lg:w-96 lg:border-l lg:border-t-0 lg:pr-8 xl:pr-6">
            {/* Right column area */}<Chatbot />
          </div>
        </div>
      </div>
      </AppLayout>
    </>
    
  );
}

export default App;
