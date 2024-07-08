import React from 'react'

export default function Quote({text, text2, author}) {
  return (
    <>
    <section className=" w-full h-aboutHeight bg-blue-200 text-center flex items-center justify-center flex-col">
      <p className=" text-xs mb-3 leading-6 w-2/3 lg:w-1/3">{text}</p>
      <p className=" text-xs mb-3 leading-5 w-2/3 lg:w-1/3 italic">{text2}</p>
      <p className=" text-base font-medium text-orange-500">{author}</p>
    </section>
    </>
  )
}
