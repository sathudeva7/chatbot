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
              content: `<div class="flex"><div class="bg-[#9bbb3f] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/text.svg" /></div>What is your Email?</div></div>`,
              items: [{ content: "Email" }],
            },
          ],
        });
      } else if (type == "form") {
        editorInstance.blocks.insert("form", {
          style: "unordered",
          items: [
            {
              content: `<div class="flex"><div class="bg-[#9bbb3f] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/text.svg" /></div>Finally, could we get your contact details?</div></div>`,
              items: [{ content: "Name" }, { content: "Email" }, { content: "Phone" }, { content: "Message" }],
            },
          ],
        });
      } else if (type == "select_one") {
        editorInstance.blocks.insert("select", {
          style: "ordered",
          items: [
            {
              content: `<div class="flex"><div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>How are you?</div></div>`,
              items: [{ content: "I'm good thanks!" }, { content: "No thanks" }],
            },
          ],
        });
      } else if (type == "select_multiple") {
        editorInstance.blocks.insert("multiSelect", {
          style: "ordered",
          items: [
            {
              content: `<div class="flex"><div class="bg-[#9a59b5] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/list.svg" /></div>How are you?</div></div>`,
              items: [{ content: "I'm good thanks!" }, { content: "No thanks" }],
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
        onClick={() => addNewBlock("select_one")}
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
        onClick={() => addNewBlock("select_multiple")}
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
    </>
  );
}
