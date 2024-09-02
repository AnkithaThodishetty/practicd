import React from 'react';

const PricingSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Day Pass Card */}
        <div className="bg-gray-800 p-8 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Day Pass</h3>
          <p className="text-green-500 text-5xl font-bold mb-2">$20</p>
          <p className="text-gray-400 mb-4">/ pass</p>
          <ul className="text-gray-400 mb-6">
            <li>1 Day Pass</li>
            <li>Free Gym Access</li>
            <li>24 Hour Access</li>
          </ul>
          <button className="bg-white text-black font-semibold py-2 px-6 rounded-full">Get Started</button>
        </div>

        {/* Month to Month Card */}
        <div className="bg-white p-8 rounded-lg text-center text-black">
          <h3 className="text-xl font-semibold mb-4">Month to Month</h3>
          <p className="text-green-500 text-5xl font-bold mb-2">$90</p>
          <p className="text-gray-700 mb-4">/ month</p>
          <ul className="text-gray-700 mb-6">
            <li>$99 Joining Fee</li>
            <li>No Contract</li>
            <li>Free Gym Access</li>
            <li>1 Group Class Included</li>
            <li>24 Hour Access</li>
          </ul>
          <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-full">Get Started</button>
        </div>

        {/* Membership Description */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Membership</h3>
          <p className="text-gray-400 mb-4">
            From Punch Pass to Monthly or Annual
          </p>
          <p className="text-gray-400 mb-4">
            At Gym Base, we offer a wide range of membership with options to suit every budget. Everything from One Day Pass, Punch Pass to monthly or annual prepaid memberships. What’s more, we won’t tie you in to a long term contract, giving you greater flexibility.
          </p>
          <h4 className="text-lg font-semibold mb-2">Each plan includes</h4>
          <ul className="text-gray-400 list-disc ml-4">
            <li>The best equipment global brands</li>
            <li>The gym is open 24 hours a day, 7 days a week</li>
            <li>Two safe payment methods</li>
            <li>Group fitness classes in the price of the subscription</li>
            <li>No long-term contract, period</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
