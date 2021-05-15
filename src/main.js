import React, { useEffect, useState } from "react"
import { Link, useParams, useHistory } from "react-router-dom";
import { getAdminProducts } from "./api";


function Main() {

    const params = useParams();
    console.log(params);

    let array = params.id.split("+");
    let userId = array[0];

    const history = useHistory();

    const [prods, setProds] = useState([]);

    useEffect(async () => {
        let adminproducts = await getAdminProducts();
        setProds(adminproducts.data.products);
    }, []);
    console.log(prods);

    return (
        <>

            <section id="main">
                <form onSubmit={(e) => {
                    e.preventDefault();

                }}>
                    <h3 class="title">Pencil Sketches</h3>
                    <div className="row">
                        {
                            prods.map((item, index) => {
                                if (item.category == "Pencil Sketches") {
                                    return <div className="col col-lg-4">
                                        {/* <div> */}
                                        <div class="card ">
                                            <div><img src={process.env.PUBLIC_URL + `/${item.product}.png`} /></div>
                                            <div ><Link to={`viewprod/${params.id}+${item.title}+${item.product}+${item.category}+${item.cost}+${item.number}`} className="btn btn-dark  ">{item.title}</Link></div>
                                        </div>
                                    </div>
                                    {/* </div> */ }
                                }
                            })
                        }
                    </div>
                    <h3 class="title">Personalised Portraits</h3>
                    <div className="row">
                        {
                            prods.map((item, index) => {
                                if (item.category == "Personalised Portraits") {
                                    return <div className="col col-lg-4">
                                        {/* <div> */}
                                        <div class="card ">
                                            <div><img src={process.env.PUBLIC_URL + `/${item.product}.png`} /></div>
                                            <div><Link to={`viewprod/${params.id}+${item.title}+${item.product}+${item.category}+${item.cost}+${item.number}`} className="btn btn-dark">{item.title}</Link></div>
                                        </div>
                                    </div>
                                    {/* </div> */ }
                                }
                            })
                        }
                    </div>
                    <h3 class="title"> Forms</h3>
                    <div className="row">
                        {
                            prods.map((item, index) => {
                                if (item.category == " Forms") {
                                    return <div className="col col-lg-4">
                                        {/* <div> */}
                                        <div class="card ">
                                            <div><img src={process.env.PUBLIC_URL + `/${item.product}.png`} /></div>
                                            <div ><Link to={`viewprod/${params.id}+${item.title}+${item.product}+${item.category}+${item.cost}+${item.number}`} className="btn btn-dark  ">{item.title}</Link></div>
                                        </div>
                                    </div>
                                    {/* </div> */ }
                                }
                            })
                        }
                    </div>
                    <h3 class="title">Silhouette</h3>
                    <div className="row">
                        {
                            prods.map((item, index) => {
                                if (item.category == "Silhouette") {
                                    return <div className="col col-lg-4">
                                        {/* <div> */}
                                        <div class="card ">
                                            <div><img src={process.env.PUBLIC_URL + `/${item.product}.png`} /></div>
                                            <div ><Link to={`viewprod/${params.id}+${item.title}+${item.product}+${item.category}+${item.cost}+${item.number}`} className="btn btn-dark  ">{item.title}</Link></div>
                                        </div>
                                    </div>
                                    {/* </div> */ }
                                }
                            })
                        }
                    </div>
                    <h3 class="title">Mandala</h3>
                    <div className="row">
                        {
                            prods.map((item, index) => {
                                if (item.category == "Mandala") {
                                    return <div className="col col-lg-4">
                                        {/* <div> */}
                                        <div class="card ">
                                            <div><img src={process.env.PUBLIC_URL + `/${item.product}.png`} /></div>
                                            <div ><Link to={`viewprod/${params.id}+${item.title}+${item.product}+${item.category}+${item.cost}+${item.number}`} className="btn btn-dark  ">{item.title}</Link></div>
                                        </div>
                                    </div>
                                    {/* </div> */ }
                                }
                            })
                        }
                    </div>
                    <h3 class="title">Painting</h3>
                    <div className="row">
                        {
                            prods.map((item, index) => {
                                if (item.category == "Painting") {
                                    return <div className="col col-lg-4">
                                        {/* <div> */}
                                        <div class="card ">
                                            <div><img src={process.env.PUBLIC_URL + `/${item.product}.png`} /></div>
                                            <div ><Link to={`viewprod/${params.id}+${item.title}+${item.product}+${item.category}+${item.cost}+${item.number}`} className="btn btn-dark  ">{item.title}</Link></div>
                                        </div>
                                    </div>
                                    {/* </div> */ }
                                }
                            })
                        }
                    </div>
                    <h3 class="title">Theme-based</h3>
                    <div className="row">
                        {
                            prods.map((item, index) => {
                                if (item.category == "Theme-based") {
                                    return <div className="col col-lg-4">
                                        {/* <div> */}
                                        <div class="card ">
                                            <div><img src={process.env.PUBLIC_URL + `/${item.product}.png`} /></div>
                                            <div ><Link to={`viewprod/${params.id}+${item.title}+${item.product}+${item.category}+${item.cost}+${item.number}`} className="btn btn-dark  ">{item.title}</Link></div>
                                        </div>
                                    </div>
                                    {/* </div> */ }
                                }
                            })
                        }
                    </div>
                </form>
                <div className="col col-lg-3 center ">
                    <Link to={`/c/${userId}`} className="btn btn-light pinkbutton m-2">Go to Cart</Link>
                </div>
            </section>
        </>
    )
}

export default Main;