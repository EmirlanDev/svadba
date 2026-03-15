"use client";

import { useEffect } from "react";

export default function Map2GIS() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.2gis.com/js/DGWidgetLoader.js";
    script.async = true;

    script.onload = () => {
      new window.DGWidgetLoader({
        width: "100%",
        height: 500,
        borderColor: "#a3a3a3",
        pos: {
          lat: 42.8189695093781,
          lon: 74.64470744132997,
          zoom: 16,
        },
        opt: {
          city: "bishkek",
        },
        org: [{ id: "70000001102464918" }],
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full">
      <a
        href="https://2gis.kg/bishkek"
        target="_blank"
        className="text-black font-semibold"
      >
        Посмотреть на карте Бишкека
      </a>
    </div>
  );
}
