import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    console.log("mouse event")
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);

    return () => {                                    //unmounting code is returned from useEffect ,cleanup done to stop memory leakage
        console.log('component unmounting code')
        window.removeEventListener('mousemove',logMousePosition)
    }

}, []);       //empty square so nothing is rerendered

  return (
    <div>
      Hook X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
