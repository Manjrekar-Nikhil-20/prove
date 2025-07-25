import React from 'react';
import { IndianRupee } from 'lucide-react';
import { addOns } from '../data/addOnsData';

interface BookingSummaryProps {
  venue: any;
  formData?: any;
  selectedCakes?: Array<{
    name: string;
    type: 'egg' | 'eggless';
    weight: 'halfKg' | 'oneKg';
    price: number;
    quantity: number;
  }>;
  selectedAddOns?: string[];
}

const BookingSummary = ({ venue, formData, selectedCakes = [], selectedAddOns = [] }: BookingSummaryProps) => {
  const basePrice = venue.price;
  const decorationFee = formData?.decoration ? 400 : 0;
  
  const cakesTotal = selectedCakes.reduce((total, cake) => {
    return total + (cake.price * cake.quantity);
  }, 0);
  
  const addOnsTotal = selectedAddOns.reduce((total, addOnName) => {
    const addOn = addOns.find(a => a.name === addOnName);
    return total + (addOn ? addOn.price : 0);
  }, 0);
  
  const subtotal = basePrice + decorationFee + cakesTotal + addOnsTotal;
  const advanceAmount = 700;
  const balanceAmount = subtotal - advanceAmount;

  return (
    <div className="bg-gray-800 rounded-xl p-4 md:p-6 sticky top-6">
      <h2 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Booking Summary</h2>
      <div className="space-y-3 md:space-y-4">
        <div className="flex justify-between items-center py-2 border-b border-gray-700">
          <span className="text-sm md:text-base text-gray-300">Base Price</span>
          <span className="text-sm md:text-base text-white font-medium flex items-center">
            <IndianRupee className="h-4 w-4" />
            {basePrice}
          </span>
        </div>
        
        <div className="flex justify-between items-center py-2 border-b border-gray-700">
          <span className="text-sm md:text-base text-gray-300">Decoration</span>
          <span className="text-sm md:text-base text-white font-medium flex items-center">
            <IndianRupee className="h-4 w-4" />
            {decorationFee}
          </span>
        </div>
        
        {cakesTotal > 0 && (
          <div className="flex justify-between items-center py-2 border-b border-gray-700">
            <span className="text-sm md:text-base text-gray-300">Cakes</span>
            <span className="text-sm md:text-base text-white font-medium flex items-center">
              <IndianRupee className="h-4 w-4" />
              {cakesTotal}
            </span>
          </div>
        )}
        
        {addOnsTotal > 0 && (
          <div className="flex justify-between items-center py-2 border-b border-gray-700">
            <span className="text-sm md:text-base text-gray-300">Add-ons</span>
            <span className="text-sm md:text-base text-white font-medium flex items-center">
              <IndianRupee className="h-4 w-4" />
              {addOnsTotal}
            </span>
          </div>
        )}
        
        <div className="flex justify-between items-start py-2 border-b border-gray-700">
          <span className="text-sm md:text-base text-gray-300">Advance Amount Payable</span>
          <div className="text-right flex-shrink-0">
            <span className="text-sm md:text-base text-white font-medium flex items-center justify-end">
              <IndianRupee className="h-4 w-4" />
              {advanceAmount}
            </span>
            <p className="text-xs text-gray-400 mt-1">
              (Including ₹50/- convenience fee)
            </p>
          </div>
        </div>
        
        <div className="flex justify-between items-start py-2">
          <span className="text-sm md:text-base text-gray-300">Balance Amount</span>
          <div className="text-right flex-shrink-0 max-w-[60%] sm:max-w-[50%]">
            <span className="text-sm md:text-base text-white font-medium flex items-center justify-end">
              <IndianRupee className="h-4 w-4" />
              {balanceAmount}
            </span>
            <p className="text-xs text-gray-400 mt-1 leading-tight">
              (Final amount negotiable — to be paid at venue)
            </p>
            <p className="text-xs text-gray-400 mt-1 leading-tight">
              (Additional charges will be applied for guests exceeding the included limit, as per the respective venue. An extra charge of ₹250 per each additional guest will be applicable.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;