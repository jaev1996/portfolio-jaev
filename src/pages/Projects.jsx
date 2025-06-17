export default function Projects() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Proyectos Destacados</h2>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Calculadora de Metabolismo Basal</h3>
          <p className="text-sm mb-3">
            App para calcular el TMB e IMC con persistencia usando Supabase. Ideal para usuarios que siguen planes de salud o entrenadores personales.
          </p>
          <a
            href="https://tmb-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Ver Proyecto
          </a>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Landing Page - Agencia de Marketing</h3>
          <p className="text-sm mb-3">
            Página web responsive para una empresa de marketing. Incluye formulario de contacto funcional con EmailJS.
          </p>
          <a
            href="https://marketing-landing.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Ver Proyecto
          </a>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Sistema de Pedidos de Repuestos</h3>
          <p className="text-sm mb-3">
            Demo de una app para vendedores y administradores. Carrito, gestión de pedidos, estados y control de stock.
          </p>
          <a
            href="https://repuestos-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Ver Proyecto
          </a>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Tasklist con TypeScript</h3>
          <p className="text-sm mb-3">
            Lista de tareas construida con React + TS, basada en un tutorial. Persistencia en la nube vía JSONbin.
          </p>
          <a
            href="https://tasklist-ts.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Ver Proyecto
          </a>
        </div>
      </div>
    </section>
  );
}
