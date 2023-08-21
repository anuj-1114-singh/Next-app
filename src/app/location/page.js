"use client"
import Script from "next/script"


export default function page() {
    return (
        <>
            <Script
                src="/location.js"
                onLoad={() => {
                    console.warn("hiii");
                }}
            />
            <div>page</div>

        </>

    )
}
