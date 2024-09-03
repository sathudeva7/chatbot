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
          <div className="w-[400px] h-[650px] ml-[-20px] mt-10 p-4 bg-purple-500 rounded-lg shadow-lg relative overflow-y-auto rounded-[10px] ">
            <div className="bg-black p-2 rounded-t-lg flex justify-between items-center w-[420px] h-[70px] mt-[-20px] ml-[-15px] ">
              <div className="text-white font-bold ml-[10px] ">Vroom</div>
              <div className="flex space-x-2 mr-[35px] ">
                <button className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white  ">
                  &#x21bb;
                </button>
                <button
                  className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white  "
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
                            <div
                              className="w-full px-4 md:w-1/2 lg:w-1/3"
                              key={item.content}
                            >
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

                  {block.type === "siteSearch" && (
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
                      <div className="border rounded-md p-2 bg-white rounded-[20px] ">
                        <div className="flex mb-3">
                          <input
                            type="text"
                            placeholder="search"
                            className="w-[200px] mb-[0px] bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                          />
                          <div className="sf-search-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="black" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div>
                        </div>
                      </div>
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
                          <MultiSelect
                            colourOptions={block.data?.items[0]?.items}
                          />
                        )}
                      </div>
                    </>
                  )}
                  {/* Add other block types here */}
                </div>
              ))}
            </div>
            <div className="mt-8 text-center text-white text-sm">
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
