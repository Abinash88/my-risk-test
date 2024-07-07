/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				"custom-1": "0 4px 4px rgba(0, 0, 0, 0.1)",
				"custom-2": "0 -4px 4px rgba(0, 0, 0, 0.1)",
				"custom-all-sides":
					"0 4px 4px rgba(0, 0, 0, 0.05), 0 -4px 4px rgba(0, 0, 0, 0.05), 4px 0 4px rgba(0, 0, 0, 0.05), -4px 0 4px rgba(0, 0, 0, 0.05)",
			},
		},
		keyframes: {
			wiggle: {
				"0%, 100%": { transform: "rotate(-3deg)" },
				"50%": { transform: "rotate(3deg)" },
			},
		},
		animation: {
			wiggle: "wiggle 1s ease-in-out infinite",
		},
	},
	plugins: [],
};
