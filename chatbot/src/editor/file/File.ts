import Paragraph from '@editorjs/paragraph';

export default class File extends Paragraph {
  static get toolbox() {
    return {
      title: 'File Upload',
      icon: '<div class="bg-[#CC5500] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/file-upload.svg" /></div>',
    };
  }

  render(): Element {
	const el =  document.createElement('div');
	el.innerHTML = `<div class="flex items-center"><div class="bg-[#CC5500] icon-class"><img style="width: 13px;" src="https://dash.serviceform.com/images/icons/flow/file-upload.svg" /></div>
    <div class="ce-block" data-id="iEhGN1bmVi"><div class="ce-block__content"><div class="ce-paragraph cdx-block" contenteditable="true" data-placeholder-active="" data-empty="false">Please upload a file</div></div></div> 
	</div>`
 
	return el;
  }

  // Additional methods can be added here to handle file uploads
  // or other file-specific operations if needed.
}