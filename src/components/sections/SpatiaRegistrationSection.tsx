import React, { useState } from "react";

export default function SpatialRegistrationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    bankName: "",
    iban: "",
    bic: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent("Spatial Bank Registration");
      const body = encodeURIComponent(`
New Spatial Bank Registration:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
Bank Name: ${formData.bankName}
IBAN: ${formData.iban}
BIC: ${formData.bic}

---
Submitted from Spatial Registration Form
      `);

      // Open email client
      window.location.href = `mailto:peterkrulis@proton.me?subject=${subject}&body=${body}`;

      setSubmitStatus("success");

      // Reset form after short delay
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          bankName: "",
          iban: "",
          bic: "",
        });
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-black py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Join Spatial Bank
          </h1>
          <p className="text-xl text-gray-300">
            Your Gateway to Spatial Finance
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Complete the form below to register for early access
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blue-500/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Address *
              </label>
              <textarea
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                placeholder="123 Main Street, City, Country, Postal Code"
              />
            </div>

            {/* Bank Details */}
            <div className="space-y-6">
              {/* Bank Name */}
              <div>
                <label
                  htmlFor="bankName"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Bank Name *
                </label>
                <input
                  type="text"
                  id="bankName"
                  name="bankName"
                  required
                  value={formData.bankName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                  placeholder="Example Bank AG"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* IBAN */}
                <div>
                  <label
                    htmlFor="iban"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    IBAN *
                  </label>
                  <input
                    type="text"
                    id="iban"
                    name="iban"
                    required
                    value={formData.iban}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                    placeholder="DE89370400440532013000"
                  />
                </div>

                {/* BIC */}
                <div>
                  <label
                    htmlFor="bic"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    BIC/SWIFT *
                  </label>
                  <input
                    type="text"
                    id="bic"
                    name="bic"
                    required
                    value={formData.bic}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                    placeholder="DEUTDEFF"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg hover:shadow-blue-500/50"
                } text-white`}
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center">
                ✓ Registration submitted successfully! Your email client should
                open shortly.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center">
                ✗ There was an error processing your registration. Please try
                again.
              </div>
            )}
          </form>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <a
            href="#linktree"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = "linktree";
              window.dispatchEvent(new HashChangeEvent("hashchange"));
            }}
            className="inline-block text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Back to Spatial
          </a>
        </div>
      </div>
    </section>
  );
}
