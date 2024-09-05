import { useState, useContext } from "react";
import { EditorContext } from "../context/EditorContext";
import MultiSelect from "./MultiSelect";

export default function Chatbot() {
  const { content } = useContext(EditorContext);
  const [isVisible, setIsVisible] = useState(true); // Initially visible


  const createMarkup = (html) => ({ __html: html });






  return (

    <div>
      <div>


        {/* Chatbot card */}
        {isVisible && (
          <div className="max-w-sm mx-auto w-[600px] h-[600px] ml-[-20px] mt-[-13px] p-4 bg-purple-500 rounded-lg shadow-lg relative overflow-y-auto rounded-[10px] ">
            <div className="bg-black p-2 rounded-t-lg flex justify-between items-center w-[420px] h-[70px] mt-[-20px] ml-[-15px] ">
              <div className="text-white font-bold ml-[10px] ">Vroom</div>
              <div className="flex space-x-2 mr-[35px] ">
                <button className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white  ">
                  &#x21bb;
                </button>
                <button className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white  "
                  onClick={() => setIsVisible(false)} // Handle button click to close
                >
                  &#x2715;
                </button>
              </div>
            </div>
            <div className="p-4 space-y-4">
              {content?.blocks?.map((block, index) => (
                <div key={index} className="">
                  {block.type === "statement" && (
                    <div className="flex">
                      <img
                        src="https://via.placeholder.com/50"
                        alt="User"
                        className="w-12 h-12 rounded-full mr-2"
                      />
                      <p
                        className="text-black bg-gray-200 p-2 rounded-lg my-2"
                        dangerouslySetInnerHTML={createMarkup(block.data?.text)}
                      ></p>
                    </div>
                  )}
                  {block.type === "image" && (
                    <div className="text-center">
                      <img
                        src={block.data.url}
                        alt={block.data.caption}
                        className="mx-auto"
                      />
                      {block.data.caption && <p>{block.data.caption}</p>}
                    </div>
                  )}

                  {block.type === "form" && (
                    <>
                      <div className="flex">
                        <img
                          src="https://via.placeholder.com/50"
                          alt="User"
                          className="w-12 h-12 rounded-full mr-2"
                        />
                        <p
                          className="text-black bg-gray-200 p-2 rounded-lg my-2"
                          dangerouslySetInnerHTML={createMarkup(
                            block.data?.items[0]?.content
                          )}
                        ></p>
                      </div>
                      <div className="border rounded-md p-2 bg-white rounded-[20px] ">
                        {block.data?.items[0]?.items.length > 0 &&
                          block?.data?.items[0]?.items.map((item) => (
                            <div className="w-full px-4 md:w-1/2 lg:w-1/3" key={item.content}>
                              <div className="mb-3">
                                <label className="w-[200px] block text-base font-medium text-black">
                                  {` ${item?.content}`}
                                </label>

                                <input
                                  type="text"
                                  placeholder={` ${item?.content}`}
                                  className="w-[200px] mb-[0px] bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                                />
                              </div>
                            </div>
                          ))}
                      </div>
                      <button className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium rounded-[20px] ml-[10px] mt-[10px] w-[300px] ">
                        Submit
                      </button>
                    </>
                  )}

                  {block.type === "select" && (
                    <>
                      <div className="flex">
                        <img
                          src="https://via.placeholder.com/50"
                          alt="User"
                          className="w-12 h-12 rounded-full mr-2"
                        />
                        <p
                          className="text-black bg-gray-200 p-2 rounded-lg my-2"
                          dangerouslySetInnerHTML={createMarkup(
                            block.data?.items[0]?.content
                          )}
                        ></p>
                      </div>
                      <div>
                        {block.data?.items[0]?.items.length > 0 &&
                          block?.data?.items[0]?.items.map((item) => (
                            <button
                              key={item.content}
                              className="bg-[#1e306d] border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
                            >
                              {item?.content}
                            </button>
                          ))}
                      </div>
                    </>
                  )}

                  {block.type === "multiSelect" && (
                    <>
                      <div className="flex">
                        <img
                          src="https://via.placeholder.com/50"
                          alt="User"
                          className="w-12 h-12 rounded-full mr-2"
                        />
                        <p
                          className="text-black bg-gray-200 p-2 rounded-lg my-2"
                          dangerouslySetInnerHTML={createMarkup(
                            block.data?.items[0]?.content
                          )}
                        ></p>
                      </div>
                      {console.log(block.data?.items[0]?.items)}
                      <div>
                        {block.data?.items[0]?.items.length > 0 && (
                          <MultiSelect colourOptions={block.data?.items[0]?.items} />
                        )}
                      </div>
                    </>
                  )}
                  {block.type === "calender" && (
                    <>
                      <div className="flex">
                        <img
                          src="https://via.placeholder.com/50"
                          alt="User"
                          className="w-12 h-12 rounded-full mr-2"
                        />
                        <div className="text-black bg-gray-200 p-2 rounded-lg my-2 flex items-center w-[220px] ">
                          <input
                            type="text"
                            id="date-picker"
                            placeholder="dd/mm/yyyy"
                            className="border p-2 rounded-md"
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")}
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6 ml-2 cursor-pointer"
                            onClick={() => document.getElementById('date-picker').focus()}
                          >

                          </svg>
                        </div>
                      </div>

                      <div className="p-2 mb-4">
                        <div className="flex space-x-4 justify-center mt-4">
                          <button className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium ml-[220px] mt-[-20px]  hover:scale-105">
                            Submit
                          </button>
                        </div>
                      </div>
                    </>
                  )}







                  {block.type === "faq" && (
                    <>
                      <div className="flex">
                        <img
                          src="https://via.placeholder.com/50"
                          alt="User"
                          className="w-12 h-12 rounded-full mr-2"
                        />
                        <p
                          className="text-black bg-gray-200 p-2 rounded-lg my-2"
                          dangerouslySetInnerHTML={createMarkup(
                            block.data?.text
                          )}
                        ></p>
                      </div>
                      {console.log(block.data?.content)},


                      <div className="border rounded-md p-2 bg-white rounded-[20px] mb-4">
                        <div className="relative flex items-center mb-4">
                          <input
                            type="text"
                            placeholder="Search here"
                            className="w-full px-4 py-2 pr-10 text-gray-700 bg-transparent border border-stroke dark:border-dark-3 rounded-md focus:outline-none focus:border-primary"
                          />
                          <button className="absolute right-3 text-gray-500 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </button>
                        </div>
                        <button className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium w-full  hover:scale-105 ">
                          Submit
                        </button>
                      </div>
                    </>
                  )}


                  {block.type === "file" && (
                    <>
                      <div className="flex">
                        <img
                          src="https://via.placeholder.com/50"
                          alt="User"
                          className="w-12 h-12 rounded-full mr-2"
                        />
                        <p
                          className="text-black bg-gray-200 p-2 rounded-lg my-2"
                          dangerouslySetInnerHTML={createMarkup(block.data?.content)}
                        ></p>
                      </div>

                      <div className=" p-2 mb-4">
                        <div className="flex space-x-4 justify-center mt-4">
                          <label
                            htmlFor="file-upload"
                            className="bg-blue-900 text-white py-2 px-4 rounded-full flex items-center cursor-pointer hover:scale-105 "
                          >
                            <input id="file-upload" type="file" className="hidden" />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-5 h-5 mr-2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.172 7l-6.586 6.586M7 7h10v10"
                              />
                            </svg>
                            Upload file
                          </label>
                          <button className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium  hover:scale-105">
                            Submit
                          </button>
                        </div>
                      </div>
                    </>
                  )}


                  {block.type === "search" && (
                    <>
                      <div className="flex">
                        <img
                          src="https://via.placeholder.com/50"
                          alt="User"
                          className="w-12 h-12 rounded-full mr-2"
                        />
                        <p
                          className="text-black bg-gray-200 p-2 rounded-lg my-2"
                          dangerouslySetInnerHTML={createMarkup(
                            block.data?.text
                          )}
                        ></p>
                      </div>
                      {console.log(block.data?.content)},


                      <div className="border rounded-md p-2 bg-white rounded-[20px] mb-4">
                        <div className="relative flex items-center mb-4">
                          <input
                            type="text"
                            placeholder="Search here"
                            className="w-full px-4 py-2 pr-10 text-gray-700 bg-transparent border border-stroke dark:border-dark-3 rounded-md focus:outline-none focus:border-primary"
                          />
                          <button className="absolute right-3 text-gray-500 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </button>
                        </div>
                        <button className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium w-full  hover:scale-105 ">
                          Submit
                        </button>
                      </div>
                    </>
                  )}





                  {/* Add other block types here */}
                </div>
              ))}
            </div>
            <div className="mt-8 text-center text-white text-sm mt-[420px] ">
              <span>by</span>
              <span className="font-bold">serviceform</span>
            </div>
          </div>
        )}
      </div>


      {/* Button to show the chatbot card - Always visible */}
      <div className="flex justify-end p-4">
        <button
          className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white"
          onClick={() => setIsVisible(true)}
        >
          &#x1F4AC;
        </button>
      </div>



    </div>
  );
}
