import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] })

const Logo = () => {
    return (
        <div className={`${poppins.className} text-2xl uppercase`}>Rafay</div>
    )
}

export default Logo