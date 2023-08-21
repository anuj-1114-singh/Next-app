
'use client'
import { useEffect, useState } from 'react'

export default function page() {
    const [product, setProduct] = useState([])
    useEffect(async () => {
        const data1 = await fetch("https://dummyjson.com/products");
        const data = await data1.json();
        setProduct(data.products);
        console.log(data);
    }, [])

    return (
        <div>
            <div>page</div>
            {

                product.map((item) => {
                    return (<h3 key={item.id}> item id:{item.title} and descriotion :{item.description}</h3>)
                })

            }
        </div>
    )
}
