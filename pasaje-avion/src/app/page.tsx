export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-orange-500 p-4">
      {/* === RECUADRO PRINCIPAL (BOLETO) === */}
      <div className="relative bg-white rounded-2xl overflow-visible h-72 w-full max-w-5xl flex flex-col md:flex-row">
        {/* ---------- RECORTES (solo en md+) ---------- */}
        <div
          className="hidden md:block absolute z-30"
          style={{ left: '25%', top: 0, transform: 'translate(-50%, -50%)' }}
        >
          <div className="w-8 h-8 bg-orange-500 rounded-full" />
        </div>

        <div
          className="hidden md:block absolute z-30"
          style={{ left: '25%', bottom: 0, transform: 'translate(-50%, 50%)' }}
        >
          <div className="w-8 h-8 bg-orange-500 rounded-full " />
        </div>

        {/* === SECCIÓN IZQUIERDA (QR) === */}
        <div className="flex items-center justify-center px-6 py-8 border-r border-gray-400 border-dashed md:w-1/4">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=boardingpass"
            alt="QR Code"
            className="w-28 h-28 md:w-32 md:h-32"
          />
        </div>

        {/* === SECCIÓN CENTRAL (INFO) === */}
        <div className="flex flex-col justify-between px-6 md:px-10 py-6 flex-1 border-r border-gray-300">
          {/* Info superior */}
          <div className="flex justify-between items-start flex-wrap mt-1">
            <div>
              <p className="text-black text-sm">Mumbai, India</p>
              <h1 className="text-5xl font-bold tracking-wide text-black">BOM</h1>
              <p className="text-gray-400 text-xs">
                Wed, July 27<sup>th</sup> · 1:00 AM
              </p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-black text-sm">Amsterdam, Netherlands</p>
              <h1 className="text-5xl font-bold tracking-wide text-black">AMS</h1>
              <p className="text-gray-400 text-xs">
                Thu, July 27<sup>th</sup> · 8:30 AM
              </p>
            </div>
          </div>

          {/* Avión en el medio */}
          <div className="flex items-center justify-center mb-5">
            <div className="border-t border-dotted border-gray-400 w-24 md:w-32" />
            <span className="mx-2 text-black">✈</span>
            <div className="border-t border-dotted border-gray-400 w-24 md:w-32" />
          </div>

          {/* Info pasajero */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
            <div>
              <p className="text-gray-400">Passenger</p>
              <p className="font-semibold text-black">Nikita Sharma</p>
            </div>
            <div>
              <p className="text-gray-400">Seat</p>
              <p className="font-semibold text-black">4A</p>
            </div>
            <div>
              <p className="text-gray-400">Terminal</p>
              <p className="font-semibold text-black">D</p>
            </div>
            <div>
              <p className="text-gray-400">Gate</p>
              <p className="font-semibold text-black">32</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Boarding</p>
              <p className="font-bold text-black">12:40 PM</p>
            </div>
          </div>
        </div>

        {/* === SECCIÓN DERECHA (BOARDING PASS) === */}
        <div className="flex flex-col items-center justify-between bg-blue-900 text-white w-[70px] py-6 rounded-r-2xl">
          <span className="text-xs tracking-widest transform -rotate-90 whitespace-nowrap mt-10">
            BOARDING PASS
          </span>
          <span className="text-yellow-300 mt-15">◆</span>
          <span className="text-xs tracking-widest transform -rotate-90 whitespace-nowrap mb-5">
            Jet Airways
          </span>
        </div>
      </div>
    </main>
  );
}
