import axios from "axios";
import { useEffect, useState } from "react";

export default function selectArea() {
  const [area, setArea] = useState([]);

  useEffect(() => {
    const fetchArea = async () => {
      setArea(response.data);
    };

    fetchArea();
  });
  return (
    <>
      <label className="label">Seleccione el área</label>
      <select>
        {area.map((area) => (
          <option>{area}</option>
        ))}
        <option value="0">windows</option>
        <option value="1">ADOBE CREATIVE SUITE</option>
        <option value="2">mmmmm</option>
        <option value="3">mmmmm</option>
        <option value="4">mmmmm</option>
        <option value="5">mmmmm</option>
      </select>
    </>
  );
}
