import Paragraph from '@editorjs/paragraph';

export default class SiteSearch extends Paragraph{
	constructor({ data, config, api, readOnly }: NestedListParams) {
	  super({data, config, api, readOnly});
	  this.render();
	}
   
	static get toolbox() {
		return {
		  title: 'SiteSearch',
		  icon: '<div class="bg-[#000000] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/search.svg" /><div>'
		};
	   }

	   render(): Element {
		const el =  document.createElement('div');
		el.innerHTML = `<div class="flex items-center"><div class="bg-black icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/search.svg" /></div>
	    <div class="ce-block" data-id="iEhGN1bmVi"><div class="ce-block__content"><div class="ce-paragraph cdx-block" contenteditable="true" data-placeholder-active="" data-empty="false">Search anything from this website.</div></div></div> 
		</div>`
	 
		return el;
	   }
   
   
	// Other methods...
   }