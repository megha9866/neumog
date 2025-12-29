import { ImageResponse } from "next/og";

// Route segment config
// Route segment config
// export const runtime = "edge"; // Disabled to fix Netlify build error with static generation

// Image metadata
export const size = {
    width: 180,
    height: 180,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "white", // Apple icons usually prefer a background, but transparent works too. White is safer for Home Screen.
                    borderRadius: "18%", // Optional visual cue, but iOS crops it anyway.
                }}
            >
                <svg
                    width="80%" // Slightly padded
                    height="80%"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#7c3aed" />
                            <stop offset="100%" stopColor="#ea580c" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M10 8C10 6.89543 10.8954 6 12 6H14.5C15.3284 6 16.1217 6.32843 16.7071 6.91421L27.0858 17.2929C27.4608 17.6679 27.6716 18.1765 27.6716 18.7071V6C27.6716 4.89543 28.567 4 29.6716 4H31.6716C32.7761 4 33.6716 4.89543 33.6716 6V34C33.6716 35.1046 32.7761 36 31.6716 36H29.1716C28.3431 36 27.5499 35.6716 26.9645 35.0858L16.5858 24.7071C16.2107 24.3321 16 23.8235 16 23.2929V34C16 35.1046 15.1046 36 14 36H12C10.8954 36 10 35.1046 10 34V8Z"
                        fill="url(#logo-gradient)"
                    />
                </svg>
            </div>
        ),
        {
            ...size,
        }
    );
}
