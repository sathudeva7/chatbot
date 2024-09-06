import Paragraph from '@editorjs/paragraph';

export default class AiComponent extends Paragraph {
  static get toolbox() {
    return {
      title: 'AI',
      icon: '<div class="bg-[purple] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/calendar.svg" /></div>',
    };
  }

  render(): Element {
	const el =  document.createElement('div');
	el.innerHTML = `<div class="flex items-center"><div class="bg-[#E97451] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/aiQuestion.svg" /></div>
    <div class="ce-block" data-id="iEhGN1bmVi"><div class="ce-block__content"><div class="ce-paragraph cdx-block" contenteditable="true" data-placeholder-active="" data-empty="false">Asking AI for information</div></div></div> 
	</div>`
 
	return el;
  }

}
