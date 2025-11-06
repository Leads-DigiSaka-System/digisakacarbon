"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Your message has been sent!", {
      description: "We will get back to you shortly.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email",
      value: "marketing@leadsagri.com",
      href: "mailto:marketing@leadsagri.com",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: "Phone",
      value: "+63 917 7726369",
      href: "tel:+63 917 7726369",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      label: "Address",
      value: "Unit 204-205 Coral Center Building, Brgy. San Francisco, Southwoods City, Biñan, Laguna",
      href: "#",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
          />
        </svg>
      ),
      label: "Website",
      value: "https://leadsagri.com/",
      href: "https://leadsagri.com/",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-[#FFF8E1]/40 to-[#81C784]/15 overflow-hidden">
      <div className="container relative z-10 px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-20 md:py-24 lg:py-32">
        <div className="mb-12 text-center">
          <Badge className="px-4 py-2 mb-4 text-sm font-bold bg-white border-2 shadow-md text-forest-green border-forest-green/30 sm:px-6 sm:py-3 sm:text-base">
            <div className="w-2.5 h-2.5 bg-[#228B22] rounded-full mr-3"></div>
            <span className="text-sm font-bold text-[#1B5E20] tracking-wider uppercase letter-spacing-wide">
              Get In Touch
            </span>
          </Badge>
          <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#81C784] bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#424242]/85 max-w-4xl mx-auto">
            We would love to hear from you! Please reach out using the form
            below.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 mx-auto lg:grid-cols-2 lg:gap-16 max-w-7xl">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative p-8 bg-white border border-gray-200 shadow-md rounded-2xl sm:p-10 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <Label
                      htmlFor="name"
                      className="block text-sm font-bold text-[#1B5E20] mb-3"
                    >
                      Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 sm:h-14 px-4 sm:px-6 text-base font-semibold text-[#424242] bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:border-[#228B22] focus:ring-0"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <Label
                      htmlFor="email"
                      className="block text-sm font-bold text-[#1B5E20] mb-3"
                    >
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 sm:h-14 px-4 sm:px-6 text-base font-semibold text-[#424242] bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:border-[#228B22] focus:ring-0"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <Label
                      htmlFor="subject"
                      className="block text-sm font-bold text-[#1B5E20] mb-3"
                    >
                      Subject
                    </Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 sm:h-14 px-4 sm:px-6 text-base font-semibold text-[#424242] bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:border-[#228B22] focus:ring-0"
                      placeholder="Enter message subject"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <Label
                      htmlFor="message"
                      className="block text-sm font-bold text-[#1B5E20] mb-3"
                    >
                      Message
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 sm:px-6 py-4 text-base font-semibold text-[#424242] bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:border-[#228B22] focus:ring-0 resize-none"
                      placeholder="Enter your message here..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full h-10 sm:h-12 px-4 sm:px-6 text-sm sm:text-base font-black bg-[#FFB300] text-[#1B5E20] rounded-2xl shadow-sm border border-[#FFEB3B] hover:brightness-105 transition-[filter]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2">
            <div className="mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B5E20] mb-6 leading-tight">
                Other Ways to Reach Us:
              </h2>
            </div>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="relative">
                  <div className="relative p-6 bg-white border border-gray-200 shadow-sm rounded-2xl sm:p-8">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#228B22] flex items-center justify-center">
                          {info.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-black text-[#1B5E20] mb-1">
                          {info.label}
                        </h3>
                        {info.href === "#" ? (
                          <p className="text-base sm:text-lg font-semibold text-[#424242] break-words">
                            {info.value}
                          </p>
                        ) : (
                          <a
                            href={info.href}
                            className="text-base sm:text-lg font-semibold text-[#228B22] break-words hover:text-[#1B5E20] transition-colors"
                            target={
                              info.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {info.value}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="relative">
                <div className="relative p-6 bg-white border border-gray-200 shadow-sm rounded-2xl sm:p-8">
                  <div className="text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FFF8E1] border border-[#FFB300] mb-4">
                      <div className="w-2 h-2 bg-[#FFB300] rounded-full mr-2"></div>
                      <span className="text-xs font-bold text-[#FFB300] tracking-wider uppercase">
                        Let&apos;s Connect
                      </span>
                    </div>
                    <p className="text-base sm:text-lg font-semibold text-[#424242] leading-relaxed">
                      Ready to transform your agricultural practices with{" "}
                      <span className="font-black text-[#1B5E20] bg-[#E8F5E9] px-2 py-1 rounded-lg">
                        climate-smart solutions
                      </span>
                      ? We&apos;re here to help you get started.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
