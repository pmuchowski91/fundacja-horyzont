import React from 'react'

type Props = {
  title: string
  id: string
  children: React.ReactNode
}

const Page: React.FC<Props> = ({ title, id, children }) => (
  <div
    id={id}
    className="w-full flex flex-col flex-grow pt-[--navbar-height] -mt-[--navbar-height] px-10 lg:px-20 xl:px-40 2xl:px-60"
  >
    <h1 className="pt-10 text-3xl font-bold uppercase self-center pb-4">{title}</h1>
    <div className="h-full flex flex-col flex-grow">{children}</div>
    <hr className="h-px my-4 md:my-10 bg-secondary border-0 rounded-sm"></hr>
  </div>
)

export default Page
