"use client"
import Link from 'next/link'
import React from 'react'
import UserContext from '../context/userContext'
import { useContext } from 'react'
import { useRouter } from "next/navigation";
import { logout } from '../services/userService'

export const CustomNavbar = () => {
    const context = useContext(UserContext);
    const router = useRouter();

    async function doLogout() {
        try {
            const result = await logout();
            console.log(result);
            context.setUser(undefined);
            router.push("/");
        } catch (error) {
            console.log(error);
            toast.error("Logout Error");
        }
    }

    console.log(context);
    return (
        <nav className="bg-blue-600 h-12 py-2 px-9 flex justify-between items-center">
            <div>
                <h1 className="brand text-2xl ">
                    <Link href="#!">Brand</Link>
                </h1>
            </div>
            <div>
                <ul className='flex space-x-5 '>
                    {context.user && (
                        <>
                            <li>
                                <Link href={"/"} className="hover:text-blue-200">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/add-task" className="hover:text-blue-200">
                                    Add Task
                                </Link>
                            </li>
                            <li>
                                <Link href={"/show-tasks"} className="hover:text-blue-200">
                                    Show Tasks
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
            <div>
                <ul className='flex space-x-5'>
                    {context.user && (
                        <>
                            <li>
                                <Link href={"#!"}>{context.user.name}</Link>
                            </li>
                            <li>
                                <button onClick={doLogout}>Logout</button>
                            </li>
                        </>
                    )}

                    {!context.user && (
                        <>
                            <li>
                                <Link href="/login">Login</Link>
                            </li>
                            <li>
                                <Link href="/signup">Signup</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    )
}
