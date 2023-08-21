'use client'
import Link from "next/link"
import "./login.css"
import { usePathname } from 'next/navigation'

export default function layout({ children }) {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <div>
            {
                pathname === "/login/teacherlogin" ? "" :
                    <ul className="ul-main">
                        <li><h4>Login NavBar</h4></li>
                        <li><Link href='/login'>About</Link> </li>
                        <li><Link href='/login/studentlogin'>Student About</Link></li>
                        <li><Link href='/login/teacherlogin'>Teacher About</Link></li>
                    </ul>
            }
            {children}
        </div>
    )

}
