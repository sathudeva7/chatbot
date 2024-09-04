import React from "react";

export default function BlockSelectionBar({ editorInstance }) {
  const addNewBlock = (type) => {
    console.log(editorInstance);
    if (editorInstance) {
      if (type == "statement") {
        editorInstance.blocks.insert("paragraph", {
          text: "This is a Statement",
        });
      } else if (type == "question") {
        editorInstance.blocks.insert("form", {
          style: "unordered",
          items: [
            {
              content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>How are you?</div>`,
              items: [{ content: "I'm good thanks!" }, { content: "No thanks" }],
            },
          ],
        });
      }

      else if (type == "form") {
        editorInstance.blocks.insert("form", {
          style: "unordered",
          items: [
            {
              content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>Finally, could we get your contact details?</div>`,
              items: [{ content: "Name" }, { content: "Email" }],
            },
          ],
        });
      }

      else if (type == "selectone") {
        editorInstance.blocks.insert("form", {
          style: "unordered",
          items: [
            {
              content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>How are you?</div>`,
              items: [{ content: "I'm good thanks!" }, { content: "No thanks" }],
            },
          ],
        });
      }

      else if (type == "search") {
        editorInstance.blocks.insert("form", {
          style: "unordered",
          items: [
            {
              content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>Search anything from this website.</div>`,
            },
          ],
        });
      }

      else if (type == "ai") {
        editorInstance.blocks.insert("form", {
          style: "unordered",
          items: [
            {
              content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>Asking AI for information</div>`,
            },
          ],
        });
      }

      else if (type == "file") {
        editorInstance.blocks.insert("form", {
          style: "unordered",
          items: [
            {
              content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>Please upload a file</div>`,
            },
          ],
        });
      }

      else if (type == "calender") {
        editorInstance.blocks.insert("calender", {
          text: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>Choose a date</div>`
          // items: [
          //   {
          //     content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>Choose a date</div>`,
          //   },
          // ],
        });
      }

      else if (type == "faq") {
        editorInstance.blocks.insert("form", {
          style: "unordered",
          items: [
            {
              content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>Search anything from this website.</div>`,
            },
          ],
        });
      }



    }
  };
  return (
    <>
      <div
        onClick={() => addNewBlock("statement")}
        className=" bg-[#f6f6f6] mb-2 w-full flex p-2 rounded-md text-left"
      >
        <div style={{width : '24px', height: '24px', borderRadius: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="bg-[#2bc7a7] icon-class">
          <img
            style={{ width: "15px;" }}
            src="https://dash.serviceform.com/images/icons/flow/note.svg"
          />
        </div>
        Statement
      </div>

      <div
        onClick={() => addNewBlock("question")}
        className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left"
      >
        <div className="bg-[#9bbb3f] icon-class">
          <img
            style={{ width: "13px;" }}
            src="https://dash.serviceform.com/images/icons/flow/text.svg"
          />
        </div>
        Text question
      </div>

      <div
        onClick={() => addNewBlock("form")}
        className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left"
      >
        <div className="bg-[#9bbb3f] icon-class">
          <img
            style={{ width: "13px;" }}
            src="https://dash.serviceform.com/images/icons/flow/text.svg"
          />
        </div>
        Form
      </div>

      <div
        onClick={() => addNewBlock("selectone")}
        className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left"
      >
        <div className="bg-[#3598db] icon-class">
          <img
            style={{ width: "13px;" }}
            src="https://dash.serviceform.com/images/icons/flow/task-square.svg"
          />
        </div>
        Select One
      </div>

      <div
        onClick={() => addNewBlock("selectone")}
        className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left"
      >
        <div className="bg-[#9a59b5] icon-class">
          <img
            style={{ width: "13px;" }}
            src="https://dash.serviceform.com/images/icons/flow/list.svg"
          />
        </div>
        Select Multiple
      </div>

      <div
        onClick={() => addNewBlock("search")}
        className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left"
      >
        <div className="bg-[black] icon-class">
          <img
            style={{ width: "13px;" }}
            src="https://dash.serviceform.com/images/icons/flow/search.svg"
          />
        </div>
        Site Search
      </div>

      <div
        onClick={() => addNewBlock("ai")}
        className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left"
      >
        <div className="bg-[#E97451] icon-class">
          <img
            style={{ width: "13px;" }}
            src="https://dash.serviceform.com/images/icons/flow/aiQuestion.svg"
          />
        </div>
        Ai question
      </div>

      <div
        onClick={() => addNewBlock("file")}
        className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left"
      >
        <div className="bg-[#CC5500] icon-class">
          <img
            style={{ width: "13px;" }}
            src="https://dash.serviceform.com/images/icons/flow/file-upload.svg"
          />
        </div>
        File upload
      </div>

      <div
        onClick={() => addNewBlock("calender")}
        className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left"
      >
        <div className="bg-[purple] icon-class">
          <img
            style={{ width: "13px;" }}
            src="https://dash.serviceform.com/images/icons/flow/calendar.svg"
          />
        </div>
        Calender
      </div>

      <div
        onClick={() => addNewBlock("faq")}
        className="bg-[#f6f6f6] mb-2 w-full rounded-md flex p-2 text-left"
      >
        <div className="bg-[#2bc7b9] icon-class">
          <img
            style={{ width: "13px;" }}
            src="https://dash.serviceform.com/images/icons/flow/faq.svg"
          />
        </div>
        FAQ
      </div>

    </>
  );
}
