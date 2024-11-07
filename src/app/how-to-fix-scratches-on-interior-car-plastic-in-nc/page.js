import {
  FaUserCircle,
  FaCalendarAlt,
  FaClock,
  FaComment,
} from "react-icons/fa";
import React from "react";
import Link from "next/link";

// Updated Data Structure
const defaultData = [
  {
    heading: "Understanding the Impact of Car Scratches",
    sections: [
      {
        paragraph: "Car scratches on the interior not only affect the visual appeal of your vehicle but can also impact its resale value. Whether you’re a meticulous car enthusiast or simply someone who takes pride in a well-maintained vehicle, addressing these scratches promptly is essential.",
        listItems: [],
      },
    ],
  },
  {
    heading: "Identifying the Type of Car Scratches",

    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Before diving into solutions, it’s crucial to identify the type of scratches you’re dealing with. Interior car scratches can be classified into three main types:
            </p>
          </div>
        ),
        listItems: [],

        image: "",
      },
    ],
  },
  {
    heading: "",

    sections: [
      {
        subheading: "Surface Scratches",
        paragraph:
          "Superficial scratches that only affect the clear coat or protective layer.",
        listItems: [],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading:"Deep Scratches",
        paragraph: "Penetrating the color layer and requiring more extensive repair.",
        listItems: [],
        image: "",
      },
    ],
  },
  {
    heading: "Cracks or Grooves",
    sections: [
      {
        subheading: "",
        paragraph:
          "Severe damage that may necessitate replacement rather than repair.",
        listItems: [],
      },
    ],
  },
  {
    heading: "Strategies to Fix Car Scratches on Interior Plastic",
    sections: [
      {
        subheading: "Do It Yourself Scratch Repair Kits",
        paragraph:
          "To address surface scratches, consider using a Do It Yourself scratch repair kit designed for plastic surfaces. These kits typically include a cleaning solution, a filler compound, and a polishing agent. Apply the solution following the kit’s instructions, gently filling in the scratches and buffing the surface to restore its original shine. These kits are widely available in automotive stores across North Carolina.",
        listItems: [],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading:"Heat Gun or Hair Dryer Method",
        paragraph: "For deeper scratches that have not penetrated the plastic, the heat gun or hair dryer method can be effective. Use a heat gun or a hair dryer to warm the scratched area, making the plastic more pliable. Once heated, gently rub the scratched area with a soft cloth. The heat helps the plastic regain its original form, reducing the visibility of the scratches.",
        listItems: [],
        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading:"Professional Interior Detailing Services",
        paragraph: "When dealing with more severe scratches or those that require professional attention, consider seeking the expertise of interior detailing services in North Carolina. Professional detailers have access to specialized products and techniques to address a variety of interior car imperfections. They can assess the damage and recommend the most suitable course of action",
        listItems: [],
        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading:"Vinyl Repair Kits for Extensive Damage",
        paragraph: "In cases where scratches have led to cracks or grooves, a vinyl repair kit can be a viable solution. These kits often include a vinyl repair compound that can be applied to fill in deeper scratches and restore the integrity of the plastic. Follow the kit’s instructions carefully for optimal results.",
        listItems: [],
        image: "",
      },
    ],
  },
  {
    heading: "Preventive Measures to Avoid Future Scratches",
    sections: [
      {
        subheading:"",
        paragraph: "While addressing existing scratches is essential, taking preventive measures can help avoid future damage to your car’s interior:",
        listItems: ["Use Protective Covers: Consider using seat covers and floor mats to protect the interior surfaces from potential scratches.",
          "Store Items Safely: Be mindful of where you place objects inside the car, especially sharp or abrasive items like keys and tools.",
          "Regular Cleaning: Keep your car’s interior clean to prevent debris or dirt particles from causing scratches during regular use."
        ],
        image: "",
      },
    ],
  },
  {
    heading: "Ready to Restore Your Car’s Interior Shine?",
    sections: [
      {
        subheading:"",
        paragraph: "Is your car’s interior plagued by unsightly scratches? Don’t let minor imperfections detract from the beauty of your vehicle. Take action now and contact Eyes On The Prize. We can restore your car’s untouched appearance..",
        listItems: [],
        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading:"Deep Scratches",
        paragraph: "Penetrating the color layer and requiring more extensive repair.",
        listItems: [],
        image: "",
      },
    ],
  },
 
];
const faqsData = [
  {
    question: "What PSI Pressure Washer for Car?",
    answer:
      "A pressure washing machine with a PSI type of 1200 to 1900 is right for car detailing. This variety affords sufficient pressure to cast off dirt without being unfavorable to the auto’s paint.",
  },
  {
    question: "What Soap to Use in Pressure Washer for Car?",
    answer:
      "Use a soap or detergent that is specifically designed for vehicle pressure washers. Avoid household detergents or dish soaps, as they could strip wax and harm the paint.",
  },
  {
    question: "What Pressure Washer Nozzle for Car?",
    answer:
      "The best nozzle for automobile washing is the 40-diploma nozzle. It gives a huge, gentle spray that successfully cleans the automobile’s surface without causing damage.",
  },
  {
    question: "Is it Safe to Wash a Car with a Pressure Washer?",
    answer:
      "Yes, it’s completely secure to wash a vehicle with a pressure washer in case you use a suitable pressure nozzle. Always maintain a secure distance from the car’s surface to avoid harm.",
  },
  {
    question: "Can I Use Any Pressure Washer on My Car?",
    answer:
      "Not all pressure washers are appropriate for car detailing. Choose a pressure washing machine with the proper PSI, GPM, and appropriate nozzles to ensure safe and effective cleansing without affecting the automobile’s paint.",
  },
];
const Blog1 = ({ data = defaultData, title, date, author, time, comments }) => {
  return (
    <>
      {/* Header Section */}
      <div className="relative min-h-[60vh] bg-gradient-to-r from-purple-500 to-black bg-center bg-cover z-0">
        <div className="absolute inset-0 bg-[url('/images/service-1.png')] bg-cover opacity-[0.26]"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1 className="text-white mt-32 text-3xl md:text-5xl font-bold">
            {title || "How to Fix Scratches on Interior Car Plastic in NC"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "EyezOnThePrize"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "December 5, 2023"}
            />
            <InfoItem icon={<FaClock />} text={time || "10:42 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-gradient-to-r from-black via-black to-purple-900 text-white">
        <div className="border-4 border-[#7100BB] p-2 inline-block">
          <img
            src="/images/blog-22.jpg"
            alt="Reclining Sofas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-white">
          <p>
          Car scratches can be a source of frustration for car owners, no matter how minor. The interior plastic of your vehicle is not exempt from this wear and tear. Whether it’s caused by keys, rings, or other objects, scratches on the interior can detract from the overall creative look of your car. We will tell you effective ways to fix scratches on interior car plastic in North Carolina and restore your vehicle’s pristine appearance.
          </p>
          <p className="mt-6"></p>
        </div>

        {data.map((item, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-600">
              {item.heading}
            </h2>

            {item.sections.map((section, secIndex) => (
              <div key={secIndex} className="mt-4">
                {section.subheading && (
                  <h3 className="text-xl font-semibold text-white mt-2">
                    {section.subheading}
                  </h3>
                )}

                {section.paragraph && (
                  <div className="text-md text-white mt-2">
                    {section.paragraph}
                  </div>
                )}

                {section.image && (
                  <div className="my-4">
                    <img
                      src={section.image}
                      alt={section.subheading || item.heading}
                      className="w-3/4 max-w-md h-auto rounded-lg"
                    />
                  </div>
                )}

                {section.listItems && (
                  <ul className="list-disc list-inside text-white mt-2">
                    {section.listItems.map((listItem, liIndex) => (
                      <li key={liIndex} className="ml-4">
                        {listItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}

        <div className="mt-8">
          <Link href="https://book.squareup.com/appointments/g74ppxgb2rbmal/location/LH1DBHXC19NYZ/services">
            <button className="px-6 py-3 text-lg font-semibold text-white bg-[#7100BB] hover:bg-black hover:text-[#7100BB] transition-all duration-300">
              Booking
            </button>
          </Link>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white">Conclusion</h2>
          <p className="text-md text-white mt-2">
          Addressing car scratches on interior plastic in North Carolina doesn’t have to be a daunting task. By identifying the type of scratches and choosing the appropriate repair method, you can restore your vehicle’s interior to its former glory. Whether you opt for a DIY solution or seek professional assistance, the key is prompt and thoughtful action. Take pride in your car’s appearance and enjoy the ride with an impeccably maintained interior.
          </p>
        </div>
        {/* FAQs Section */}
        {/* <div className="mt-8">
          <h2 className="text-2xl font-bold text-white">FAQs</h2>
          {faqsData.map((faq, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-xl font-semibold text-yellow-600">
                {faq.question}
              </h3>
              <p className="text-md text-white mt-2">{faq.answer}</p>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

// InfoItem Component for Header Icons
const InfoItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 w-1/2 sm:w-1/4 md:w-auto mt-2 sm:mt-0">
    {icon}
    <span>{text}</span>
  </div>
);

export default Blog1;