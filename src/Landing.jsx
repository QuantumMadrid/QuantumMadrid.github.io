export default function Landing() {
  // Countdown to event start (Nov 27, 2026 17:00 Europe/Madrid)
  const target = new Date('2026-11-27T17:00:00+01:00');
  const now = new Date();
  const ms = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);

    // Apertura de la preinscripción: 8 oct 2026, al acabar la visita guiada
  const regOpen = new Date('2026-10-08T19:15:00+02:00');
  const registrationOpen = now.getTime() >= regOpen.getTime();
  const meetupUrl = 'https://www.meetup.com/es-es/quantummadrid/events/316468534/';
  const registerUrl = ''; //  aquí la URL del formulario cuando la tenga
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Top bar */}
      <header className="w-full border-b border-white/10 bg-gradient-to-r from-[#0f62fe] via-[#0b5fff] to-[#002d9c]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logos: place quantum-madrid-icon.png and entangle-tech-hub.png in /public/logos/ (see instructions) */}
            <div className="flex items-center gap-2">
              <img src="/logos/entangle-tech-hub.png" alt="Entangle" className="w-9 h-9 rounded-xl bg-white/10 p-1.5 object-contain" />
            </div>
            <span className="ml-2 text-sm md:text-base font-medium tracking-wide">Hackathon Quantum Madrid by Entangle Tech Hub — Fall Fest 2026</span>
          </div>
          <a href="#register" className="rounded-2xl bg-white text-neutral-900 px-4 py-2 text-sm font-semibold hover:opacity-90">Preinscripción</a>
        </div>
      </header>

      {/* Aviso de apertura de preinscripción */}
      <div className="w-full bg-amber-400/10 border-b border-amber-400/30">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
          <span className="font-semibold text-amber-200">
            {registrationOpen ? '✅ ¡Preinscripción abierta!' : '🚀 La preinscripción se abre el 8 de octubre'}
          </span>
          <span className="text-amber-100/80">
            La anunciamos en nuestro meetup, justo después de la visita guiada a “Revolución Cuántica” en Espacio Fundación Telefónica.
          </span>
          <a href={meetupUrl} target="_blank" rel="noreferrer"
             className="sm:ml-auto whitespace-nowrap underline underline-offset-2 text-amber-200 hover:text-white">
            Ver el meetup →
          </a>
        </div>
      </div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,98,254,0.25),rgba(0,0,0,0))] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">Hackathon Quantum Madrid by Entangle Tech Hub</h1>
              <p className="mt-4 text-lg text-white/80 max-w-prose">Un fin de semana para aprender, construir y demostrar aplicaciones cuánticas reales con <strong>Qiskit</strong> y partners académicos e industriales. Keynotes, zona de trabajo y mentoría. Abierto a principiantes y perfiles avanzados.</p>
              <ul className="mt-6 text-white/80 space-y-2">
                <li>📅 <strong>27–29 de noviembre de 2026</strong> (vie–dom)</li>
                <li>📍 <strong>42 Madrid — Fundación Telefónica</strong></li>
                <li>📝 Preinscripción: <strong>se abre el 8 de octubre de 2026</strong></li>
                <li>📍<a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0xd422bda71f91819:0xf18dccc1ef92608c?sa=X&ved=1t:8290&ictx=111" target="_blank" rel="noreferrer" className="underline hover:text-white">Distrito Telefónica, Edificio Norte 3, 28050 Madrid</a></li>
              </ul>
              <div className="mt-8 flex gap-3">
                <a href="#register" className="rounded-2xl bg-[#0f62fe] px-5 py-3 font-semibold hover:bg-[#0043ce]">Preinscripción</a>
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
                    <div className="mt-1 font-semibold">100–150 participantes</div>
                  </div>
                </div>
                <p className="mt-4 text-xs text-white/60">* Se habilitará Wi‑Fi, proyector y streaming para conexión con IBM. Requisitos logísticos por confirmar con 42 Madrid.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">Agenda</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl bg-white/5 border border-fuchsia-500/30 ring-1 ring-fuchsia-500/20 shadow-[0_0_30px_-10px_rgba(217,70,239,0.5)] p-6 transition hover:translate-y-0.5 hover:shadow-[0_0_40px_-10px_rgba(217,70,239,0.7)] backdrop-blur">
              <h3 className="font-semibold text-fuchsia-300 flex items-center gap-2">Viernes 27 nov <span className="text-[10px] px-2 py-0.5 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/30">Kickoff</span></h3>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                <li>👋 16:30-17:00 — Llegada y registro</li>
                <li>17:00-17:30 — 🎤 Sesión de bienvenida</li>
                <li>17:30-18:30 — 🎓 Keynote Quantum Madrid by Entangle</li>
                <li>18:30-19:15 — 👥 Configuración de equipos</li>
                <li>19:15-19:30 — Cierre y networking</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-white/5 border border-sky-500/30 ring-1 ring-sky-500/20 shadow-[0_0_30px_-10px_rgba(14,165,233,0.5)] p-6 transition hover:translate-y-0.5 hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.7)] backdrop-blur">
              <h3 className="font-semibold text-sky-300 flex items-center gap-2">Sábado 28 nov <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/20 border border-sky-500/30">Hackathon</span></h3>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                <li>09:00-09:30 — Recepción y desayuno</li>
                <li>09:30-09:45 — 🎯 Presentación de retos</li>
                <li>09:45-13:00 — 🧑‍💻 Hackathon + mentoría </li>
                <li>13:00-14:00 — 🍽️ Comida</li>
                <li>14:00-17:30 — 🧑‍💻 Hackathon + mentoría </li>
                <li>17:30-18:00 — ☕ Café/refrescos</li>
                <li>18:00-20:30 —🧑‍💻 Hackathon + mentoría </li>
                <li>20:30-∞ — Espacio disponible para hackathon</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-white/5 border border-violet-500/30 ring-1 ring-violet-500/20 shadow-[0_0_30px_-10px_rgba(139,92,246,0.5)] p-6 transition hover:translate-y-0.5 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.7)] backdrop-blur">
              <h3 className="font-semibold text-violet-300 flex items-center gap-2">Domingo 29 nov <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/20 border border-violet-500/30">Final & Premios</span></h3>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                <li>09:00-09:30 — Recepción y desayuno</li>
                <li>09:30-11:00 — 🏁 Sprint final </li>
                <li>11:00-11:20 — 🎤 Keynote Quantum Madrid by Entangle</li>
                <li>11:20-13:00 — 🧪 Demos, pitches, deliberación</li>
                <li>13:00-13:30 — 🏆 Entrega de premios y cierre</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-xs text-white/60 italic">ℹ️ Sponsors y ponentes aún por confirmar — el horario puede modificarse por temas de espacio y logística.</p>
        </div>
      </section>

      {/* Challenges */}
      <section id="challenges" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">Challenges & Temáticas</h2>
          <p className="mt-3 text-white/80 max-w-3xl">
            Este año traemos los retos <strong>BasQ (Basque Quantum) x IBM Quantum</strong>: tres tracks inspirados en hitos reales de la computación cuántica de la última década. Cada track admite tres niveles de dificultad —principiante, intermedio y avanzado— para que puedas entrar donde te sientas cómodo, y se valora comparar simulación ideal con ejecución en hardware cuántico real.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {/* Track 1: Quantum chemistry */}
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <div className="text-sm text-white/60">Track 1 — BasQ x IBM Quantum</div>
              <h3 className="mt-1 text-xl font-semibold">Química cuántica: el mapa energético de una molécula</h3>
              <p className="mt-2 text-white/80 text-sm">
                Inspirado en la demostración de IBM Quantum (2017) de un Variational Quantum Eigensolver eficiente en hardware. El objetivo es calcular y representar la superficie de energía potencial (PES) de moléculas, desde ligeras hasta más pesadas.
              </p>
              <ul className="mt-3 text-white/70 text-sm list-disc list-inside">
                <li>Beginner: PES del ion HeH⁺</li>
                <li>Intermediate: moléculas mayores (LiH, BeH₂) con menos recursos cuánticos</li>
                <li>Advanced: técnicas más allá de un único ansatz (p. ej. SQD) en sistemas fuertemente correlacionados</li>
              </ul>
            </div>

            {/* Track 2: Quantum optimization / QML */}
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <div className="text-sm text-white/60">Track 2 — BasQ x IBM Quantum</div>
              <h3 className="mt-1 text-xl font-semibold">Optimización cuántica / QML</h3>
              <p className="mt-2 text-white/80 text-sm">
                Inspirado en la introducción de QAOA (2014) y su posterior demostración a gran escala en hardware real de IBM. Resuelve un problema de optimización real usando técnicas cuánticas, de machine learning, o ambas.
              </p>
              <ul className="mt-3 text-white/70 text-sm list-disc list-inside">
                <li>Beginner: selección de cartera con QAOA</li>
                <li>Intermediate: instancia más grande o restringida; QAOA vs. QML, con baseline clásico</li>
                <li>Advanced: trainability (barren plateaus), términos de orden superior (HUBO) y múltiples restricciones</li>
              </ul>
            </div>

            {/* Track 3: Hamiltonian simulation */}
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <div className="text-sm text-white/60">Track 3 — BasQ x IBM Quantum</div>
              <h3 className="mt-1 text-xl font-semibold">Simulación Hamiltoniana</h3>
              <p className="mt-2 text-white/80 text-sm">
                Inspirado en el famoso "utility paper" de IBM, que demostró un modelo kicked-Ising a gran escala con mitigación de errores. Escala el modelo de Ising de campo transverso (TFIM) desde unos pocos qubits hasta una realización de 100+ qubits.
              </p>
              <ul className="mt-3 text-white/70 text-sm list-disc list-inside">
                <li>Beginner: correlaciones en un TFIM de pocos qubits</li>
                <li>Intermediate: cadena 1D más larga o evolución más extensa, con mitigación de errores</li>
                <li>Advanced: red 2D o cadena 1D grande, con validación clásica de los resultados</li>
              </ul>
            </div>

            {/* More challenges coming */}
            <div className="rounded-3xl bg-white/5 border border-dashed border-white/20 p-6 flex flex-col justify-center">
              <div className="text-sm text-white/60">🔜 Próximamente</div>
              <h3 className="mt-1 text-xl font-semibold">Más challenges y temáticas en camino</h3>
              <p className="mt-2 text-white/80 text-sm">
                Iremos añadiendo más challenges y temáticas a medida que se vayan confirmando y según nos indiquen las empresas y organizaciones participantes.
              </p>
            </div>
          </div>

          <div className="mt-6 text-xs text-white/60">
            * Los equipos también podrán proponer su propio reto.
            <br />
            * Las descripciones aquí son resumidas; se extenderán con más detalle antes del hackathon.
          </div>
        </div>
      </section>

      {/* Prizes & Certificates */}
      <section id="prizes" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">Premios y Certificados</h2>
            <p className="mt-3 text-white/80 max-w-3xl"></p>


          {/* Theme: Open track */}
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <div className="text-sm text-white/60">🎁 Premios:</div>
              <h3 className="mt-1 text-xl font-semibold">Qiskit Swagg y sorpresas cortesía de nuestros partners.</h3>
            </div>
           <p className="mt-3 text-white/80 max-w-3xl">
             <span className="font-semibold"></span>
          </p>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <div className="text-sm text-white/60">📜 Certificados:</div>
              <h3 className="mt-1 text-xl font-semibold"> Todos los participantes recibirán un certificado oficial de participación, y los equipos ganadores obtendrán un certificado especial firmado por <span className="font-semibold">IBM</span>.</h3>
            </div>

          <p className="mt-4 text-xs text-white/60">
            * Los premios y reconocimientos adicionales se confirmarán próximamente.
          </p>
        </div>
      </section>

      {/* Preinscripción */}
      <section id="register" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">Preinscripción</h2>
          <p className="mt-3 text-white/80 max-w-3xl">
            <strong>La preinscripción se abre el jueves 8 de octubre de 2026</strong>, durante nuestro meetup de Quantum Madrid, justo después de la visita guiada a la exposición <em>“Revolución Cuántica”</em> en Espacio Fundación Telefónica (C/ Fuencarral 3, 17:15–19:15). Ahí daremos el pistoletazo de salida y compartiremos el enlace del formulario.
          </p>
          <p className="mt-3 text-white/80 max-w-3xl">Indica si participarás solo o en equipo y propón (opcional) un tema o problema — usaremos esta info para ayudarte a formar equipo y a priorizar mentoría.</p>
          <div className="mt-6 flex flex-wrap gap-3 items-center">
            {registrationOpen && registerUrl ? (
              <a className="rounded-2xl bg-[#0f62fe] px-5 py-3 font-semibold hover:bg-[#0043ce]" href={registerUrl} target="_blank" rel="noreferrer">✅ Preinscribirme</a>
            ) : (
              <span className="rounded-2xl bg-white/10 border border-white/20 px-5 py-3 font-semibold text-white/80">🗓️ Preinscripción — abre el 8 de octubre</span>
            )}
            <a className="rounded-2xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/5" href={meetupUrl} target="_blank" rel="noreferrer">Apuntarme a la visita del 8 de octubre</a>
            <a className="rounded-2xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/5" href="#faq">FAQ</a>
          </div>
          <p className="mt-4 text-xs text-white/60">¿No puedes venir al meetup? Publicaremos la apertura y todas las actualizaciones en nuestras redes y canales de Quantum Madrid / Entangle Tech Hub.</p>          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <span className="rounded-2xl bg-white/10 border border-white/20 px-5 py-3 font-semibold text-white/80">🔜 Preinscripción — próximamente</span>
            <a className="rounded-2xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/5" href="#faq">FAQ</a>
          </div>
          <p className="mt-4 text-xs text-white/60">Anunciaremos la apertura de la preinscripción y todas las actualizaciones a través de nuestras redes y canales de Quantum Madrid / Entangle Tech Hub.</p>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">Organizan & Colaboran</h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-2xl bg-white/5 border border-white/10 h-20 flex items-center justify-center p-4">
              <img src="/logos/quantum-madrid-icon.png" alt="Quantum Madrid" className="max-h-10 object-contain" />
              <span className="ml-2 text-white/80 text-sm">Quantum Madrid</span>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 h-20 flex items-center justify-center p-4">
              <img src="/logos/entangle-tech-hub.png" alt="Entangle Tech Hub" className="max-h-10 object-contain" />
            </div>
            <div className="rounded-2xl bg-white border border-white/10 h-20 flex items-center justify-center p-4">
              <img src="/logos/42-madrid.png" alt="42 Madrid — Fundación Telefónica" className="max-h-12 object-contain" />
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 h-20 flex items-center justify-center p-4">
              <img src="/logos/qcentroid_logo_white.png" alt="Qcentroid" className="max-h-10 object-contain" />
              <span className="ml-2 text-white/80 text-sm"></span>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 h-20 flex items-center justify-center p-4">
              <img src="/logos/ibm-quantum.png" alt="IBM Quantum" className="max-h-8 object-contain" />
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 h-20 flex items-center justify-center p-4">
              <img src="/logos/qiskit.png" alt="Qiskit" className="max-h-10 object-contain" />
              <span className="ml-2 text-white/80 text-sm">Qiskit</span>
            </div>
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
              <h3 className="font-semibold text-white">¿Cómo me entero de las novedades?</h3>
              <p className="mt-2">Publicaremos recordatorios y actualizaciones a través de nuestras redes y canales de Quantum Madrid / Entangle Tech Hub.</p>
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
          <div>© 2026 Quantum Madrid × Entangle Tech Hub — Hackathon Quantum Madrid, 42 Madrid (Fundación Telefónica)</div>
          <div className="flex gap-4">
            <a href="#register" className="hover:text-white">Preinscripción</a>
            <a href="#challenges" className="hover:text-white">Retos</a>
            <a href="#agenda" className="hover:text-white">Agenda</a>
            <a href="#partners" className="hover:text-white">Partners</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
