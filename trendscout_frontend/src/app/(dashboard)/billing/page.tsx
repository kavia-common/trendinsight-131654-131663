import React from 'react';

// PUBLIC_INTERFACE
export default function BillingPage() {
  /**
   * Billing page for managing subscription plans, payment methods, and billing history.
   * Provides plan comparison and upgrade/downgrade options for users.
   */

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Billing & Plans</h1>
          <p className="text-gray-600 mt-1">
            Manage your subscription, payment methods, and billing history.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Download Invoice
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Upgrade Plan
          </button>
        </div>
      </div>

      {/* Current Plan */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Current Plan</h3>
          <p className="text-gray-600 text-sm">Your active subscription details</p>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3">
                <h4 className="text-xl font-semibold text-gray-900">Professional Plan</h4>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Active</span>
              </div>
              <p className="text-gray-600 mt-1">Perfect for growing businesses</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Monthly Price</p>
                  <p className="text-lg font-semibold text-gray-900">$49/month</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Next Billing</p>
                  <p className="text-lg font-semibold text-gray-900">Feb 15, 2024</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Payment Method</p>
                  <p className="text-lg font-semibold text-gray-900">**** 4242</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">$49</div>
              <p className="text-sm text-gray-500">per month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Monitored Keywords</h3>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-blue-600">25</span>
            <span className="text-sm text-gray-500">/ 50</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitors</h3>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-teal-600">5</span>
            <span className="text-sm text-gray-500">/ 10</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-teal-600 h-2 rounded-full" style={{ width: '50%' }}></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Monthly Reports</h3>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-orange-400">8</span>
            <span className="text-sm text-gray-500">/ 20</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-orange-400 h-2 rounded-full" style={{ width: '40%' }}></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">API Calls</h3>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-purple-600">2.1K</span>
            <span className="text-sm text-gray-500">/ 10K</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-purple-600 h-2 rounded-full" style={{ width: '21%' }}></div>
          </div>
        </div>
      </div>

      {/* Available Plans */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Available Plans</h3>
          <p className="text-gray-600 text-sm">Compare and upgrade your subscription</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Starter',
                price: 19,
                description: 'Perfect for individuals and small projects',
                features: [
                  '10 monitored keywords',
                  '3 competitors',
                  '5 monthly reports',
                  'Email support',
                  'Basic analytics'
                ],
                current: false,
                popular: false
              },
              {
                name: 'Professional',
                price: 49,
                description: 'Ideal for growing businesses',
                features: [
                  '50 monitored keywords',
                  '10 competitors',
                  '20 monthly reports',
                  'Priority support',
                  'Advanced analytics',
                  'Custom alerts'
                ],
                current: true,
                popular: true
              },
              {
                name: 'Enterprise',
                price: 99,
                description: 'For large teams and organizations',
                features: [
                  'Unlimited keywords',
                  'Unlimited competitors',
                  'Unlimited reports',
                  '24/7 phone support',
                  'White-label reports',
                  'API access',
                  'Custom integrations'
                ],
                current: false,
                popular: false
              }
            ].map((plan) => (
              <div key={plan.name} className={`relative rounded-lg border-2 p-6 ${
                plan.current ? 'border-blue-500 bg-blue-50' : 
                plan.popular ? 'border-orange-400' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-400 text-white text-xs px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                {plan.current && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                      Current Plan
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900">{plan.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button className={`w-full py-2 px-4 rounded-md font-medium ${
                    plan.current 
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`} disabled={plan.current}>
                    {plan.current ? 'Current Plan' : 'Upgrade'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Billing History</h3>
          <p className="text-gray-600 text-sm">Your payment and invoice history</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Invoice
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  date: '2024-01-15',
                  description: 'Professional Plan - Monthly',
                  amount: '$49.00',
                  status: 'Paid',
                  invoice: 'INV-2024-001'
                },
                {
                  date: '2023-12-15',
                  description: 'Professional Plan - Monthly',
                  amount: '$49.00',
                  status: 'Paid',
                  invoice: 'INV-2023-012'
                },
                {
                  date: '2023-11-15',
                  description: 'Professional Plan - Monthly',
                  amount: '$49.00',
                  status: 'Paid',
                  invoice: 'INV-2023-011'
                },
                {
                  date: '2023-10-15',
                  description: 'Starter Plan - Monthly',
                  amount: '$19.00',
                  status: 'Paid',
                  invoice: 'INV-2023-010'
                }
              ].map((transaction, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">
                    <button>Download {transaction.invoice}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
