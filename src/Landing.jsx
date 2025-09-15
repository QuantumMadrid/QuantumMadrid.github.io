export default function Landing() {
  // Countdown to event start (Nov 7, 2025 17:00 Europe/Madrid)
  const target = new Date('2025-11-07T17:00:00+01:00');
  const now = new Date();
  const ms = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Top bar */}
      <header className="w-full border-b border-white/10 bg-gradient-to-r from-[#0f62fe] via-[#0b5fff] to-[#002d9c]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Placeholder for Qiskit/IBM/UPM/Quantum Madrid logos */}
            <div className="flex items-center gap-2">

              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[10px]">Quantum Madrid</div>
            </div>
            <span className="ml-2 text-sm md:text-base font-medium tracking-wide">Qiskit Fall Fest — Madrid 2025</span>
          </div>
          <a href="#register" className="rounded-2xl bg-white text-neutral-900 px-4 py-2 text-sm font-semibold hover:opacity-90">Register</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,98,254,0.25),rgba(0,0,0,0))]" />
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">Hackathon Quantum Madrid × UPM</h1>
              <p className="mt-4 text-lg text-white/80 max-w-prose">Un fin de semana para aprender, construir y demostrar aplicaciones cuánticas reales con <strong>Qiskit</strong> y partners académicos e industriales. Keynotes, zona de trabajo, y stands. Abierto a principiantes y perfiles avanzados.</p>
              <ul className="mt-6 text-white/80 space-y-2">
                <li>📅 <strong>7–9 de noviembre de 2025</strong> (vie–dom)</li>
                <li>📍 <strong>UPM — CIU / DOMO UPM</strong> (pendiente de confirmación) </li>
                
              </ul>
              <div className="mt-8 flex gap-3">
                <a href="#register" className="rounded-2xl bg-[#0f62fe] px-5 py-3 font-semibold hover:bg-[#0043ce]">Apúntate</a>
                <a href="#challenges" className="rounded-2xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/5">Ver retos</a>
              </div>
              {ms > 0 && (
                <div className="mt-6 text-white/70 text-sm">Comienza en <span className="font-semibold text-white">{days}d {hours}h {minutes}m</span></div>
              )}
            </div>
            <div className="relative">
              <div className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="text-white/60">Formato</div>
                    <div className="mt-1 font-semibold">Keynotes + Hackathon</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="text-white/60">Tecnologías</div>
                    <div className="mt-1 font-semibold">Qiskit, SDKs QKD/QRNG, simuladores</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="text-white/60">Nivel</div>
                    <div className="mt-1 font-semibold">Beginner → Advanced</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="text-white/60">Plazas</div>
                    <div className="mt-1 font-semibold">70–100 participantes</div>
                  </div>
                </div>
                <p className="mt-4 text-xs text-white/60">* Se habilitará Wi‑Fi, proyector y streaming para conexión con IBM. Requisitos logísticos por confirmar con UPM.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">Agenda (borrador)</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="font-semibold">Viernes 7 nov</h3>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                <li>• Registro & bienvenida</li>
                <li>• Keynotes intro (Qiskit 101, proyectos)</li>
                <li>• Formación de equipos & kick-off</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="font-semibold">Sábado 8 nov</h3>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                <li>• Hackathon (full day)</li>
                <li>• Charlas relámpago / stands partners</li>
                <li>• Mentoría técnica</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="font-semibold">Domingo 9 nov</h3>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                <li>• Último sprint</li>
                <li>• Demos & pitching</li>
                <li>• Deliberación & premios (mediodía)</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-xs text-white/60">* El horario definitivo se publicará tras cerrar espacio y logística.</p>
        </div>
      </section>

      {/* Challenges */}
      <section id="challenges" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">Challenges & Temáticas</h2>
          <p className="mt-3 text-white/80 max-w-3xl">Puedes elegir retos propuestos por IBM y partners, o presentar tu propia idea. También habrá líneas sugeridas por los equipos locales.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {/* Challenge: Protein Structure (Cleveland Clinic) */}
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <div className="text-sm text-white/60">Cleveland Clinic — con Dan Blankenberg</div>
              <h3 className="mt-1 text-xl font-semibold">Protein Structure Prediction with Quantum Computing</h3>
              <p className="mt-2 text-white/80 text-sm">Predecir la estructura 3D de proteínas desde la secuencia. Los métodos AI (e.g., AlphaFold) fallan con secuencias sin homólogos; los enfoques físico‑basados son costosos en clásico. Explora pipelines híbridos quantum‑classical para nuevos espacios de búsqueda.</p>
              <ul className="mt-3 text-white/70 text-sm list-disc list-inside">
                <li>Objetivo: prototipos que integren Qiskit en workflows de modelado</li>
                <li>Resultados esperados: benchmarks y ablations vs. baseline clásica</li>
              </ul>
            </div>

            {/* Challenge: QKD (RPI) */}
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <div className="text-sm text-white/60">Rensselaer Polytechnic Institute — con Nathaniel DePue</div>
              <h3 className="mt-1 text-xl font-semibold">Quantum Key Distribution: BB84 en práctica</h3>
              <p className="mt-2 text-white/80 text-sm">La criptografía pública (RSA/ECC) se ve amenazada por la computación cuántica. QKD aprovecha propiedades cuánticas para acordar claves seguras con detección de intrusiones. Implementa y evalúa <span className="whitespace-nowrap">BB84</span> con simulación de canal y análisis de tasas de error.</p>
              <ul className="mt-3 text-white/70 text-sm list-disc list-inside">
                <li>Objetivo: stack de sifting, reconciliación y privacidad</li>
                <li>Resultados esperados: curvas QBER y throughput vs. ruido</li>
              </ul>
            </div>

            {/* Theme: Cripto & Comms */}
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <div className="text-sm text-white/60">UPM — SDKs de simulación</div>
              <h3 className="mt-1 text-xl font-semibold">Criptografía & Comunicaciones cuánticas (QKD/QRNG)</h3>
              <p className="mt-2 text-white/80 text-sm">Retos de comunicaciones seguras: generación de claves y aleatoriedad cuántica. Simulación y prototipado de protocolos con integración Qiskit.</p>
            </div>

            {/* Theme: Open track */}
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <div className="text-sm text-white/60">Open track</div>
              <h3 className="mt-1 text-xl font-semibold">Optimización, ML cuántico, química, simulación</h3>
              <p className="mt-2 text-white/80 text-sm">Explora QAOA, VQE, addons de Qiskit (p.ej., SQD), o pipelines híbridos quantum+HPC. Trae un problema de tu empresa o grupo de investigación.</p>
            </div>
          </div>

          <div className="mt-6 text-xs text-white/60">* IBM propone desafíos adicionales; se anunciarán en la semana previa. Los equipos también podrán proponer su propio reto.</div>
        </div>
      </section>

      {/* Preinscripción */}
      <section id="register" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">Premios</h2>
          <p className="mt-3 text-white/80 max-w-3xl">Qiskit Swagg </p>
          <p className="mt-4 text-xs text-white/60">Se confirmaran los premios definitivos posteriormente.</p>
        </div>
      </section>

      {/* Preinscripción */}
      <section id="register" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">Preinscripción</h2>
          <p className="mt-3 text-white/80 max-w-3xl">Indica si participas solo o en equipo y propone (opcional) un tema o problema. Usaremos esta info para ayudarte a formar equipo y a priorizar mentoría.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="rounded-2xl bg-[#0f62fe] px-5 py-3 font-semibold hover:bg-[#0043ce]" href="https://www.meetup.com/" target="_blank">Ir a la página de Meetup</a>
            <a className="rounded-2xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/5" href="#faq">FAQ</a>
          </div>
          <p className="mt-4 text-xs text-white/60">También anunciaremos actualizaciones en Discord y redes sociales.</p>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">Organizan & Colaboran</h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* ['IBM Quantum','UPM','Quantum Madrid','QCentroid','ACM UPM','EY','CSIC','UC3M','Nebrija','UAM','Repsol','BBVA','Santander','Fujitsu','Multiverse','Global Data Quantum','Kipu Quantum','Qubiz','Tecnalia'] */}
            {['Quantum Madrid', 'UPM', 'QCentroid'].map((n)=> (
              <div key={n} className="rounded-2xl bg-white/5 border border-white/10 h-20 flex items-center justify-center text-white/80 text-sm">{n}</div>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/60">* Logos provisionales. Se actualizarán tras confirmación de partners.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6 text-white/80 text-sm">
            <div>
              <h3 className="font-semibold text-white">¿Quién puede participar?</h3>
              <p className="mt-2">Estudiantes, developers y profesionales. No se requiere experiencia previa: habrá materiales 101 y mentoría.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">¿Qué necesito traer?</h3>
              <p className="mt-2">Portátil, cargador y cuenta en IBM Quantum. Recomendado preparar entorno con antelación para evitar la “battle of the install”.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">¿Cómo me entero de las sesiones previas?</h3>
              <p className="mt-2">Publicaremos recordatorios en Meetup.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">¿Habrá certificados?</h3>
              <p className="mt-2">Sí, se emitirán certificados de participación (formato IBM / organización). Habrá consentimiento de imagen/vídeo RGPD.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-white/60 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div>© 2025 Quantum Madrid × UPM — Qiskit Fall Fest Madrid</div>
          <div className="flex gap-4">
            <a href="#register" className="hover:text-white">Registro</a>
            <a href="#challenges" className="hover:text-white">Retos</a>
            <a href="#agenda" className="hover:text-white">Agenda</a>
            <a href="#partners" className="hover:text-white">Partners</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
