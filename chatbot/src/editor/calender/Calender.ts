import NestedList from '@editorjs/nested-list';

export default class Calendar extends NestedList {
  static get toolbox() {
    return {
      title: 'Calender',
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












// import NestedList from '@editorjs/nested-list';

// export default class Calendar extends NestedList {
//   static get toolbox() {
//     return {
//       title: 'Calendar',
//       icon: '<div class="bg-[purple] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/calendar.svg" /></div>',
//     };
//   }

//   render(): Element {
//     this.nodes.wrapper = this.makeListWrapper(this.data.style, [this.CSS.baseBlock]);

//     // Fill with data
//     if (this.data.text) {
//       this.nodes.wrapper.innerHTML = this.data.text;
//     } else {
//       this.nodes.wrapper.innerHTML = `<div class="bg-[#3598db] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /></div>Choose a date</div>`;
//     }

//     if (!this.readOnly) {
//       this.addDateInputField();
//       this.addCalendarEventListeners();
//     }

//     return this.nodes.wrapper;
//   }

//   addDateInputField() {
//     const dateInput = document.createElement('input');
//     dateInput.type = 'date';
//     dateInput.className =
//       'w-full px-4 py-2 text-gray-700 bg-transparent border border-stroke dark:border-dark-3 rounded-md';

//     const submitButton = document.createElement('button');
//     submitButton.textContent = 'Submit';
//     submitButton.className =
//       'bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium w-full mt-2';

//     this.nodes.wrapper.appendChild(dateInput);
//     this.nodes.wrapper.appendChild(submitButton);
//   }

//   addCalendarEventListeners() {
//     this.nodes.wrapper.addEventListener('change', (event) => {
//       if ((event.target as HTMLInputElement).type === 'date') {
//         const selectedDate = (event.target as HTMLInputElement).value;
//         console.log(`Selected date: ${selectedDate}`);
//         // Additional processing of the selected date can be done here
//       }
//     });

//     this.nodes.wrapper.addEventListener('click', (event) => {
//       if ((event.target as HTMLElement).tagName === 'BUTTON') {
//         console.log('Submit button clicked');
//         // Handle form submission or any additional logic here
//       }
//     });
    
//   }
// }
