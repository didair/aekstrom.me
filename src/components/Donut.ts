import { Box, signal } from "moonly";
import { Pre } from "../elements/Pre";

const mousePositionA = signal(0);
const mousePositionB = signal(0);

const range = (start: number, end: number, value: number) => {
	if (value < 0 || value > 1) {
		throw new Error("Value must be between 0 and 1");
	}

	const mappedValue = start + (end - start) * value;
	return mappedValue;
};

const render = () => {
	const pre = document.getElementById('donut-viewport');
	let A = 0, B = 0;
	const width = 60, height = 30; // Adjusted width and height
	const R1 = 5, R2 = 3.4, K2 = 5, K1 = width * K2 * 3 / (8 * (R1 + R2));

	const renderFrame = () => {
		const z = new Array(width * height).fill(0);
		const b = new Array(width * height).fill(' ');

		for (let j = 0; j < 6.28; j += 0.07) {
			for (let i = 0; i < 6.28; i += 0.02) {
				const c = Math.sin(i),
					d = Math.cos(j),
					e = Math.sin(A),
					f = Math.sin(j),
					g = Math.cos(A),
					h = d + R2,
					D = 1 / (c * h * e + f * g + K2),
					l = Math.cos(i),
					m = Math.cos(B),
					n = Math.sin(B),
					t = c * h * g - f * e;

				const x = Math.floor(width / 2 + K1 * D * (l * h * m - t * n)),
					y = Math.floor(height / 2 + K1 * D * (l * h * n + t * m)),
					o = x + width * y,
					N = Math.floor(8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));

				if (height > y && y > 0 && width > x && x > 0 && D > z[o]) {
					z[o] = D;
					b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
				}
			}
		
		}

		let output = '';
		for (let k = 0; k < height; k++) {
			output += b.slice(k * width, (k + 1) * width).join('') + '\n';
		}
		pre.textContent = output;
	};

	const update = () => {
		A = mousePositionA.value;
		B = mousePositionB.value;

		renderFrame();
	};

	update();
	setInterval(update, 50);
};

export const Donut = () => {
	return [
		Box({
			class: 'donut',
			onMount: render,
			children: Pre({
				class: 'w-full h-full text-xs',
				id: 'donut-viewport',
			}),
			globalEvents: {
				mousemove: (event: MouseEvent) => {
					mousePositionA.value = range(1, -1, event.clientX / document.body.clientWidth);
					mousePositionB.value = range(1, -1, event.clientY / document.body.clientWidth);
				},
			}
		}),
	];
};
