import { ArrowLeftIcon, PencilIcon, EyeIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import StatementForm from '../propities/statenment'; // Make sure this path is correct

export default function CustomHeader() {
  // State to track button clicks
  const [clickedStatement, setClickedStatement] = useState(false);
  const [clickedProperties, setClickedProperties] = useState(false);

  // Function to handle navigation based on button clicks
  const handleStatementClick = () => {
    console.log("Statement button clicked");
    setClickedStatement(true); // Mark that the Statement button was clicked
  };

  const handlePropertiesClick = () => {
    console.log("Properties button clicked");
    setClickedProperties(true); // Mark that the Properties button was clicked
  };

  return (
    <div>
      {/* Header bar */}
      <div className="flex items-center justify-between bg-white px-4 py-2 border-b border-grey">
        <button
          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
          onClick={() => {
            setClickedStatement(false);
            setClickedProperties(false);
          }}
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back
        </button>

        {/* Main Buttons */}
        <div className="flex space-x-2 ml-[-490px]">
          <button
            className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:scale-105"
            onClick={handleStatementClick}
          >
            Add Question
          </button>

          <button
            className="bg-gray-200 text-black px-4 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-black"
            onClick={handlePropertiesClick}
          >
            Properties
          </button>

          <div className="flex items-center ml-6 text-gray-600">
            <PencilIcon className="h-4 w-4 mr-2" />
            Real Estate property chatbot
          </div>
        </div>

        {/* Right-Side Buttons */}
        <div className="flex space-x-2">
          <button className="flex items-center text-sm font-medium text-gray-700 hover:text-black hover:scale-105">
            Install tool
          </button>
          <button className="w-[80px] flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-200 rounded w-[70px] hover:border-black">
            Flowmap
          </button>

          <button className="bg-gray-200 text-black px-4 py-2 rounded-md text-sm font-medium flex items-center text-sm font-medium text-gray-700 hover:text-white hover:bg-black">
            <EyeIcon className="h-4 w-4 mr-2" />
            Preview
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 hover:text-black hover:font-semibold">
            Save
          </button>
        </div>
      </div>

      {/* Page Content based on clicks */}
      <div className="p-4">
        {/* Only show the StatementForm when both Statement and Properties are clicked */}
        {clickedStatement && clickedProperties ? (
          <StatementForm />
        ) : (
          <h2 className="text-xl"></h2>
        )}
      </div>
    </div>
  );
}









// import { ArrowLeftIcon, PencilIcon, EyeIcon } from '@heroicons/react/24/outline';
// import { useState } from 'react';

// export default function CustomHeader() {
//   // State to track the current page
//   const [currentPage, setCurrentPage] = useState("default");

//   // Function to handle navigation to different pages
//   const navigateToPage = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       {/* Header bar */}
//       <div className="flex items-center justify-between bg-white px-4 py-2 border-b border-grey">
//         <button className="flexitems-center text-sm font-medium text-gray-700 hover:text-gray-900" onClick={() => navigateToPage('default')}>
//           <ArrowLeftIcon className="h-5 w-5 mr-2" />
//           Back
//         </button>

//         {/* Main Buttons */}
//         <div className="flex space-x-2 ml-[-500px] ">
//           <button
//             className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:scale-105"
//             onClick={() => navigateToPage('add-question')}
//           >
//             Add question
//           </button>

//           <button
//             className="bg-gray-200 text-black px-4 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-black"
//             onClick={() => navigateToPage('properties')}
//           >
//             Properties
//           </button>

//           <div className="flex items-center ml-6 text-gray-600">
//             <PencilIcon className="h-4 w-4 mr-2" />
//             Real Estate property chatbot
//           </div>
//         </div>

//         {/* Right-Side Buttons */}
//         <div className="flex space-x-2">
//           <button className="flex items-center text-sm font-medium text-gray-700 hover:text-black hover:scale-105">
//             Install tool
//           </button>
//           <button className="w-[80px] flexitems-center text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-200 rounded w-[70px] hover:border-black">
//             Flowmap
//           </button>

//           <button className="bg-gray-200 text-black px-4 py-2 rounded-md text-sm font-medium flex items-center text-sm font-medium text-gray-700 hover:text-white hover:bg-black">
//             <EyeIcon className="h-4 w-4 mr-2" />
//             Preview
//           </button>
//           <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 hover:text-black hover:font-semibold">
//             Save
//           </button>
//         </div>
//       </div>

//       {/* Page Content based on navigation */}
//       <div className="p-4">
//         {/* {currentPage === 'add-question' && <h2 className="text-xl">You are now on the Add Question Page</h2>} */}
//         {currentPage === 'properties' && <h2 className="text-xl">You are now on the Properties Page</h2>}
//         {currentPage === 'default' && <h2 className="text-xl">Welcome to the Dashboard</h2>}
//       </div>
//     </div>
//   );
// }













// import { ArrowLeftIcon, PencilIcon, EyeIcon, } from '@heroicons/react/24/outline';

// export default function CustomHeader() {
//   return (
//     <div className="flex items-center justify-between bg-white px-4 py-2 border-b border-grey">     
//       <button className="flexitems-center text-sm font-medium text-gray-700 hover:text-gray-900">
//         <ArrowLeftIcon className="h-5 w-5 mr-2" />
//         Back
//       </button>

//       {/* Main Buttons */}
//       <div className="flex space-x-2 ml-[-500px] ">
//         <button className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:scale-105 ">
//           Add question
//         </button>

//         <button className="bg-gray-200 text-black px-4 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-black ">
//           Properties
//         </button>

//         <div className="flex items-center ml-6 text-gray-600">
//           <PencilIcon className="h-4 w-4 mr-2" />
//           Real Estate property chatbot
//         </div>
//       </div>

//       {/* Right-Side Buttons */}
//       <div className="flex space-x-2">
//         <button className="flex items-center text-sm font-medium text-gray-700 hover:text-black hover:scale-105 ">
//           Install tool
//         </button>
//         <button className="w-[80px] flexitems-center text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-200 rounded w-[70px]  hover:border-black ">
//           Flowmap
//         </button>

//         <button className="bg-gray-200 text-black px-4 py-2 rounded-md text-sm font-medium flex items-center text-sm font-medium text-gray-700 hover:text-white hover:bg-black">
//           <EyeIcon className="h-4 w-4 mr-2" />

//           Preview
//         </button>
//         <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 hover:text-black hover:font-semibold ">
//           Save
//         </button>
//       </div>
//     </div>
//   );
// }
