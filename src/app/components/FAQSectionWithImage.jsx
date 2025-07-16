"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQSectionWithImage = () => {
  //  FAQ data
  const faqs = [
    {
      question: "Are your products safe for sensitive skin?",
      answer:
        "Yes, our products are formulated with gentle ingredients suitable for sensitive skin. We recommend performing a patch test first.",
    },
    {
      question: "Are your products cruelty-free?",
      answer:
        "Absolutely! We are proud to be a cruelty-free brand. Our products are never tested on animals.",
    },
    {
      question: "What's your return policy?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not completely satisfied, you can return your product within 30 days for a full refund.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship worldwide! Shipping costs and delivery times vary by country. You can see the exact cost at checkout.",
    },
    {
      question: "How do I choose the right product?",
      answer:
        "We offer a personalized skincare quiz on our website to help you find the perfect products for your skin type and concerns. You can also contact our customer support for recommendations.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const faqRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // Animate whole section
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out",
    });

    // Image bounce-in
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 90%",
      },
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: "back.out(1.7)",
    });

    // FAQ cards animation
    faqRefs.current.forEach((faq, i) => {
      gsap.from(faq, {
        scrollTrigger: {
          trigger: faq,
          start: "top 95%",
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: i * 0.1,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 lg:py-20 lg:px-10"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-16">
          {/* Image block */}
          <div className="md:w-1/2 relative flex justify-center">
            <img
              ref={imageRef}
              src="/faq.png"
              alt="Skincare Product"
              className="w-full max-w-md md:max-w-none h-auto object-cover rounded-lg shadow-xl"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-6 py-3 rounded-full shadow-md text-center flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684L10.5 9l2.592-2.592a1 1 0 01.684-.948H19a2 2 0 012 2v10a2 2 0 01-2 2h-3.28a1 1 0 01-.948-.684L13.5 15l-2.592 2.592a1 1 0 01-.684.948H5a2 2 0 01-2-2V5z"
                ></path>
              </svg>
              <span className="text-sm md:text-base font-semibold text-gray-800">
                24/7 We're Here To Help You
              </span>
            </div>
          </div>

          {/* FAQ text and questions */}
          <div className="md:w-1/2 text-center md:text-left">
            <button className="inline-block text-gray-700 px-7 ml-16 py-4 rounded-full text-sm font-semibold mb-6 hover:bg-gray-200 transition duration-200 focus:outline-none border-2 border-gray-300 ">
              Frequently Asked Question
            </button>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 px-12 text-[#2D3B36]">
              Answers to Your <br className="hidden md:block" /> Skincare Questions, All{" "}
              <br className="hidden md:block" /> in One Place.
            </h2>

            <div className="space-y-4 px-12">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  ref={(el) => (faqRefs.current[index] = el)}
                  className="border border-gray-400 rounded-lg overflow-hidden"
                >
                  <button
                    className="flex justify-between items-center w-full p-3 md:p-4 text-left font-semibold text-base md:text-lg text-[#2D3B36] transition duration-300 focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span>{openIndex === index ? "−" : "+"}</span>
                  </button>
                  <div
                    className="faq-answer-content overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      height: openIndex === index ? "auto" : "0px",
                      opacity: openIndex === index ? "1" : "0",
                      padding: openIndex === index ? "1rem 1.5rem" : "0 1.5rem",
                    }}
                  >
                    <p className="text-[#525349] text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSectionWithImage;