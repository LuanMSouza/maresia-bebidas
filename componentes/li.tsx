import React from "react"

type LiProps = {
    children: React.ReactNode
}

export default function Li({ children }: LiProps) {
    return (
        <li className="p-1 px-6 m-2 bg-indigo-700 text-white rounded-xl shadow-lg shadow-black duration-200
                hover:bg-indigo-900">
            {children}
        </li>
    )
}