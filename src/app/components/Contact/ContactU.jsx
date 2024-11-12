// ContactForm.jsx
"use client";
import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 md:flex md:space-x-12">
      {/* Form Section */}
      <div className="md:w-1/2">
        <h4 className="text-sm font-semibold text-[#912ED9] uppercase mb-2">
          Contact
        </h4>
        <h2 className="text-3xl font-bold mb-6">Get In Touch Today</h2>

        {/* Form Fields */}
        <form className="space-y-4">
          <div className="md:flex md:space-x-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your first and last name"
                className="w-full border border-purple-300 p-2 rounded-md outline-none focus:border-[#912ED9]"
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1">Mobile Number</label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="w-full border border-purple-300 p-2 rounded-md outline-none focus:border-[#912ED9]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border border-purple-300 p-2 rounded-md outline-none focus:border-[#912ED9]"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Vehicle</label>
            <input
              type="text"
              placeholder="Enter your vehicle brand and model"
              className="w-full border border-purple-300 p-2 rounded-md outline-none focus:border-[#912ED9]"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              What services are you interested in?
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 text-[#912ED9]" />
                Ceramic Coating
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 text-[#912ED9]" />
                Paint Correction
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 text-[#912ED9]" />
                Mobile Detailing
              </label>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Additional Information
            </label>
            <textarea
              placeholder="Tell us anything else you think is important"
              className="w-full border border-purple-300 p-2 rounded-md outline-none focus:border-[#912ED9] h-24"
            />
          </div>

          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-[#912ED9] text-white font-semibold rounded-md hover:bg-purple-700 transition"
          >
            Send Your Enquiry
          </button>
        </form>
      </div>

      {/* Map and Info Section */}
      <div className="md:w-1/2 mt-12 md:mt-0">
        <h2 className="text-xl font-bold mb-4">
          What Happens After You Click Send
        </h2>
        <p className="text-gray-700 mb-4">
          After you have sent your message, we will be in contact within 24
          hours to discuss the service and next steps. We’re always happy to
          provide free advice so you can make the best-informed decision.
        </p>
        <p className="font-semibold">Monday - Sunday: 9:00am - 7:00pm</p>

        <div className="mt-6">
          {/* Embedded Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.493756195551!2d-80.88394439999999!3d35.2439702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6672f0bad2a69a41%3A0xb5a811cccf367c5f!2sEyez%20On%20The%20Prize%20Auto-Spa!5e0!3m2!1sen!2s!4v1730923380866!5m2!1sen!2s"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            title="Eyez On The Prize Auto-Spa Location"
            className="rounded-lg shadow-md border border-gray-300"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
