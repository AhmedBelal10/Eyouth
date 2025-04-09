import React from 'react'
import { useParams, useNavigate, replace } from 'react-router-dom'

const SingleProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleClick = () => {
        console.log("hello ahmed i will navigate you now to products");
        setTimeout(() => {
            navigate(
                "/products",
                {
                    replace: true,
                    state: { from: "SingleProduct" }
                }
            );
        }, 2000);
    }

    return (
        <>
            <div>SingleProduct number : {id}</div>
            <button onClick={handleClick}>navigate Now</button>

            <button onClick={()=> navigate(-1)}>back</button>
        </>

    )
}

export default SingleProduct