import React, { JSX } from "react"

const Feature = ({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: JSX.Element
}) => {
  return (
    <div className="p-5 border rounded-lg shadow-md">
      <h4 className="mb-2 font-semibold flex items-center gap-2">
        {icon}
        {title}
      </h4>
      <p>{description}</p>
    </div>
  )
}

export default Feature
