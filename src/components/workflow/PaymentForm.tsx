import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Check, CreditCard, Building2 } from 'lucide-react';

interface PaymentFormProps {
  onComplete: (data: any) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onComplete }) => {
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'ach' | ''>('');

  const costs = [
    { item: 'USCIS Filing Fee (I-129)', amount: 460 },
    { item: 'Fraud Prevention and Detection Fee', amount: 500 },
    { item: 'American Competitiveness and Workforce Improvement Act Fee', amount: 1500 },
    { item: 'Public Law 114-113 Fee', amount: 4000 },
    { item: 'Attorney Fees', amount: 3500 },
  ];

  const totalAmount = costs.reduce((sum, cost) => sum + cost.amount, 0);

  const handleSubmit = () => {
    if (!paymentMethod) return;
    
    const paymentData = {
      paymentMethod,
      costs,
      totalAmount,
      timestamp: new Date().toISOString()
    };
    
    onComplete(paymentData);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Payment for Visa Application</h3>
        <p className="text-sm text-gray-600 mb-6">
          Please review the itemized costs and select your preferred payment method.
        </p>
      </div>

      {/* Itemized Costs */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Cost Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {costs.map((cost, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm text-gray-700">{cost.item}</span>
              <span className="text-sm font-medium">${cost.amount.toLocaleString()}</span>
            </div>
          ))}
          <Separator className="my-3" />
          <div className="flex justify-between items-center font-semibold">
            <span>Total Amount</span>
            <span className="text-lg">${totalAmount.toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      {/* Payment Method Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Payment Method</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as 'stripe' | 'ach')}>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                <RadioGroupItem value="stripe" id="stripe" />
                <Label htmlFor="stripe" className="flex-1 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Credit/Debit Card (Stripe)</div>
                      <div className="text-sm text-gray-500">Pay securely with your credit or debit card</div>
                    </div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                <RadioGroupItem value="ach" id="ach" />
                <Label htmlFor="ach" className="flex-1 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Building2 className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-medium">ACH Bank Transfer</div>
                      <div className="text-sm text-gray-500">Direct bank transfer (3-5 business days)</div>
                    </div>
                  </div>
                </Label>
              </div>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button 
          onClick={handleSubmit}
          disabled={!paymentMethod}
          className="min-w-32"
        >
          <Check className="h-4 w-4 mr-2" />
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
};

export default PaymentForm;