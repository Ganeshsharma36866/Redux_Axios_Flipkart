import React, { useEffect } from "react";
import ProductListing from "./productlisting";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import offer from '../../assets/images/offer.jpg'
import appliance from '../../assets/images/appliance.jpg'
import electronics from '../../assets/images/electronics.jpg'
import fashions from '../../assets/images/fashions.jpg'
import home from '../../assets/images/home.jpg'
import phone from '../../assets/images/phone.jpg'
import second from '../../assets/images/second.jpg'
import toys from '../../assets/images/toys.jpg'
import travel from '../../assets/images/travel.jpg'
import c1 from '../../assets/images/c1.jpg'
import c2 from '../../assets/images/c2.jpg'
import c3 from '../../assets/images/c3.jpg'
import bag from '../../assets/images/bag.jpg'
import { useSelector, useDispatch } from "react-redux"
import Api from "../../services/Api";
const Home = () => {
    //const products = useSelector((state => state.allProudcts.product));
    //const { it, title,image,price } = products[0]
    const products = useSelector((state) => state.allProducts.products)
    console.log("homes", products)
    return (
    
        <div className="container-fluid">
          
            <div className="padsecond mt-3">
                <ul className="ulhome">
                    <li><img src={offer} className="imghome" alt="img" /><br />
                        Top Offers</li>
                    <li><img src={second} alt="img" className="imghome" /><br />Grocery</li>
                    <li><img src={phone} alt="img" className="imghome" /><br />Mobiles</li>
                    <li><img src={fashions} alt="img" className="imghome" /><br />Fashion </li>
                    <li><img src={electronics} alt="img" className="imghome" /><br />Electronics</li>
                    <li><img src={home} alt="img" className="imghome" /><br />Electronics</li>
                    <li><img src={appliance} alt="img" className="imghome" /><br />Appliances</li>
                    <li><img src={travel} alt="img" className="imghome" /><br />Travel</li>
                    <li><img src={toys} alt="img" className="imghome" /><br />Boys,Toys,& More</li>
                </ul>
            </div>
            <div className="">
                <Carousel>
                    <div>
                        <img src={c1} />
                    </div>
                    <div>
                        <img src={c2} />
                    </div>
                    <div>
                        <img src={c3} />
                    </div>
                </Carousel>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-3 border-0">
                        <div className="card">
                           

                        </div>
                    </div>
                    <div className="col-3 border-0" >
                        <div className="card">
                            
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">

                        </div>
                    </div>
                    <div className="col-3" >

                        <div className="card">
                            <img src={phone} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;