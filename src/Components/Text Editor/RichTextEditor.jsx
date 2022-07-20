import React from 'react'
import JoditEditor from 'jodit-react'
import { useRef } from 'react'
export default function RichTextEditor({setValue,configuration}) {
  const editor = useRef(null)
  return (
    <div className='bg-black text-white'>
      <JoditEditor ref={editor} onChange={content=>setValue(content)} config = {configuration}/>
    </div>
  )
}
