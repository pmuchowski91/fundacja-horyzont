import React from 'react'
import Image from 'next/image'

type Props = {
  name: string
  imageSrc: string
  circleBorderPercent: number
  children: React.ReactNode
}

const AboutUs: React.FC<Props> = ({ name, imageSrc, circleBorderPercent, children }) => (
  <div className="flex py-5">
    <div className="p-2">
      <div className="relative w-[250px] h-[250px]">
        <svg
          className="rotate-[180deg] absolute size-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            className="stroke-current text-secondary"
            strokeWidth="2"
            strokeDasharray={`${(300 * circleBorderPercent) / 100} ${(300 * (100 - circleBorderPercent)) / 100}`}
            strokeLinecap="round"
          ></circle>
        </svg>
        <div className="p-4">
          <Image alt={name} height={250} width={250} src={imageSrc} />
        </div>
      </div>
    </div>
    <div className="flex flex-col ml-10 mt-10">
      <h1 className="text-xl font-bold uppercase mb-2">{name}</h1>
      {children}
    </div>
  </div>
)

export default AboutUs
