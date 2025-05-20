export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-white px-6 md:px-12 max-w-4xl mx-auto text-gray-800"
      data-aos="fade-up"
    >
      <h2
        className="text-3xl md:text-4xl font-bold mb-6 border-b-4 border-indigo-600 inline-block"
        data-aos="fade-right"
      >
        Contact Me
      </h2>
      <p className="text-lg mb-10" data-aos="fade-left" data-aos-delay="200">
        Have a project in mind or just want to say hello? Feel free to drop me a message.
      </p>
      <form
        action="https://formspree.io/f/your-form-id" 
        method="POST"
        className="grid grid-cols-1 gap-6"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white py-3 px-6 rounded hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
      <p
        className="mt-8 text-center text-gray-600"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        Or reach me directly at{" "}
        <a
          href="mailto:your.email@example.com"
          className="text-indigo-600 underline"
        >
          your.email@example.com
        </a>
      </p>
    </section>
  );
}
