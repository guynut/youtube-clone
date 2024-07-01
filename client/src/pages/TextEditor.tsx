import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import NestedList from '@editorjs/nested-list';
import InlineCode from '@editorjs/inline-code';
import LinkTool from '@editorjs/link';
import Paragraph from '@editorjs/paragraph';
import ImageTool from '@editorjs/image';
import Title from "title-editorjs";
import Delimiter from '@editorjs/delimiter';

import { useEffect, useRef, useState } from 'react';

export default function TextEditor(){
  const [isMounted, setIsMounted] = useState(false)
  const ref = useRef<EditorJS>()

  const initializeEditor = () =>{
    if(!ref.current){
      const editor = new EditorJS({
        holder: 'editorArea',
        placeholder: "test editorJS!!",
        tools: {
          title: Title,
          header: {
            class: Header,
            shortcut: 'CMD+SHIFT+H',
            config: {
              placeholder: 'Enter a header',
            }
          },
          delimiter: Delimiter,
          Marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+M',
          },
          paragraph: {
            class: Paragraph,
            inlineToolbar: true,
          },
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
              }
            }
          },
          quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
            config: {
              quotePlaceholder: 'Enter a quote',
              captionPlaceholder: 'Quote\'s author',
            },
          },
          list: {
            class: NestedList,
            inlineToolbar: true,
            config: {
              defaultStyle: 'unordered'
            },
          },
          inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+M',
          },
          linkTool: {
            class: LinkTool,
            inlineToolbar: true,
            config: {
              endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching,
            }
          }
        }
      })
      ref.current = editor
    }
  }

  useEffect(()=>{
    if (typeof window != "undefined"){
      setIsMounted(true)
    }
  },[])

  useEffect(()=>{
    const init = async () =>{
      await initializeEditor()
    }
    if (isMounted){
      init()

      return () => {
        if(ref.current){
          ref.current.destroy()
        }
      }
    }
  }, [isMounted])

  const save = () => {
    if (ref.current){
      ref.current.save()
      .then((outputData) => {
        console.log("Article data: ",outputData)
        alert(JSON.stringify(outputData))
      })
    }
  }

  return(
    <div className='w-screen h-screen flex justify-center items-center flex-col bg-white overflow-scroll'>
      <p className='text-neutral-950'>Try Text EditorJS</p>
      <div className='w-[50%] min-h-[50%] h-auto p-3 rounded-lg border border-neutral-600'>
        <div id="editorArea" className='h-full w-full text-black border-none' />
      </div>
      <button className='w-fit h-fit p-2 bg-blue-500 text-white text-xl m-1 rounded-md' onClick={save}> Save </button>
    </div>
  )
}