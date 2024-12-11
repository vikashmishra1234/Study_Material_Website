import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl my-16 mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">Privacy Policy</h1>
      <p className="mb-4 text-sm sm:text-base"><strong className="font-semibold">Effective Date:</strong> 11-12-2024</p>

      <Section title="1. Introduction">
        <p>We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website to purchase digital books.</p>
      </Section>

      <Section title="2. Information We Collect">
        <ul className="list-disc pl-5">
          <li>only your phone number</li>
          <li>Payment details (processed securely through Razorpay)</li>
        </ul>
      </Section>

      <Section title="3. How We Use Your Information">
        <p className="mb-2">We use your information for the following purposes:</p>
        <ul className="list-disc pl-5">
          <li>To process your orders and deliver digital books</li>
          <li>To improve our website and services</li>
        </ul>
      </Section>

      <Section title="4. Payment Security">
        <p>All payment information is securely processed through Razorpay. We do not store your payment details on our servers.</p>
      </Section>

      <Section title="5. Sharing Your Information">
        <p>We do not sell, rent, or share your personal information with third parties, except to comply with legal obligations or to facilitate payment processing through Razorpay.</p>
      </Section>

      <Section title="6. Cookies">
        <p>We may use cookies to improve your browsing experience on our website.</p>
      </Section>

      <Section title="7. Your Rights">
        <p>You have the right to access, update, or delete your personal information. Contact us at vikashmishra8371@gmail.com for any privacy-related concerns.</p>
      </Section>

      <Section title="8. Changes to This Policy">
        <p>We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date.</p>
      </Section>

      <Section title="9. Contact Us">
        <p>If you have questions about our Privacy Policy, contact us at vikashmishra8371@gmail.com</p>
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="mb-4 sm:mb-6">
    <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-700">{title}</h2>
    <div className="text-sm sm:text-base text-gray-600">{children}</div>
  </section>
);

export default PrivacyPolicy;

