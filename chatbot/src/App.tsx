import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Chatbot from "./components/Chatbot";
import EditorComponent from "./editor/EditorComponent";
import BlockSelectionBar from "./components/BlockSelectionBar";
import AppLayout from "./layout/AppLayout";
import Design from "./vertical/Design";
import Verticalbar from "./layout/VerticalNavbar"; // Sidebar component

function MainContent() {
  const [editor, setEditor] = useState(null);
  const location = useLocation();

  // Define the routes where BlockSelectionBar should be shown
  const showBlockSelectionBar = location.pathname === '/block-selection' || location.pathname === '/';

  return (
    <div className="flex flex-col grow ml-[-165px] ">
      <div className="mx-auto w-full grow lg:flex xl:px-2">
        {/* Left sidebar & main wrapper */}
        <div className="flex-1 xl:flex">
          {/* Conditionally render the BlockSelectionBar */}
          {showBlockSelectionBar && (
            <div className="border-b border-gray-200 px-4 py-6 sm:px-6 lg:pl-8 xl:w-64 xl:shrink-0 xl:border-b-0 xl:border-r xl:pl-6 ml-[-100px] ">
              <BlockSelectionBar editorInstance={editor} />
            </div>
          )}

          {/* Main content area */}
          <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
            <Routes>
              <Route path="/design" element={<Design />} />
              <Route path="/block-selection" element={<BlockSelectionBar editorInstance={editor} />} />
              {/* Other routes can be added here */}
            </Routes>
          </div>

          {/* Editor Component */}
          <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
            <EditorComponent onInitialize={setEditor} />
          </div>
        </div>

        {/* Right column area */}
        <div className="shrink-0 border-t border-gray-200 px-4 py-6 sm:px-6 lg:w-96 lg:border-l lg:border-t-0 lg:pr-8 xl:pr-6">
          <Chatbot />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout>
        <div className="flex min-h-full">
          {/* Sidebar */}
          <Verticalbar />

          {/* Main Content Area */}
          <MainContent />
        </div>
      </AppLayout>
    </Router>
  );
}

export default App;





// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Chatbot from "./components/Chatbot";
// import EditorComponent from "./editor/EditorComponent";
// import BlockSelectionBar from "./components/BlockSelectionBar";
// import AppLayout from "./layout/AppLayout";
// import Design from "./vertical/Design";
// import Verticalbar from "./layout/VerticalNavbar"; // Sidebar component

// function App() {
//   const [editor, setEditor] = useState(null);

//   return (
//     <Router>
//       <AppLayout>
//         <div className="flex min-h-full">
//           Sidebar
//           {/* <Verticalbar /> */}

//           {/* Main Content Area */}
//           <div className="flex flex-col grow ml-20">
//             <div className="mx-auto w-full grow lg:flex xl:px-2">
//               {/* Left sidebar & main wrapper */}
//               <div className="flex-1 xl:flex">


//                 {/* Left column area */}
//                 <div className="border-b border-gray-200 px-4 py-6 sm:px-6 lg:pl-8 xl:w-64 xl:shrink-0 xl:border-b-0 xl:border-r xl:pl-6">
//                   <BlockSelectionBar editorInstance={editor} />
//                 </div>
//                 <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
//                   <Routes>
//                     <Route path="/design" element={<Design />} /> 
//                     <Route path="/block-selection" element={<BlockSelectionBar editorInstance={editor} />} />

                  

                  
//                   </Routes>
//                 </div>

//                 {/* Main content area */}

//                 <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6"><EditorComponent  onInitialize={setEditor}/></div>
                
//               </div>

//               {/* Right column area */}
//               <div className="shrink-0 border-t border-gray-200 px-4 py-6 sm:px-6 lg:w-96 lg:border-l lg:border-t-0 lg:pr-8 xl:pr-6">
//                 <Chatbot />
//               </div>
//             </div>
//           </div>
//         </div>
//       </AppLayout>
//     </Router>
//   );
// }

// export default App;



// import { useState } from "react";
// //import "./App.css"
// import Chatbot from "./components/Chatbot";

// import EditorComponent from "./editor/EditorComponent";
// import BlockSelectionBar from "./components/BlockSelectionBar";
// import AppLayout from "./layout/AppLayout";

// function App() {
//   const [editor, setEditor] = useState(null);

//   return (
// //     <div className="grid grid-cols-3 gap-4">
// //    <div></div>
// //    <div><EditorComponent /></div>
// //    <div><Chatbot /></div>
// // </div>
// <>
// <AppLayout>
// <div className="flex min-h-full ml-20 flex-col">


//         {/* 3 column wrapper */}
//         <div className="mx-auto w-full grow lg:flex xl:px-2">
//           {/* Left sidebar & main wrapper */}
//           <div className="flex-1 xl:flex">
//             <div className="border-b border-gray-200 px-4 py-6 sm:px-6 lg:pl-8 xl:w-64 xl:shrink-0 xl:border-b-0 xl:border-r xl:pl-6">
//               {/* Left column area */}<BlockSelectionBar editorInstance={editor} />

//             </div>

//             <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6"><EditorComponent  onInitialize={setEditor}/></div>
//           </div>

//           <div className="shrink-0 border-t border-gray-200 px-4 py-6 sm:px-6 lg:w-96 lg:border-l lg:border-t-0 lg:pr-8 xl:pr-6">
//             {/* Right column area */}<Chatbot />
//           </div>
//         </div>
//       </div>
//       </AppLayout>
//     </>
    
//   );
// }

// export default App;