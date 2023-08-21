"use client"
import React from 'react'
import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className='h-40 bg-blue-500 mt-5'>
            <div className="flex p-5 justify-around">
                <div className="text-ceter flex flex-col justify-center">
                    <h1 className="text-3xl">Welcome to work manager</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, perferendis?
                    </p>
                </div>
                <div className="text-center">
                    <h1>Important links</h1>
                    <ul>
                        <li>
                            <Link href="#!">Facebook</Link>
                        </li>
                        <li>
                            <Link href="#!">YouTube</Link>
                        </li>
                        <li>
                            <Link href="#!">Twitter</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </footer>
    )
}
