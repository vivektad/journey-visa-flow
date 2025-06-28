
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

interface ProcessingPriorityFormProps {
  onComplete: (data: { processingType: string }) => void;
}

const ProcessingPriorityForm: React.FC<ProcessingPriorityFormProps> = ({ onComplete }) => {
  const [selectedPriority, setSelectedPriority] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPriority) {
      onComplete({ processingType: selectedPriority });
    }
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Processing Priority Selection</h3>
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h4 className="text-base font-medium text-gray-900 mb-4">
                What priority would you like to apply for this workflow?
              </h4>
              
              <RadioGroup value={selectedPriority} onValueChange={setSelectedPriority}>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="regular" id="regular" className="mt-1" />
                    <Label htmlFor="regular" className="flex-1 cursor-pointer">
                      <div className="font-medium">Regular Processing</div>
                      <div className="text-sm text-gray-600 mt-1">
                        1-4 calendar months
                      </div>
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="priority" id="priority" className="mt-1" />
                    <Label htmlFor="priority" className="flex-1 cursor-pointer">
                      <div className="font-medium">Priority</div>
                      <div className="text-sm text-gray-600 mt-1">
                        ≤ 15 calendar days and additional $2,805
                      </div>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="flex justify-end">
              <Button 
                type="submit" 
                disabled={!selectedPriority}
                className="px-6"
              >
                Submit Priority Selection
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProcessingPriorityForm;
