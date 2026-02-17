"use client";

import { useState, Suspense } from "react";
import { motion } from "framer-motion";
import ContactMap from "./ContactMap";
import confetti from "canvas-confetti";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#F3525A", "#ea580c", "#22c55e", "#3b82f6"],
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="bg-gray-50 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">
            Contact Us
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 leading-tight">
            Have a Project Idea? <span className="text-accent">Let&apos;s Talk!</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <Suspense
            fallback={
              <div className="h-[400px] w-full rounded-2xl overflow-hidden bg-gray-200 animate-pulse flex items-center justify-center">
                <span className="text-gray-400">Loading map...</span>
              </div>
            }
          >
            <ContactMap />
          </Suspense>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-3">
            {isSuccess ? (
              <div className="bg-white rounded-3xl p-12 text-center shadow-lg">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. We&apos;ve received your message and will get
                  back to you within 24 hours.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Check your email for confirmation
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-bold text-gray-900"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Ex. John"
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-transparent focus:border-accent focus:ring-0 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-bold text-gray-900"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Ex. Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-transparent focus:border-accent focus:ring-0 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-bold text-gray-900"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-transparent focus:border-accent focus:ring-0 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-bold text-gray-900"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Phone Number"
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-transparent focus:border-accent focus:ring-0 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-bold text-gray-900"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject here.."
                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-transparent focus:border-accent focus:ring-0 outline-none transition-all placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-gray-900"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-transparent focus:border-accent focus:ring-0 outline-none transition-all placeholder:text-gray-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Card */}
          <div className="lg:col-span-2">
            <div className="bg-[#0f172a] text-white p-8 md:p-10 rounded-[2rem] h-full flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full -ml-10 -mb-10 blur-xl"></div>

              <div className="space-y-10 relative z-10">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4">Address</h3>
                  <p className="text-gray-400 leading-relaxed">
                    No 28, Oba Olagbegi, Oshuntokun,
                    <br />
                    Bodija, Ibadan, Oyo State, Nigeria.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold mb-4">Contact</h3>
                  <div className="space-y-2 text-gray-400">
                    <p>Phone : +234812650109</p>
                    <p>Email : info@globsumtech.com</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold mb-4">Open Time</h3>
                  <div className="space-y-2 text-gray-400">
                    <p className="flex justify-between max-w-xs">
                      <span>Monday - Friday</span> <span>: 08:00 - 17:00</span>
                    </p>
                    <p className="flex justify-between max-w-xs">
                      <span>Saturday - Sunday</span> <span>: Closed</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 relative z-10">
                <h3 className="text-2xl font-display font-bold mb-6">
                  Stay Connected
                </h3>
                <div className="flex gap-4">
                  {[
                    {
                      icon: (
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      ),
                      bg: "bg-[#ea580c]",
                    },
                    {
                      icon: (
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      ),
                      bg: "bg-[#ea580c]",
                    },
                    {
                      icon: (
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                      ),
                      bg: "bg-[#ea580c]",
                      sub: (
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      ),
                      sub2: <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>,
                    },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href="#"
                      className={`${social.bg} w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {social.icon}
                        {social.sub}
                        {social.sub2}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
