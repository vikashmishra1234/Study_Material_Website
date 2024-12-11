import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-3xl my-16 mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">Terms and Conditions</h1>
      <p className="mb-4 text-sm sm:text-base"><strong className="font-semibold">Effective Date:</strong> 11-12-2024</p>

      <Section title="1. Introduction">
        <p>By purchasing digital books from this website, you agree to comply with these Terms and Conditions. If you disagree with any part of these terms, please do not use our website.</p>
      </Section>

      <Section title="2. Product Description">
        <p>We sell digital books designed for engineering students. These books are in electronic format and are delivered via email or readable only from this website after successful payment.</p>
      </Section>

      <Section title="3. Payment and Pricing">
        <ul className="list-disc pl-5">
          <li>Each digital book costs ₹20.</li>
          <li>Payments are securely processed through Razorpay.</li>
          <li>Prices are subject to change at our discretion.</li>
        </ul>
      </Section>

      <Section title="4. Refund Policy">
        <p>All sales are final. Once a payment is made and the book is delivered, no refunds will be issued under any circumstances.</p>
      </Section>

      <Section title="5. Intellectual Property">
        <p>The digital books are our intellectual property. You may not distribute, share, or resell the books without our permission.</p>
      </Section>

      <Section title="6. User Responsibilities">
        <p>You agree to:</p>
        <ul className="list-disc pl-5">
          <li>Use the digital books for personal, educational purposes only.</li>
          <li>Provide accurate information during the purchase process.</li>
        </ul>
      </Section>

      <Section title="7. Limitation of Liability">
        <p>We are not responsible for any technical issues or incompatibility with your devices.</p>
      </Section>

      <Section title="8. Changes to Terms">
        <p>We may update these Terms and Conditions from time to time. Changes will be posted on this page with an updated effective date.</p>
      </Section>

      <Section title="9. Contact Us">
        <p>For any questions or concerns regarding these Terms and Conditions, contact us at vikashmishra8371@gmail.com.</p>
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

export default TermsAndConditions;

