// @ts-nocheck

import { Box, signal } from "moonly";
import { Pre } from "../elements/Pre";

type VertexPoint = [number, number, number];

const mousePositionX = signal(35);
const mousePositionY = signal(-35);

const getViewportWidth = () => {
	// 10 width is about 70px
	let screenMultiplier = document.body.clientWidth > 700 ? 70 : 50;
	let width = Math.round(document.body.clientWidth / document.body.clientHeight) * 10 + screenMultiplier;
	if (width < 25) {
		width = 25;
	}
	while (width % 2) {
		width -= 1;
	}

	return width;
};

const degreesToRadians = (degrees: number) => {
	return degrees * (Math.PI / 180);
}

const range = (start: number, end: number, value: number) => {
	if (value < 0 || value > 1) {
		throw new Error("Value must be between 0 and 1");
	}

	const mappedValue = start + (end - start) * value;
	return mappedValue;
};

// Function to rotate a point around the X-axis
function rotateX(point: VertexPoint, angle: number): VertexPoint {
	const [x, y, z] = point;
	const cos = Math.cos(angle);
	const sin = Math.sin(angle);
	return [
		x,
		y * cos - z * sin,
		y * sin + z * cos
	];
}

// Function to rotate a point around the Y-axis
function rotateY(point: VertexPoint, angle: number): VertexPoint {
	const [x, y, z] = point;
	const cos = Math.cos(angle);
	const sin = Math.sin(angle);
	return [
		x * cos + z * sin,
		y,
		-x * sin + z * cos
	];
}

// Function to rotate a point around the Z-axis
function rotateZ(point: VertexPoint, angle: number): VertexPoint {
	const [x, y, z] = point;
	const cos = Math.cos(angle);
	const sin = Math.sin(angle);
	return [
		x * cos - y * sin,
		x * sin + y * cos,
		z
	];
}

function drawLine(grid, width, x1, y1, x2, y2, char) {
	const dx = Math.abs(x2 - x1);
	const dy = Math.abs(y2 - y1);
	const sx = x1 < x2 ? 1 : -1;
	const sy = y1 < y2 ? 1 : -1;
	let err = dx - dy;

	let x = x1;
	let y = y1;

	while (true) {
		if (x >= 0 && x < width && y >= 0 && y < grid.length / width) {
			grid[y * width + x] = char; // Draw the pixel
		}

		if (x === x2 && y === y2) break;
		const e2 = err * 2;
		if (e2 > -dy) {
			err -= dy;
			x += sx;
		}
		if (e2 < dx) {
			err += dx;
			y += sy;
		}
	}
}

const render = () => {
	const pre = document.getElementById('cube-viewport');
	let width = getViewportWidth();
	let height = width / 2;
	const fov = 1.5;
	const viewerDistance = 3.5;

	window.addEventListener('resize', () => {
		width = getViewportWidth();
		height = width / 2;
	});

	// box rotation
	const angles = {
		x: 0,
		y: 0,
		z: 0,
	};

	const object = [
		// x, y, z
		[1, 1, 1], [1, 1, -1], [1, -1, 1], [1, -1, -1],
		[-1, 1, 1], [-1, 1, -1], [-1, -1, 1], [-1, -1, -1],
	];

	const edges = [
		[0, 1], [1, 3], [3, 2], [2, 0], // Top face edges
		[4, 5], [5, 7], [7, 6], [6, 4], // Bottom face edges
		[0, 4], [1, 5], [2, 6], [3, 7]  // Vertical edges connecting top and bottom faces
	];

	const asciiChars = [' ', '.', '-', '~', ':', ';', '=', '!', '*', '#', '$', '@'];

	function projectTo2D(x: number, y: number, z: number) {
		const scale = fov / (viewerDistance + z);
		const screenX = Math.round((x * scale + 1) * (width - 1) / 2);
		const screenY = Math.round((y * scale + 1) * (height - 1) / 2);
		return [screenX, screenY, scale];
	}

	const renderFrame = () => {
		const z = new Array(width * height).fill(0);
		const b = new Array(width * height).fill(' ');

		// Project vertices
		const projectedVertices = object.map((point: VertexPoint) => {
			const [x, y, z] = rotateZ(rotateY(rotateX(point, degreesToRadians(angles.x)), degreesToRadians(angles.y)), degreesToRadians(angles.z));
			return projectTo2D(x, y, z);
		});

		// Draw edges
		edges.forEach(([startIdx, endIdx]) => {
			const [x1, y1, scale1] = projectedVertices[startIdx];
			const [x2, y2, scale2] = projectedVertices[endIdx];

			// Calculate average scale for thickness
			const avgScale = (scale1 + scale2) / 2;
			const thickness = Math.max(1, Math.round(avgScale * 10)); // Adjust thickness based on scale
			const asciiChar = asciiChars[thickness];

			drawLine(b, width, x1, y1, x2, y2, asciiChar);
		});

		// Draw vertices
		projectedVertices.forEach(([x, y, scale]) => {
			if (x >= 0 && x < width && y >= 0 && y < height) {
				const depth = Math.round((scale - 0.5) * 20);
				const asciiIndex = Math.min(Math.max(depth, 0), asciiChars.length - 1);
				const asciiChar = asciiChars[asciiIndex];
				const index = y * width + x;
				b[index] = asciiChar;
			}
		});

		let output = '';
		for (let k = 0; k < height; k++) {
			output += b.slice(k * width, (k + 1) * width).join('') + '\n';
		}
		pre.textContent = output;
	};

	const update = () => {
		angles.y = mousePositionY.value;
		angles.x = mousePositionX.value;
		renderFrame();
	};

	setInterval(update, 50);

	renderFrame();
};

export const Cube = () => {
	return [
		Box({
			class: 'cube',
			onMount: render,
			children: Pre({
				class: 'text-xs',
				id: 'cube-viewport',
			}),
			globalEvents: {
				mousemove: (event: MouseEvent) => {
					mousePositionY.value = range(360, 0, event.clientX / document.body.clientWidth);
					mousePositionX.value = range(360, 0, event.clientY / document.body.clientHeight);
				},
				touchmove: (event: TouchEvent) => {
					if (event.touches.length > 1) {
						event.preventDefault();
						event.stopPropagation();
						const { clientX, clientY } = event.touches[0];
						mousePositionY.value = range(360, 0, clientX / document.body.clientWidth);
						mousePositionX.value = range(360, 0, clientY / document.body.clientHeight);
					}
				},
			}
		}),
	];
};
