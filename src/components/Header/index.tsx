import React from 'react'

const Header: React.FC = () => (
  <div className="w-full h-[--header-height-mobile] lg:h-[--header-height] flex flex-col items-center justify-center gap-2 bg-[url('/baner.webp')] bg-no-repeat bg-cover bg-center">
    <h1 className="text-3xl font-bold">Projekt XYZ</h1>
    <p className="text-xl">TERMIN: 20.02.25</p>
    <p>GDAŃSK UL. OPOLSKA</p>
    <button className="bg-red-700 text-primary px-4 py-2 rounded">zobacz więcej</button>
  </div>
)

export default Header
