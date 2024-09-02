import NestedList from "@editorjs/nested-list";

export default class MultiSelect extends NestedList {
  constructor({ data, config, api, readOnly }: NestedListParams) {
    super({ data, config, api, readOnly });

  }

  static get toolbox() {
    return {
      title: "Select multiple",
      icon: '<div class="bg-[#9a59b5] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/list.svg" /></div>',
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
			   content: `<div class="flex"><div class="bg-[#9a59b5] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/list.svg" /></div>How are you?</div>`,
			   items: [
				{"content": "I'm good thanks!"},
        {"content": "No thanks"}
			   ],
			 },
		    ],
		    this.nodes.wrapper
		  );
		}
	 
		if (!this.readOnly) {
		  // detect keydown on the last item to escape List
		  this.nodes.wrapper.addEventListener(
		    'keydown',
		    (event) => {
			 switch (event.key) {
			   case 'Enter':
				this.enterPressed(event);
				break;
			   case 'Backspace':
				this.backspace(event);
				break;
			   case 'Tab':
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
}
