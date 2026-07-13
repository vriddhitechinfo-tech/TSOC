"use client";

import { useState, useMemo } from "react";

export function useFeeCalculator(
  initialReturns = 120,
  initialAvgCharge = 450,
  initialSplitPercent = 30,
  flatSoftwareCost = 1499
) {
  const [returns, setReturns] = useState(initialReturns);
  const [avgCharge, setAvgCharge] = useState(initialAvgCharge);
  const [splitPercent, setSplitPercent] = useState(initialSplitPercent);

  const calculations = useMemo(() => {
    const totalRevenue = returns * avgCharge;
    const splitAmount = totalRevenue * (splitPercent / 100);
    const revenueKeptUnderSplit = totalRevenue - splitAmount;
    const revenueKeptUnderEfin = totalRevenue - flatSoftwareCost;
    const annualSavings = Math.max(0, revenueKeptUnderEfin - revenueKeptUnderSplit);

    return {
      totalRevenue,
      splitAmount,
      revenueKeptUnderSplit,
      revenueKeptUnderEfin,
      annualSavings,
      flatSoftwareCost,
    };
  }, [returns, avgCharge, splitPercent, flatSoftwareCost]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return {
    returns,
    setReturns,
    avgCharge,
    setAvgCharge,
    splitPercent,
    setSplitPercent,
    calculations,
    formatCurrency,
  };
}
