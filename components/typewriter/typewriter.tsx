"use client"
import { useEffect, useRef, useState, useMemo } from "react";
import './index.css'

const ERASE_SPEED = 75;
const WRITE_SPEED = 300;

type Props = {
  text: string | Array<string>
};

export const Typewriter = ({
  text
}:Props) => {
  const textIndex = useRef(0);
  const [isForward, setIsForward] = useState<boolean>();
  const [textToRender, setTextToRender] = useState("");
  const [displaySpeed, setDisplaySpeed] = useState(WRITE_SPEED)

  let textArray = useMemo(()=>{
    if(typeof text === 'string') {
      return new Array(text.split(''));
    }
    if(Array.isArray(text)) return text.map(e=>e.split(''));
    return [];
  },[text]);

  let displayType = textArray[textIndex.current];
  let displayTypeString = textArray[textIndex.current].join('')


  useEffect(()=>{

    const intervalId = setInterval(()=>{

      //when erase to last char, move to the next type
      if(textToRender === displayType[0] && !isForward) {
        if (textIndex.current === text.length - 1) {
          textIndex.current = 0;
        } else {
          textIndex.current = textIndex.current + 1;
        }
      }

      //when no char display, start forward
      if(textToRender === '') {
        setTextToRender(displayType[0])
        setIsForward(true)
        setDisplaySpeed(WRITE_SPEED)
        return
      }
      
      //when displayed all char, start erase
      if(textToRender === displayTypeString) {
        setIsForward(false)
        setDisplaySpeed(ERASE_SPEED)
      }
      
      //when char is in forward state
      if(isForward) {
        setTextToRender(pre => pre + displayType.slice(pre.length, pre.length+1))
        return
      }

      //when char is in erase state
      if(!isForward) {
        setTextToRender(pre => pre.slice(0,-1))
        return
      }

    }, displaySpeed)

    return () => {
      clearTimeout(intervalId);
    };
    
  },[textToRender, text, isForward, displayType, displayTypeString, displaySpeed])


  return (
    <span>
      {textToRender}
      <span className="animate-blink border-r border-r-slate-200"></span>
    </span>
  )
}

export default Typewriter