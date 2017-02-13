export const range = (min, max, step = 1) => (
	Array.from({length: max - min + 1}, (value, key) => min + key * step).filter(i => i <= max)
);
