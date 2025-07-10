import React, { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-white px-4 scroll-mt-20 pb-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4">
          Let's Connect
        </h2>
        <p className="text-gray-700 mb-10 text-lg">
          Interested in collaborating or have an opportunity to discuss?
          Fill out the form below to get in touch.
        </p>

        <form
          action="https://formspree.io/f/xanjgnrb"  
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className="space-y-6 text-left"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {/* Purpose */}
          <select
            name="purpose"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="">-- Purpose to Connect --</option>
            <option value="hire">Hire Me</option>
            <option value="collaborate">Collaboration</option>
            <option value="freelance">Freelance Project</option>
            <option value="other">Other</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            rows="5"
            placeholder="What's on your mind?"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>

          {/* Hidden Fields */}
          <input
            type="hidden"
            name="_subject"
            value="New message from portfolio contact form"
          />
          <input type="hidden" name="_captcha" value="false" />

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {submitted && (
          <p className="text-green-600 text-center mt-4 font-medium">
            ✅ Thank you! Your message has been sent.
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
