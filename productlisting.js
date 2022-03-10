import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Home from './Home';
import { setproducts } from "../../services/Redux/Actions/productaction";
import { getData } from "../../services/Redux/Actions/fetchData";


const ProductListing = () => {
    const products = useSelector((state => state.appApi.apiData));
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData())
    }, [])

    console.log("products ", products);
    return (
        <div>
            <Home/>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Img</th>
                </thead>
                <tbody>
                {products?.map((item,index)=>(<tr>
                    <td>{item.title}</td>
                    <td><img src={item.image} height={60} /></td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    );
}
export default ProductListing

