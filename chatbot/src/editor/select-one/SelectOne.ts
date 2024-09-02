import NestedList from "@editorjs/nested-list";

export default class SelectOne extends NestedList {
  constructor({ data, config, api, readOnly }: NestedListParams) {
    super({ data, config, api, readOnly });
  }

  static get toolbox() {
    return {
      title: "Select One",
      icon: '<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>',
    };
  }

  render(): Element {
    this.nodes.wrapper = this.makeListWrapper(this.data.style, [
      this.CSS.baseBlock,
    ]);

    // fill with data
    if (this.data.items.length) {
      this.appendItems(this.data.items, this.nodes.wrapper);
    } else {
      this.appendItems(
        [
          {
            content: `<div class="flex"><div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>How are you?</div></div>`,
            items: [{ content: "I'm good thanks!" }, { content: "No thanks" }],
          },
        ],
        this.nodes.wrapper
      );
    }

    if (!this.readOnly) {
      // detect keydown on the last item to escape List
      this.nodes.wrapper.addEventListener(
        "keydown",
        (event) => {
          switch (event.key) {
            case "Enter":
              this.enterPressed(event);
              break;
            case "Backspace":
              this.backspace(event);
              break;
            case "Tab":
              if (event.shiftKey) {
                this.shiftTab(event);
              } else {
                this.addTab(event);
              }
              break;
          }
        },
        false
      );
    }

    return this.nodes.wrapper;
  }

  // render(){
  // 	const el = document.createElement('div');
  // 	el.innerHTML = `<div class="bg-[#2bc7a7] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /><div>
  //   <div class="ce-paragraph cdx-block" contenteditable="true" data-placeholder-active="" data-empty="false">asdasdsad</div>`
  //   return el;
  // }

  // Other methods...
}
