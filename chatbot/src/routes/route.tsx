


import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatbot from "./components/Chatbot";
import EditorComponent from "./editor/EditorComponent";
import BlockSelectionBar from "./components/BlockSelectionBar";
import AppLayout from "./layout/AppLayout";
import Design from "./vertical/Design";
import Verticalbar from "./layout/VerticalNavbar"; // Sidebar component

function App() {
  const [editor, setEditor] = useState(null);

  return (
    <Router>
      <AppLayout>
        <div className="flex min-h-full">
          {/* Sidebar */}
          <Verticalbar />

          {/* Main Content Area */}
          <div className="flex flex-col grow ml-20">
            <div className="mx-auto w-full grow lg:flex xl:px-2">
              {/* Left sidebar & main wrapper */}
              <div className="flex-1 xl:flex">
                {/* Left column area */}
                <div className="border-b border-gray-200 px-4 py-6 sm:px-6 lg:pl-8 xl:w-64 xl:shrink-0 xl:border-b-0 xl:border-r xl:pl-6">
                  <BlockSelectionBar editorInstance={editor} />
                </div>

                {/* Main content area */}
                <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
                  {/* Define Routes Here */}
                  <Routes>
                    <Route path="/design" element={<Design />} />
                    {/* Add more routes as needed */}
                  </Routes>
                </div>
              </div>

              {/* Right column area */}
              <div className="shrink-0 border-t border-gray-200 px-4 py-6 sm:px-6 lg:w-96 lg:border-l lg:border-t-0 lg:pr-8 xl:pr-6">
                <Chatbot />
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </Router>
  );
}

export default App;










// import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
// import { ChevronRightIcon } from '@heroicons/react/20/solid';
// import {
//   BoltIcon,
//   ShareIcon,
//   DocumentDuplicateIcon,
//   ChatBubbleLeftIcon,
//   Cog6ToothIcon,
//   FingerPrintIcon,
// } from '@heroicons/react/24/outline';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// const navigation = [
//   { name: 'Design', href: '/design', icon: FingerPrintIcon, current: true },
//   { name: 'Flow', href: '#', icon: ShareIcon, current: false },
//   { name: 'Popups', href: '#', icon: ChatBubbleLeftIcon, current: false },
//   { name: 'Train AI', href: '#', icon: BoltIcon, current: false },
//   { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false },
//   { name: 'xRM', href: '#', icon: DocumentDuplicateIcon, current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Verticalbar() {
//   return (
//     <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 h-[680px]">
//       <nav className="flex flex-1 flex-col">
//         <ul role="list" className="flex flex-1 flex-col gap-y-7">
//           <li>
//             <ul role="list" className="-mx-2 space-y-1">
//               {navigation.map((item) => (
//                 <li key={item.name}>
//                   <div>
//                     <Link
//                       to={item.href} // Use Link instead of a tag
//                       className={classNames(
//                         item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
//                         'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700',
//                       )}
//                     >
//                       <item.icon aria-hidden="true" className="h-6 w-6 shrink-0 text-gray-400" />
//                     </Link>
//                     <div style={{ fontSize: '12px' }}>{item.name}</div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

