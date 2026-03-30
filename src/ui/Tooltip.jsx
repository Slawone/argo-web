"use client";

import { useState } from "react";

export const Tooltip = ({children, text}) => {
  const [show, setShow] = useState(false);

   return (
     <div
       className="relative inline-block"
       onMouseEnter={() => setShow(true)}
       onMouseLeave={() => setShow(false)}
     >
       {children}
       {show && <div className="absolute top-full left-1/2">{text}</div>}
     </div>
   );
};
