'use client';
import { Console } from "console";
import Image from "next/image";
import React from 'react';  

import { useState } from 'react';

interface YesnoProps {
  onYes : () => void;
  onNo : () => void;
}
function Yesno({onYes, onNo} : YesnoProps) {
    return (
      <div>
        <button onClick={onYes} className="bg-green-550 yesbutton">
            Got it
        </button>

        <button onClick={onNo} className="bg-red-550 nobutton">
            Don't got it
        </button>
      </div>
    )
}


export default function Home() {
  const [wrong, setWrong] = useState(0);
  const [correct, setCorrect] = useState(0);


  return (
    // parse chapters and topics on left or top bar, make clickable
      // render quiz selector
      // on quiz selector, get topics in a list
      // render each topic one at a time, storing in the failed list if no is clicked
      // keep track of number right and wrong
    <div>
      <h1>StudyBudy</h1>


      
      <Yesno
        onYes={() => console.log("yes")}
        onNo={() => console.log("no")}
      />
    </div>

    // at end, show ones gotten wrong and percentage correct

    // restart button

  );
}
