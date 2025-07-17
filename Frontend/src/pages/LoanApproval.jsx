import React, { useState } from 'react';
import toast from 'react-hot-toast';

const LoanApproval = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('');
  const [income, setIncome] = useState('');
  const [creditScore, setCreditScore] = useState('');
  const [result, setResult] = useState(null);

  const calculateLoan = () => {
    const principal = parseFloat(amount);
    const interestRate = parseFloat(rate);
    const loanTerm = parseFloat(term);
    const monthlyIncome = parseFloat(income);
    const credit = parseInt(creditScore);

    // Basic empty validation
    if (!principal || !interestRate || !loanTerm || !monthlyIncome || !credit) {
      toast.error("⚠️ Please fill in all fields correctly.");
      return;
    }

    // Edge case validations
    if (principal < 1000) {
      toast.error("🚫 Loan amount must be at least ₹1000");
      return;
    }
    if (interestRate <= 0 || interestRate > 50) {
      toast.error("🚫 Interest rate must be between 1% and 50%");
      return;
    }
    if (loanTerm <= 0 || loanTerm > 50) {
      toast.error("🚫 Loan term must be between 1 to 50 years");
      return;
    }
    if (monthlyIncome < 5000) {
      toast.error("🚫 Monthly income must be at least ₹5000");
      return;
    }
    if (credit < 300 || credit > 900) {
      toast.error("🚫 Credit score must be between 300 and 900");
      return;
    }

    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
                (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayment = emi * numberOfPayments;
    const totalInterest = totalPayment - principal;

    const maxAffordableEMI = monthlyIncome * 0.4;
    const creditEligible = credit >= 700;
    const emiEligible = emi <= maxAffordableEMI;
    const approved = creditEligible && emiEligible;

    setResult({
      emi: emi.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      approved,
      creditEligible,
      emiEligible,
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">🏦 Loan Approval System</h2>

      <div className="space-y-4">
        <InputField label="Loan Amount (₹):" value={amount} onChange={setAmount} />
        <InputField label="Interest Rate (% per annum):" value={rate} onChange={setRate} />
        <InputField label="Loan Term (in years):" value={term} onChange={setTerm} />
        <InputField label="Monthly Income (₹):" value={income} onChange={setIncome} />
        <InputField label="Credit Score:" value={creditScore} onChange={setCreditScore} />

        <button
          onClick={calculateLoan}
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-semibold"
        >
          Calculate & Check Approval
        </button>
      </div>

      {result && (
        <div className="mt-8 bg-gray-50 p-6 rounded-md border">
          <h3 className="text-lg font-bold text-gray-800 mb-2">📊 Loan Summary</h3>
          <p><strong>Monthly EMI:</strong> ₹{result.emi}</p>
          <p><strong>Total Interest:</strong> ₹{result.totalInterest}</p>
          <p><strong>Total Payment:</strong> ₹{result.totalPayment}</p>

          <h4 className="text-md font-semibold mt-4 mb-1">✅ Approval Result:</h4>
          {result.approved ? (
            <p className="text-green-600 font-bold">🎉 Congratulations! Your loan is approved.</p>
          ) : (
            <p className="text-red-600 font-bold">❌ Loan not approved. Check credit score or EMI-to-income ratio.</p>
          )}

          <ul className="mt-3 list-disc list-inside text-sm">
            <li>Credit Score Eligible: {result.creditEligible ? '✅ Yes' : '❌ No (Needs ≥ 700)'}</li>
            <li>EMI ≤ 40% of Income: {result.emiEligible ? '✅ Yes' : '❌ No'}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

const InputField = ({ label, value, onChange }) => (
  <div>
    <label className="block font-medium mb-1">{label}</label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
);

export default LoanApproval;
