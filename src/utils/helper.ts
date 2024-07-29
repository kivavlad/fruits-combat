export const formatScore = (num: number) => {
  const numStr = Math.abs(num).toString();
  const digits = numStr.split('').reverse();
  let result = '';
  
  for (let i = 0; i < digits.length; i++) {
    if (i > 0 && i % 3 === 0) {
      result = '.' + result;
    }
    result = digits[i] + result;
  }
  
  return result;
}

// Функция для вычисления процентов
export const calculatePercentage = (current: number, max: number): string => {
  if (max <= 0) return '0%';
  const percentage = Math.min((current / max) * 100, 100);
  return `${percentage.toFixed(0)}%`;
}