import { ArrowLeftIcon, PencilIcon, EyeIcon, } from '@heroicons/react/24/outline';

export default function CustomHeader() {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-2 shadow-md">
      {/* Back Button */}
      <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back
      </button>

      {/* Main Buttons */}
      <div className="flex space-x-2 ml-[-550px] ">
        <button className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium">
          Add question
        </button>
        <button className="bg-gray-200 text-black px-4 py-2 rounded-md text-sm font-medium">
          Properties
        </button>
        <div className="flex items-center ml-6 text-gray-600">
          <PencilIcon className="h-4 w-4 mr-2" />
          Real Estate property chatbot
        </div>
      </div>

      {/* Right-Side Buttons */}
      <div className="flex space-x-2">
        <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
          Install tool
        </button>
        <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-200 rounded w-[70px] ">
          Flowmap
        </button>

        <button className="bg-gray-200 text-black px-4 py-2 rounded-md text-sm font-medium flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
          <EyeIcon className="h-4 w-4 mr-2" />

          Preview
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium">
          Save
        </button>
      </div>
    </div>
  );
}
