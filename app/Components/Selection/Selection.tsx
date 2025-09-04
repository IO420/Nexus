'use client';

import { useState } from "react";
import "./Selection.css";

function Selection() {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    {
      name: "WINDOWS",
      img: "https://images.icon-icons.com/2235/PNG/512/windows_os_logo_icon_134678.png",
    },
    {
      name: "MACINTOSH",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      name: "PROFESORES",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
  ];

  const handleSelect = (optionName: string) => {
    setSelected(selected === optionName ? null : optionName);
  };

  return (
    <section className="selection">
      {options.map((option, index) => (
        <div
          key={index}
          className="selectionItem"
          onClick={() => handleSelect(option.name)}
        >
          <button
            className={`buttonSelection ${selected === option.name ? "active" : ""}`}
          >
            <img
              src={option.img}
              alt={option.name.toLowerCase()}
              height={30}
              width={30}
            />
          </button>
          <span className="buttonLabel">{option.name}</span>
        </div>
      ))}
    </section>
  );
}

export default Selection;
