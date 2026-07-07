import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: "#0f0a06",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "25%",
          border: "1px solid rgba(253, 168, 93, 0.25)",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer loop background paths */}
          <path
            d="M 60 15 C 75 15, 85 25, 85 40 C 85 55, 75 60, 60 60 C 45 60, 35 55, 35 40 C 35 25, 45 15, 60 15 Z"
            stroke="#fda85d"
            strokeWidth="8"
          />
          <path
            d="M 60 105 C 75 105, 85 95, 85 80 C 85 65, 75 60, 60 60 C 45 60, 35 65, 35 80 C 35 95, 45 105, 60 105 Z"
            stroke="#fda85d"
            strokeWidth="8"
          />
          <path
            d="M 15 60 C 15 75, 25 85, 40 85 C 55 85, 60 75, 60 60 C 60 45, 55 35, 40 35 C 25 35, 15 45, 15 60 Z"
            stroke="#fda85d"
            strokeWidth="8"
          />
          <path
            d="M 105 60 C 105 75, 95 85, 80 85 C 65 85, 60 75, 60 60 C 60 45, 65 35, 80 35 C 95 35, 105 45, 105 60 Z"
            stroke="#fda85d"
            strokeWidth="8"
          />
          {/* Inner core */}
          <rect
            x="48"
            y="48"
            width="24"
            height="24"
            rx="2"
            transform="rotate(45 60 60)"
            stroke="#fda85d"
            strokeWidth="6"
            fill="#0f0a06"
          />
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
