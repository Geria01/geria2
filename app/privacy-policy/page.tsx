export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <div className="prose max-w-none space-y-6">
        <p className="text-sm text-gray-600">Last updated: January 2025</p>

        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <h3 className="text-xl font-medium mb-2">Personal Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email address, phone number</li>
            <li>Professional information (company, job title, skills)</li>
            <li>Resume/CV and portfolio information</li>
            <li>Communication preferences</li>
          </ul>

          <h3 className="text-xl font-medium mb-2 mt-4">Technical Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address, browser type, device information</li>
            <li>Usage data and analytics</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and improve our recruitment services</li>
            <li>To match candidates with suitable opportunities</li>
            <li>To communicate about services and opportunities</li>
            <li>To comply with legal obligations</li>
            <li>For analytics and service improvement</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Legal Basis for Processing (GDPR)</h2>
          <p>We process your personal data based on:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Consent:</strong> For marketing communications and non-essential cookies</li>
            <li><strong>Contract:</strong> To provide recruitment services</li>
            <li><strong>Legitimate Interest:</strong> For business operations and improvement</li>
            <li><strong>Legal Obligation:</strong> For compliance with applicable laws</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Your Rights Under GDPR</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access:</strong> Request copies of your personal data</li>
            <li><strong>Rectification:</strong> Correct inaccurate personal data</li>
            <li><strong>Erasure:</strong> Request deletion of your personal data</li>
            <li><strong>Restrict Processing:</strong> Limit how we use your data</li>
            <li><strong>Data Portability:</strong> Receive your data in a structured format</li>
            <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
          <p>We retain personal data for as long as necessary to fulfill the purposes outlined in this policy, typically:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Active candidates: Until you request deletion or withdraw consent</li>
            <li>Client data: For the duration of our business relationship</li>
            <li>Analytics data: Anonymized and retained for up to 2 years</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
          <p>We implement appropriate technical and organizational measures including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption of data in transit and at rest</li>
            <li>Access controls and authentication</li>
            <li>Regular security assessments</li>
            <li>Staff training on data protection</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. International Transfers</h2>
          <p>Your data may be transferred to and processed in countries outside the EEA. We ensure adequate protection through:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Standard Contractual Clauses</li>
            <li>Adequacy decisions by the European Commission</li>
            <li>Other appropriate safeguards</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <p>For any privacy-related questions or to exercise your rights, contact us at:</p>
          <p><strong>Email:</strong> privacy@geria.io</p>
          <p><strong>Address:</strong> [Your Business Address]</p>

          <p className="mt-4">You also have the right to lodge a complaint with your local data protection authority.</p>
        </section>
      </div>
    </div>
  );
}