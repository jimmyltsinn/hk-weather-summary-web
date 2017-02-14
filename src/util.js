export const range = (min, max, step = 1) => (
	Array.from({length: max - min + 1}, (value, key) => min + key * step).filter(i => i <= max)
);

export const round = (val, digit) => Math.round(val * Math.pow(10, digit)) / Math.pow(10, digit);

export const dateOfMonth = (month, year) => {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
        return 29;
      return 28;
  }
}; 
