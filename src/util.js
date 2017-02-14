export const range = (min, max, step = 1) => (
	Array.from({length: max - min + 1}, (value, key) => min + key * step).filter(i => i <= max)
);

export const round = (val, digit) => Math.round(val * Math.pow(10, digit)) / Math.pow(10, digit); 
