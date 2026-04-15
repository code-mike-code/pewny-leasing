export function calculateLeaseInstallment(
  value: number,
  contributionPercent: number,
  buyoutPercent: number,
  months: number,
  interestRateAnnual: number = 0.085 // 8.5% estimated APR
): number {
  const r = interestRateAnnual / 12
  const n = months
  const capital = value - (value * contributionPercent) / 100
  const buyoutAmount = (value * buyoutPercent) / 100

  // When interest rate is 0 (e.g. promotional offer), instalment is simply capital minus buyout divided by term
  if (r === 0) {
    return Math.max(0, (capital - buyoutAmount) / n)
  }

  // Capital annuity formula accounting for final buyout value:
  // Present value = Instalment * annuity_factor + Buyout * discount_factor
  // capital = R * [ (1 - (1+r)^-n) / r ] + buyoutAmount * (1+r)^-n
  const discountFactor = Math.pow(1 + r, -n)
  const presentValueOfBuyout = buyoutAmount * discountFactor

  const annuityFactor = (1 - discountFactor) / r

  const rate = (capital - presentValueOfBuyout) / annuityFactor

  return Math.max(0, rate)
}

// Formats a number as Polish-locale currency string (e.g. 1 450,00)
export function formatCurrency(amount: number): string {
  return amount.toLocaleString('pl-PL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
