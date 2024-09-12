import React from "react";

export default function BlockSelectionBar({ editorInstance }) {
  const addNewBlock = (type) => {
    console.log(editorInstance);
    if (editorInstance) {
      switch (type) {
        case "statement":
          editorInstance.blocks.insert("paragraph", {
            text: "This is a Statement",
          });
          break;
        case "question":
          editorInstance.blocks.insert("form", {
            style: "unordered",
            items: [
              {
                content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>How are you?</div>`,
                items: [
                  { content: "I'm good thanks!" },
                  { content: "No thanks" },
                ],
              },
            ],
          });
          break;
        case "form":
          editorInstance.blocks.insert("form", {
            style: "unordered",
            items: [
              {
                content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>Finally, could we get your contact details?</div>`,
                items: [{ content: "Name" }, { content: "Email" }],
              },
            ],
          });
          break;
        case "selectone":
          editorInstance.blocks.insert("form", {
            style: "unordered",
            items: [
              {
                content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>How are you?</div>`,
                items: [
                  { content: "I'm good thanks!" },
                  { content: "No thanks" },
                ],
              },
            ],
          });
          break;
        case "search":
          editorInstance.blocks.insert("faq", {
            style: "unordered",
            items: [
              {
                content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>Search anything from this website.</div>`,
              },
            ],
          });
          break;
        case "ai":
          editorInstance.blocks.insert("form", {
            style: "unordered",
            items: [
              {
                content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>Asking AI for information</div>`,
              },
            ],
          });
          break;
        case "file":
          editorInstance.blocks.insert("file", {
            style: "unordered",
            items: [
              {
                content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>Please upload a file</div>`,
              },
            ],
          });
          break;
        case "calendar":
          editorInstance.blocks.insert("calendar", {
            items: [
              {
                content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>Choose a date</div>`,
              },
            ],
          });
          break;
        case "faq":
          editorInstance.blocks.insert("faq", {
            style: "unordered",
            items: [
              {
                content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>FAQ block content</div>`,
              },
            ],
          });
          break;
        default:
          console.log("Unknown block type");
      }
    }
  };

  return (
    <>
      <div></div>
      <div
        onClick={() => addNewBlock("statement")}
        className="bg-[#f6f6f6] mb-2 w-full flex p-2 rounded-md text-left rounded-[60px]"
      >
        <div
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "18px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="bg-[#2bc7a7] icon-class"
          
        >
          <img
            style={{ width: "15px" }}
            src="https://dash.serviceform.com/images/icons/flow/note.svg"
            alt="Statement icon"
          />
        </div>
        Statement
      </div>

      <div
        onClick={() => addNewBlock("question")}
        className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left rounded-[60px]"
      >
        <div className="bg-[#9bbb3f] icon-class">
          <img
            style={{ width: "13px" }}
            src="https://dash.serviceform.com/images/icons/flow/text.svg"
            alt="Text question icon"
          />
        </div>
        Text question
      </div>

      <div
        onClick={() => addNewBlock("form")}
        className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left rounded-[60px]"
      >
        <div className="bg-[#9bbb3f] icon-class">
          <img
            style={{ width: "13px" }}
            src="https://dash.serviceform.com/images/icons/flow/text.svg"
            alt="Form icon"
          />
        </div>
        Form
      </div>

      <div
        onClick={() => addNewBlock("selectone")}
        className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left rounded-[60px]"
      >
        <div className="bg-[#3598db] icon-class">
          <img
            style={{ width: "13px" }}
            src="https://dash.serviceform.com/images/icons/flow/task-square.svg"
            alt="Select One icon"
          />
        </div>
        Select One
      </div>

      <div
        onClick={() => addNewBlock("selectone")}
        className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left rounded-[60px]"
      >
        <div className="bg-[#9a59b5] icon-class">
          <img
            style={{ width: "13px" }}
            src="https://dash.serviceform.com/images/icons/flow/list.svg"
            alt="Select Multiple icon"
          />
        </div>
        Select Multiple
      </div>

      <div
        onClick={() => addNewBlock("search")}
        className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left rounded-[60px]"
      >
        <div className="bg-[black] icon-class">
          <img
            style={{ width: "13px" }}
            src="https://dash.serviceform.com/images/icons/flow/search.svg"
            alt="Search icon"
          />
        </div>
        Site Search
      </div>

      <div
        onClick={() => addNewBlock("ai")}
        className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left rounded-[60px]"
      >
        <div className="bg-[#E97451] icon-class">
          <img
            style={{ width: "13px" }}
            src="https://dash.serviceform.com/images/icons/flow/aiQuestion.svg"
            alt="AI Question icon"
          />
        </div>
        AI question
      </div>

      <div
        onClick={() => addNewBlock("file")}
        className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left rounded-[60px]"
      >
        <div className="bg-[#CC5500] icon-class">
          <img
            style={{ width: "13px" }}
            src="https://dash.serviceform.com/images/icons/flow/file-upload.svg"
            alt="File Upload icon"
          />
        </div>
        File upload
      </div>

      <div
        onClick={() => addNewBlock("calendar")}
        className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left rounded-[60px]"
      >
        <div className="bg-[purple] icon-class">
          <img
            style={{ width: "13px" }}
            src="https://dash.serviceform.com/images/icons/flow/calendar.svg"
            alt="Calendar icon"
          />
        </div>
        Calendar
      </div>

      <div
        onClick={() => addNewBlock("faq")}
        className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left rounded-[60px]"
      >
        <div className="bg-[#2bc7b9] icon-class">
          <img
            style={{ width: "13px" }}
            src="https://dash.serviceform.com/images/icons/flow/faq.svg"
            alt="FAQ icon"
          />
        </div>
        FAQ
      </div>
    </>
  );
}





















// import React from "react";
 

// export default function BlockSelectionBar({ editorInstance }) {
//   const addNewBlock = (type) => {
//     console.log(editorInstance);
//     if (editorInstance) {
//       if (type == "statement") {
//         editorInstance.blocks.insert("paragraph", {
//           text: "This is a Statement",
//         });
//       } else if (type == "question") {
//         editorInstance.blocks.insert("form", {
//           style: "unordered",
//           items: [
//             {
//               content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>How are you?</div>`,
//               items: [{ content: "I'm good thanks!" }, { content: "No thanks" }],
//             },
//           ],
//         });
//       }

//       else if (type == "form") {
//         editorInstance.blocks.insert("form", {
//           style: "unordered",
//           items: [
//             {
//               content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>Finally, could we get your contact details?</div>`,
//               items: [{ content: "Name" }, { content: "Email" }],
//             },
//           ],
//         });
//       }

//       else if (type == "selectone") {
//         editorInstance.blocks.insert("form", {
//           style: "unordered",
//           items: [
//             {
//               content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>How are you?</div>`,
//               items: [{ content: "I'm good thanks!" }, { content: "No thanks" }],
//             },
//           ],
//         });
//       }

//       else if (type == "search") {
//         editorInstance.blocks.insert("faq", {
//           style: "unordered",
//           items: [
//             {
//               content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>Search anything from this website.</div>`,
//             },
//           ],
//         });
//       }

//       else if (type == "ai") {
//         editorInstance.blocks.insert("form", {
//           style: "unordered",
//           items: [
//             {
//               content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>Asking AI for information</div>`,
//             },
//           ],
//         });
//       }

//       else if (type == "file") {
//         editorInstance.blocks.insert("file", {
//           style: "unordered",
//           items: [
//             {
//               content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>Please upload a file</div>`,
//             },
//           ],
//         });
//       }

//       else if (type == "calender") {
//         editorInstance.blocks.insert("calender", {
//           // text: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>Choose a date</div>`
//           items: [
//             {
//               content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>Choose a date</div>`,
//             },
//           ],
//         });
//       }

//       else if (type == "faq") {
//         editorInstance.blocks.insert("faq", {
//           style: "unordered",
          
//           items: [
//             {
//               content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>Please upload a file</div>`,
//             },
//           ],
//         });
//       }



//     }
//   };
//   return (
//     <>
//     <div></div>
//       <div
//         onClick={() => addNewBlock("statement")}
//         className=" bg-[#f6f6f6] mb-2 w-full flex p-2 rounded-md text-left rounded-[60px] "
//       >
//         <div style={{width : '24px', height: '24px', borderRadius: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center', }} className="bg-[#2bc7a7] icon-class">
//           <img
//             style={{ width: "15px;" }}
//             src="https://dash.serviceform.com/images/icons/flow/note.svg"
//           />
//         </div>
//         Statement
//       </div>

//       <div
//         onClick={() => addNewBlock("question")}
//         className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left rounded-[60px]"
//       >
//         <div className="bg-[#9bbb3f] icon-class">
//           <img
//             style={{ width: "13px;" }}
//             src="https://dash.serviceform.com/images/icons/flow/text.svg"
//           />
//         </div>
//         Text question
//       </div>

//       <div
//         onClick={() => addNewBlock("form")}
//         className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left rounded-[60px] "
//       >
//         <div className="bg-[#9bbb3f] icon-class">
//           <img
//             style={{ width: "13px;" }}
//             src="https://dash.serviceform.com/images/icons/flow/text.svg"
//           />
//         </div>
//         Form
//       </div>

//       <div
//         onClick={() => addNewBlock("selectone")}
//         className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left rounded-[60px] "
//       >
//         <div className="bg-[#3598db] icon-class">
//           <img
//             style={{ width: "13px;" }}
//             src="https://dash.serviceform.com/images/icons/flow/task-square.svg"
//           />
//         </div>
//         Select One
//       </div>

//       <div
//         onClick={() => addNewBlock("selectone")}
//         className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left rounded-[60px] "
//       >
//         <div className="bg-[#9a59b5] icon-class">
//           <img
//             style={{ width: "13px;" }}
//             src="https://dash.serviceform.com/images/icons/flow/list.svg"
//           />
//         </div>
//         Select Multiple
//       </div>

//       <div
//         onClick={() => addNewBlock("search")}
//         className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left rounded-[60px] "
//       >
//         <div className="bg-[black] icon-class">
//           <img
//             style={{ width: "13px;" }}
//             src="https://dash.serviceform.com/images/icons/flow/search.svg"
//           />
//         </div>
//         Site Search
//       </div>

//       <div
//         onClick={() => addNewBlock("ai")}
//         className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left rounded-[60px] "
//       >
//         <div className="bg-[#E97451] icon-class">
//           <img
//             style={{ width: "13px;" }}
//             src="https://dash.serviceform.com/images/icons/flow/aiQuestion.svg"
//           />
//         </div>
//         Ai question
//       </div>

//       <div
//         onClick={() => addNewBlock("file")}
//         className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left rounded-[60px] "
//       >
//         <div className="bg-[#CC5500] icon-class">
//           <img
//             style={{ width: "13px;" }}
//             src="https://dash.serviceform.com/images/icons/flow/file-upload.svg"
//           />
//         </div>
//         File upload
//       </div>

//       <div
//         onClick={() => addNewBlock("calender")}
//         className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left rounded-[60px] "
//       >
//         <div className="bg-[purple] icon-class">
//           <img
//             style={{ width: "13px;" }}
//             src="https://dash.serviceform.com/images/icons/flow/calendar.svg"
//           />
//         </div>
//         Calender
//       </div>

//       <div
//         onClick={() => addNewBlock("faq")}
//         className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left rounded-[60px] "
//       >
//         <div className="bg-[#2bc7b9] icon-class">
//           <img
//             style={{ width: "13px;" }}
//             src="https://dash.serviceform.com/images/icons/flow/faq.svg"
//           />
//         </div>
//         FAQ
//       </div>

//     </>
//   );
// }
