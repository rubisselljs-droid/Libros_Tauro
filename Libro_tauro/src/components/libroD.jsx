import { useEffect, useRef, useState } from "react";
import ColorThief from "color-thief-browser";

export default function LibroD({ imagen, titulo, autor }) {
  const imgRef = useRef(null);
  const [bgColor, setBgColor] = useState("rgb(20,20,20)");

  useEffect(() => {
    const img = imgRef.current;
    const colorThief = new ColorThief();

    if (img.complete) {
      getColor();
    } else {
      img.addEventListener("load", getColor);
    }

    function getColor() {
      try {
        const color = colorThief.getColor(img);
        setBgColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
      } catch (e) {
        console.log("Error obteniendo color", e);
      }
    }
  }, []);

  return (
    <div
      className="w-65 p-5 rounded-2xl transition-all duration-300"
      style={{
        background: `linear-gradient(180deg, ${bgColor} 0%, #0f0f0f 100%)`,
      }}
    >
      {/* Imagen */}
      <div className="rounded-xl overflow-hidden shadow-2xl transform transition duration-300 hover:scale-105">
        <img
          ref={imgRef}
          src={imagen}
          alt={titulo}
          crossOrigin="anonymous"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Texto */}
      <div className="mt-4 text-white">
        <h2 className="text-sm font-semibold leading-tight">
          {titulo}
        </h2>
        <p className="text-xs text-white/70 mt-1">
          {autor}
        </p>
      </div>
    </div>
  );
}