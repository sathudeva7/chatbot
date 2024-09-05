import NestedList from '@editorjs/nested-list';

export default class Faq extends NestedList {
  static get toolbox() {
    return {
      title: 'Faq',
      icon: '<div class="bg-[#CC5500] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/file-upload.svg" /></div>',
    };
  }

  render(): Element {
    this.nodes.wrapper = this.makeListWrapper(this.data.style, [
      this.CSS.baseBlock,
    ]);

    // Fill with data
    if (this.data.items.length) {
      this.appendItems(this.data.items, this.nodes.wrapper);
    } else {
      this.appendItems(
        [
          {
            content: `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>Please upload a file</div>`,
            items: [],
          },
        ],
        this.nodes.wrapper
      );
    }

    if (!this.readOnly) {
      // Add event listeners for key actions
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

  // Additional methods can be added here to handle file uploads
  // or other file-specific operations if needed.
}
