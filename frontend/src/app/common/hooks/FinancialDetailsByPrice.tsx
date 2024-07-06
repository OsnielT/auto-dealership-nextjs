export const FinancialDetailsDataByPrice = (carPrice:number) => {
    const totalFeesAndTaxes = carPrice * 0.08; // assuming 8% fees and taxes
    const cashPrice = carPrice + totalFeesAndTaxes;
    const netTrade = 500; // fixed value
    const rebate = 0; // fixed value
    const downPayment = 5000; // fixed value
    const loanBalance = cashPrice - downPayment - netTrade;
    const term = 72; // fixed value
    const apr = 23.7; // fixed APR
  
    return {
      carPrice,
      totalFeesAndTaxes,
      cashPrice,
      netTrade,
      rebate,
      downPayment,
      loanBalance,
      term,
      apr,
    };
  };
  