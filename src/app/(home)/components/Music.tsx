import MusicWithSound from "@/components/MusicWithSount";
import React from "react";

export default function Music() {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-around mt-[30px]">
          <div>
            <div className="animate-bounce">
              <span className="flex justify-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="5.10339"
                    width="34.0619"
                    height="7"
                    rx="3.5"
                    transform="rotate(46.8075 5.10339 0)"
                    fill="#000"
                  />
                  <rect
                    width="34.0619"
                    height="7"
                    rx="3.5"
                    transform="matrix(-0.684452 0.729058 0.729058 0.684452 42.3138 0)"
                    fill="#000"
                  />
                  <rect
                    x="5.10339"
                    y="18"
                    width="34.0619"
                    height="7"
                    rx="3.5"
                    transform="rotate(46.8075 5.10339 18)"
                    fill="#000"
                  />
                  <rect
                    width="34.0619"
                    height="7"
                    rx="3.5"
                    transform="matrix(-0.684452 0.729058 0.729058 0.684452 42.3138 18)"
                    fill="#000"
                  />
                </svg>
              </span>
            </div>
            <h4 className="text-center mt-[10px]">
              Ылдый <br /> түшүңүз
            </h4>
          </div>
          <div>
            <MusicWithSound />
          </div>
        </div>
      </div>
    </section>
  );
}
