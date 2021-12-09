
export const formatCurrancy = (num) => {
  return `$${num.toFixed(2).toLocaleString()}`
}