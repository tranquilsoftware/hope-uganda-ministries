import React, { useState } from 'react';
import { DonationFrequency, DonationAmount, DonationFormData } from './types';
import { Loader2, CheckCircle } from 'lucide-react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// Replace with your actual PayPal client ID from the developer dashboard
// const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 
const PAYPAL_CLIENT_ID  = "YOUR_PAYPAL_CLIENT_ID";

// Replace with your actual billing plan ID for monthly donations
const MONTHLY_PLAN_ID = "YOUR_BILLING_PLAN_ID";

interface DonationInterfaceProps {
  selectedChildId: string | null;
  onSubmit: (data: DonationFormData) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

const donationAmounts: DonationAmount[] = [
  { value: 25, label: '$25', isPopular: false },
  { value: 50, label: '$50', isPopular: true },
  { value: 100, label: '$100', isPopular: false },
  { value: 250, label: '$250', isPopular: false },
  { value: 500, label: '$500', isPopular: false },
  { value: 0, label: 'Other', isPopular: false },
];

export const DonationInterface: React.FC<DonationInterfaceProps> = ({
  selectedChildId,
  onSubmit,
  isLoading: parentIsLoading,
  error: parentError,
}) => {
  const [formData, setFormData] = useState<Omit<DonationFormData, 'childId'>>({
    frequency: 'once',
    amount: 50, // Default to popular amount
    customAmount: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPayPalLoading, setIsPayPalLoading] = useState(false);
  const [payPalError, setPayPalError] = useState<string | null>(null);

  const handleFrequencyChange = (frequency: DonationFrequency) => {
    setFormData(prev => ({
      ...prev,
      frequency,
      // Reset amount when changing frequency
      amount: frequency === 'monthly' ? 25 : 50,
    }));
  };

  const handleAmountSelect = (amount: number) => {
    setFormData(prev => ({
      ...prev,
      amount,
      customAmount: amount === 0 ? '' : undefined,
    }));
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setFormData(prev => ({
        ...prev,
        amount: 0, // Reset to 0 when using custom amount
        customAmount: value,
      }));
    }
  };

  const getDonationAmount = () => {
    return formData.amount === 0 && formData.customAmount 
      ? parseFloat(formData.customAmount) 
      : formData.amount || 0;
  };

  const createOrder = (data: any, actions: any) => {
    const amount = getDonationAmount();
    
    if (formData.frequency === 'monthly') {
      return actions.subscription.create({
        plan_id: MONTHLY_PLAN_ID
      });
    } else {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: amount.toString(),
            currency_code: 'USD'
          },
          description: `Donation for ${selectedChildId ? 'child sponsorship' : 'general support'}`,
        }]
      });
    }
  };

  const onApprove = async (data: any, actions: any) => {
    try {
      setIsPayPalLoading(true);
      setPayPalError(null);
      
      const amount = getDonationAmount();
      const paymentId = formData.frequency === 'monthly' 
        ? data.subscriptionID 
        : (await actions.order?.capture())?.id;

      await onSubmit({
        ...formData,
        amount,
        childId: selectedChildId,
        paymentId,
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Payment error:', error);
      setPayPalError('Failed to process payment. Please try again.');
    } finally {
      setIsPayPalLoading(false);
    }
  };

  const onError = (err: any) => {
    console.error('PayPal error:', err);
    setPayPalError('Failed to initialize payment. Please try again or contact support.');
  };

  const handleSubmit = async () => {
    if (formData.frequency === 'once') {
      await onSubmit({
        ...formData,
        amount: getDonationAmount(),
        childId: selectedChildId,
      });
    } else {
      // Handle monthly donation with PayPal
      console.log('Monthly donation with PayPal ----');
      const paypal = (window as any).paypal;
      paypal.Buttons({
        createSubscription: createOrder,
        onApprove: onApprove,
        onError: onError,
      }).render('#paypal-button-container');
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-xl">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          Your {formData.frequency === 'monthly' ? 'monthly ' : ''}donation has been received. 
          A confirmation has been sent to your email.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              frequency: 'once',
              amount: 50,
              customAmount: '',
            });
          }}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Make Another Donation
        </button>
      </div>
    );
  }

  const amount = getDonationAmount();
  const isAmountValid = amount > 0;
  const isProcessing = parentIsLoading || isPayPalLoading;
  const error = parentError || payPalError;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Make a Donation</h2>
      
      {/* Frequency Toggle */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <label className="block text-sm font-medium text-gray-700">
            I want to give:
          </label>
        </div>
        <div className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            onClick={() => handleFrequencyChange('once')}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
              formData.frequency === 'once'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            One Time
          </button>
          <button
            type="button"
            onClick={() => handleFrequencyChange('monthly')}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
              formData.frequency === 'monthly'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Donation Amount Grid */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Select Amount ({formData.frequency === 'monthly' ? 'per month' : 'one time'})
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          {donationAmounts.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => handleAmountSelect(item.value)}
              className={`relative py-3 px-4 border rounded-md text-center transition-all ${
                formData.amount === item.value
                  ? 'border-blue-500 bg-blue-50 text-blue-700 ring-2 ring-blue-200'
                  : 'border-gray-300 hover:border-blue-300 bg-white text-gray-700 hover:bg-blue-50'
              } ${item.isPopular ? 'ring-1 ring-blue-300' : ''}`}
              disabled={isProcessing}
            >
              {item.label}
              {item.isPopular && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                  POPULAR
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Custom Amount - Only show when 'Other' is selected */}
        {formData.amount === 0 && (
          <div className="mt-2">
            <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-1">
              Enter custom amount
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="text"
                name="custom-amount"
                id="custom-amount"
                value={formData.customAmount || ''}
                onChange={handleCustomAmountChange}
                placeholder="0.00"
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-3 border disabled:bg-gray-50 disabled:cursor-not-allowed"
                aria-describedby="custom-amount-currency"
                disabled={isProcessing}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm" id="custom-amount-currency">
                  USD
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Donation Button */}
      <div className="mt-6">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isProcessing || !isAmountValid}
          className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isProcessing || !isAmountValid
              ? 'bg-blue-300 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          }`}
        >
          {isProcessing ? (
            <>
              <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
              Processing...
            </>
          ) : formData.frequency === 'monthly' ? (
            'Donate Monthly with PayPal'
          ) : (
            'Donate Now with PayPal'
          )}
        </button>
      </div>

      {/* Debug Info - Remove in production
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-4 p-3 bg-gray-100 rounded text-xs">
          <p>Debug Info:</p>
          <p>Amount: {getDonationAmount()}</p>
          <p>isAmountValid: {isAmountValid ? 'true' : 'false'}</p>
          <p>isProcessing: {isProcessing ? 'true' : 'false'}</p>
        </div>
      )} */}

      {(error || payPalError) && (
        <p className="mt-3 text-sm text-red-600">{error || payPalError}</p>
      )}

        <p className="mt-4 text-xs text-gray-500 text-center">
          Your donation is processed securely via PayPal. 100% of your donation goes directly to support our mission.
        </p>
      </div>
    // </div>
  );
};
