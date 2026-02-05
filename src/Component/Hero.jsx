import React from 'react'
import Button from './Button.jsx'

function Hero() {
  return (
    <>
    <div className="m-auto max-w-240 text-center py-50  font-bold">
        <h1 className="text-7xl font-serif max-[500px]:text-4xl">
          The Best Way to{" "}
          <span className="bg-blue-950 text-white p-2 rounded-2xl max-[500px]:text-5xl">Review</span>{" "}
          Creative Assets
        </h1>

        <p className="text-l font-medium my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          optio, possimus est earum fuga modi, nam delectus, dicta et saepe ea
          laboriosam provident vero nobis aspernatur beatae odit id
          consequuntur.
        </p>

        <div className="mt-20 text-3xl text-white max-[500px]:text-sm">
          <Button title="Join Subscription" />
        </div>
      </div>
    </>
  )
}

export default Hero