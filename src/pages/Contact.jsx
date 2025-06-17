import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="px-6 py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Contáctame</h2>

      <form
        action="https://formsubmit.co/tu-correo@email.com"
        method="POST"
        className="grid gap-6"
      >
        <input type="hidden" name="_captcha" value="false" />

        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 dark:bg-blue-400 text-white font-medium px-6 py-3 rounded-xl hover:opacity-90 transition"
        >
          Enviar mensaje
        </button>
      </form>

      <div className="flex justify-center mt-10 gap-6">
        <a
          href="https://github.com/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
