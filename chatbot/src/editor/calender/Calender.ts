import Paragraph from '@editorjs/paragraph';

export default class Calendar extends Paragraph {
  static get toolbox() {
    return {
      title: 'Calender',
      icon: '<div class="bg-[purple] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/calendar.svg" /></div>',
    };
  }

  render(): Element {
	const el =  document.createElement('div');
	el.innerHTML = `<div class="flex items-center"><div class="bg-[purple] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/calendar.svg" /></div>
    <div class="ce-block" data-id="iEhGN1bmVi"><div class="ce-block__content"><div class="ce-paragraph cdx-block" contenteditable="true" data-placeholder-active="" data-empty="false">Choose a date.</div></div></div> 
	</div>`
 
	return el;
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