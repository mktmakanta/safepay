'use client'

import { useState } from 'react'
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { dataPlans } from '@/constants/DataPlans'

export default function BuyDataForm() {
  const [network, setNetwork] = useState(null)
  const [dataType, setDataType] = useState(null)
  const [plan, setPlan] = useState(null)

  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
      {/* Form Section */}
      <div className="w-full md:w-2/3 space-y-4">
        <h2 className="text-lg font-semibold">Buy Data Plan</h2>

        {/* Network Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Network*</label>
          <Select
            onValueChange={value => {
              setNetwork(value)
              setDataType(null) // Reset dependent fields
              setPlan(null)
            }}
          >
            <SelectTrigger className="w-full">
              <span>{network ?? 'Select Network'}</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mtn">MTN</SelectItem>
              <SelectItem value="airtel">Airtel</SelectItem>
              <SelectItem value="glo">Glo</SelectItem>
              <SelectItem value="9mobile">9Mobile</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Data Type Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Data Type</label>
          <Select
            disabled={!network}
            onValueChange={value => {
              setDataType(value)
              setPlan(null) // Reset plan
            }}
          >
            <SelectTrigger className="w-full">
              <span>{dataType ?? 'Select Data Type'}</span>
            </SelectTrigger>
            <SelectContent>
              {network && (
                <>
                  <SelectItem value="sme">SME</SelectItem>
                  <SelectItem value="gifting">Gifting</SelectItem>
                </>
              )}
            </SelectContent>
          </Select>
        </div>

        {/* Plan Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Plan</label>
          <Select
            disabled={!dataType || !network}
            onValueChange={value => {
              const selectedPlan = dataPlans[network][dataType].find(p => p.value === value)
              setPlan(selectedPlan || null)
            }}
          >
            <SelectTrigger className="w-full">
              <span>{plan ? `${plan.value} - ₦${plan.price}` : 'Select Plan'}</span>
            </SelectTrigger>
            <SelectContent>
              {network && dataType && (
                <>
                  {dataPlans[network][dataType].map(p => (
                    <SelectItem key={p.value} value={p.value}>
                      {p.value} - ₦{p.price}
                    </SelectItem>
                  ))}
                </>
              )}
            </SelectContent>
          </Select>
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Mobile Number*</label>
          <Input type="tel" placeholder="Enter mobile number" />
        </div>

        {/* Amount Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <Input type="number" placeholder="Amount" value={plan?.price ?? ''} disabled />
        </div>

        {/* Submit Button */}
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Buy Now</Button>
      </div>

      {/* Data Balance Section */}
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-4">
        <h3 className="text-sm font-medium text-gray-700 mb-4">Codes for Data Balance:</h3>
        <ul className="space-y-2 text-sm">
          <li className="bg-yellow-100 p-2 rounded">MTN [SME] *461*4#</li>
          <li className="bg-yellow-100 p-2 rounded">MTN [Gifting] *131*4# or *460*260#</li>
          <li className="bg-gray-100 p-2 rounded">9mobile [Gifting] *228#</li>
          <li className="bg-red-100 p-2 rounded">Airtel *140#</li>
          <li className="bg-green-100 p-2 rounded">Glo *127*0#</li>
        </ul>
      </div>
    </div>
  )
}
