import Paragraph from '@editorjs/paragraph';

export default class Statement extends Paragraph{
	constructor({ data, config, api, readOnly }: NestedListParams) {
	  super({data, config, api, readOnly});
	  this.render();
	}
   
	static get toolbox() {
		return {
		  title: 'Statement',
		  icon: '<div class="bg-[#2bc7a7] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/note.svg" /><div>'
		};
	   }
   
	// render(){
	   // 	const el = document.createElement('div');
	   // 	el.innerHTML = `<div class="bg-[#2bc7a7] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/task-square.svg" /><div>
	//   <div class="ce-paragraph cdx-block" contenteditable="true" data-placeholder-active="" data-empty="false">asdasdsad</div>`
	   //   return el;
	   // }

	   render(): Element {
		const el =  document.createElement('div');
		el.innerHTML = `<div class="flex items-center"><div class="bg-[#2bc7a7] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/note.svg" /></div>
	    <div class="ce-block" data-id="iEhGN1bmVi"><div class="ce-block__content"><div class="ce-paragraph cdx-block" contenteditable="true" data-placeholder-active="" data-empty="false">Hi</div></div></div> 
		</div>`
	 
		return el;
	   }
   
   
	// Other methods...
   }