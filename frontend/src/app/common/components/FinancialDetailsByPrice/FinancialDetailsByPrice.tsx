import React from "react";
import { FinancialDetailsDataByPrice } from "../../hooks/FinancialDetailsByPrice";
import { formattedPrice } from "@/app/common/hooks/formatters";
export default function FinancialDetailsByPrice({
  carPrice,
}: {
  carPrice: number;
}) {
  const details = FinancialDetailsDataByPrice(carPrice);

  return (
    <div className={`bg-primary/10 mb-5 rounded-xl p-3 px-5`}>
      <h3 className="text-2xl mb-4">Financing</h3>
      <dl className="-my-3 divide-y divide-primary text-sm">
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Sales Price</dt>
          <dd className="text-gray-700 sm:col-span-2 capitalize">
            {formattedPrice(details.carPrice.toFixed(2))}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Total Fees & Taxes</dt>
          <dd className="text-gray-700 sm:col-span-2 capitalize">
            {formattedPrice(details.totalFeesAndTaxes.toFixed(2))}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Cash Price</dt>
          <dd className="text-gray-700 sm:col-span-2 capitalize">
            {formattedPrice(details.cashPrice.toFixed(2))}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Net Trade</dt>
          <dd className="text-gray-700 sm:col-span-2 capitalize">
            ${details.netTrade.toFixed(2)}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Rebate</dt>
          <dd className="text-gray-700 sm:col-span-2 capitalize">
            ${details.rebate.toFixed(2)}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Down Payment</dt>
          <dd className="text-gray-700 sm:col-span-2 capitalize">
            ${details.downPayment.toFixed(2)}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Loan Balance</dt>
          <dd className="text-gray-700 sm:col-span-2 capitalize">
            {formattedPrice(details.loanBalance.toFixed(2))}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Term</dt>
          <dd className="text-gray-700 sm:col-span-2 capitalize">
            {details.term} months
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">APR</dt>
          <dd className="text-gray-700 sm:col-span-2 capitalize">
            {details.apr}%
          </dd>
        </div>
      </dl>
      <p className="text-black/50 mt-3 text-[10px]">
          *The prices displayed do not include government fees and taxes, any
          finance charges, dealer document processing charges, electronic filing
          charges, or emissions testing charges. The fees, taxes, and product
          amounts provided are close estimates, and the resulting Loan Amount,
          Monthly Payment, and APR are also estimates. All numbers will be
          finalized upon making your deposit or after contacting an agent. If
          you have any questions, please call us at [Dealer Phone Number] or
          visit our dealership.
      </p>
    </div>
  );
}
