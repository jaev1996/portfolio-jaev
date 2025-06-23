export default function About() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Sobre mí</h2>
      <p className="text-lg mb-6 leading-relaxed">
        ¡Hola! Soy Jose Adolfo Escalona, también conocido como <strong>Jaev</strong>. Soy un desarrollador frontend de Caracas, Venezuela, con sólidos conocimientos en <strong>React</strong>, <strong>Tailwind CSS</strong> y <strong>Vite</strong>. Disfruto crear interfaces modernas, rápidas y responsivas, enfocadas en una experiencia de usuario agradable y funcional.
      </p>
      <p className="text-lg mb-6 leading-relaxed">
        Me apasiona trabajar en proyectos que resuelvan problemas reales. He desarrollado herramientas como una calculadora de metabolismo basal con persistencia de datos utilizando Supabase, una landing page corporativa con EmailJS, un sistema de pedidos con panel administrativo, y un tasklist en TypeScript conectado a un backend en la nube.
      </p>
      <div className="bg-muted dark:bg-muted/30 p-6 rounded-xl shadow mt-8">
        <h3 className="text-2xl font-semibold mb-4">Tecnologías que manejo</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-base">
          <li>✅ React</li>
          <li>✅ Tailwind CSS</li>
          <li>✅ Vite</li>
          <li>✅ Supabase</li>
          <li>✅ TypeScript</li>
          <li>✅ EmailJS</li>
          <li>✅ Git & GitHub</li>
          <li>✅ Diseño responsive</li>
        </ul>
      </div>
    </section>
  );
}
