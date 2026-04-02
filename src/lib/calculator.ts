export function calculateLeaseInstallment(
  value: number,
  contributionPercent: number,
  buyoutPercent: number,
  months: number,
  interestRateAnnual: number = 0.085 // 8.5% szacunkowe RRSO/Oprocentowanie
): number {
  const r = interestRateAnnual / 12
  const n = months
  const capital = value - (value * contributionPercent) / 100
  const buyoutAmount = (value * buyoutPercent) / 100

  // Jeśli oprocentowanie wynosi 0 (np. promocja), to rata to po prostu kapitał minus wykup przez ilość miesięcy
  if (r === 0) {
    return Math.max(0, (capital - buyoutAmount) / n)
  }

  // Wzór na rentę kapitałową (ratę leasingową) uwzględniającą wykup końcowy
  // Wartość obecna = Rata * współczynnik_renty + Wykup * dyskonto
  // capital = R * [ (1 - (1+r)^-n) / r ] + buyoutAmount * (1+r)^-n
  const discountFactor = Math.pow(1 + r, -n)
  const presentValueOfBuyout = buyoutAmount * discountFactor
  
  const annuityFactor = (1 - discountFactor) / r
  
  const rate = (capital - presentValueOfBuyout) / annuityFactor

  return Math.max(0, rate)
}

// Funkcja formatująca walutę do ładnego wyświetlania (np. 1 450,00)
export function formatCurrency(amount: number): string {
  return amount.toLocaleString('pl-PL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
