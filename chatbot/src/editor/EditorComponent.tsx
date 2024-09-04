import { useContext, useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import ImageTool from '@editorjs/image';
import { EditorContext } from '../context/EditorContext';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import InlineImage from 'editorjs-inline-image';
import NestedList from '@editorjs/nested-list';
import SelectOne from './select-one/SelectOne';
import MultiSelect from './multi-select/MultiSelect';
import Form from './form/Form';
import Statement from './statement/Statement';

class SimpleImage {
	static get toolbox() {
	  return {
	    title: 'Image',
	    icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'
	  };
	}
   
	render(){
		const el = document.createElement('div');
		el.innerHTML = `<img src="https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80" /><input />`
	  return el;
	}
   
	save(blockContent){
	  return {
	    url: blockContent.value
	  }
	}
   }

const EditorComponent = ({onInitialize}) => {
  const ejInstance = useRef();
  const { setContent } = useContext(EditorContext);

  const initEditor = () => {
    const editor = new EditorJS({
       holder: 'editorjs',
       tools: {
        header: {
          class: Header,
          config: {
            levels: [2, 3, 4],
            defaultLevel: 3,
          },
        },
        statement: {
          class: Statement,
        },
        form: {
          class: Form,
          inlineToolbar: true,
        },
        select: {
          class: SelectOne,
          inlineToolbar: true,
          config: {
            defaultStyle: 'ordered'
          },
        },
        multiSelect: {
          class: MultiSelect,
          inlineToolbar: true,
          config: {
            defaultStyle: 'ordered'
          },

        },

        calender: {
          class: Statement,
        },
        
        image: {
          class: SimpleImage,
          inlineToolbar: true,
          config: {
            embed: {
              display: true,
            },
            unsplash: {
              appName: 'your_app_name',
              apiUrl: 'gypPGTcnDQqvC_xwygB-Ozz2slLpOetzLDWNSLcPISM',
              maxResults: 30,
            }
          }
        }
      },
       onReady: () => {
         ejInstance.current = editor;
         onInitialize(ejInstance.current);
       },
       autofocus: true,
       data: DEFAULT_INITIAL_DATA,
       onChange: async () => {
         let content = await editor.saver.save();
         setContent(content);
         console.log(content);
       }
     });
   };

  const DEFAULT_INITIAL_DATA =  {
    "time": new Date().getTime(),
    "blocks": [
      {
        "type": "header",
        "data": {
          "text": "Hi!",
          "level": 1
        }
      },
      
    ]
}

useEffect(() => {
  if (ejInstance.current === null) {
    initEditor();
  }

  // if ( ejInstance.current) {
  //   onInitialize(ejInstance.current);
  // }

  

  return () => {
    ejInstance?.current?.destroy();
    ejInstance.current = null;
  };
}, [onInitialize]);

const saveButton = document.getElementById('save-button');
const output = document.getElementById('output');

if(saveButton) {
saveButton.addEventListener('click', () => {
  editor.save().then( savedData => {
    output.innerHTML = JSON.stringify(savedData, null, 4);
  })
})
}

  return <div id="editorjs" className="editor-container"></div>;
};

export default EditorComponent;