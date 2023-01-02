import React from 'react'

const Button = (p) => {
    return (
        <button className={" mt-3 py-2 sm:py-3  w-full rounded-lg border-blue-700 bg-blue-600 hover:bg-blue-500 text-white font-medium"
            + " " + p.className} onClick={p.onClick}>{p.children}</button>
    )
}

export default Button