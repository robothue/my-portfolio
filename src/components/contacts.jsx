import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/xovweggp", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 6000);
      }
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 max-w-4xl mx-auto text-gray-800 bg-gradient-to-br from-[#f3e4fa] via-white to-[#ecd9f6] rounded-xl shadow-xl"
      data-aos="fade-up"
    >
      <h2
        className="text-3xl md:text-4xl font-bold mb-6 border-b-4 inline-block"
        style={{ borderColor: "#BA68C8" }}
        data-aos="fade-right"
      >
        Contact Me
      </h2>

      <p className="text-lg mb-10 text-gray-700" data-aos="fade-left" data-aos-delay="200">
        Have a project in mind or just want to say hello? Feel free to drop me a message.
      </p>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
          style={{ backgroundColor: "#fff", color: "#333", borderColor: "#ccc", outlineColor: "#BA68C8", focusRingColor: "#BA68C8" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
          style={{ backgroundColor: "#fff", color: "#333", borderColor: "#ccc", outlineColor: "#BA68C8" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
          style={{ backgroundColor: "#fff", color: "#333", borderColor: "#ccc", outlineColor: "#BA68C8" }}
        />
        <button
          type="submit"
          className="text-white py-3 px-6 rounded-lg transition-all duration-200"
          style={{ backgroundColor: "#BA68C8" }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#a55cb2")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#BA68C8")}
        >
          Send Message
        </button>
      </form>

      {submitted && (
        <p
          className="mt-6 text-green-600 font-semibold text-center transition-opacity duration-500 ease-in-out animate-fade-in"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          ✅ Your message has been sent! I'll get back to you soon.
        </p>
      )}

      <p
        className="mt-8 text-center text-gray-600"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        Or reach me directly at{" "}
        <a
          href="mailto:bahatimasudi2532@gmail.com"
          className="underline"
          style={{ color: "#BA68C8" }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#9e57b2")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#BA68C8")}
        >
          bahatimasudi2532@gmail.com
        </a>
      </p>
    </section>
  );
}
