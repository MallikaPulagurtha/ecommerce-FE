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
                    <div className="row">
                        {
                            prods.map((item, index) => {
                                if (item.category == "Pencil Sketches") {
                                    return <div>
                                        <h3 class="title">{item.category}</h3>
                                        <div className="col col-4">
                                            <div>
                                                <div class="card">
                                                    <div><img src={process.env.PUBLIC_URL + `/${item.product}.png`} /></div>
                                                    <div><Link to={`viewprod/${params.id}+${item.title}+${item.product}+${item.category}+${item.cost}+${item.number}`} className="btn btn-dark arttitle">{item.title}</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            })
                        }
                    </div>
                    <div className="row">
                        {
                            prods.map((item, index) => {
                                if (item.category == "Personalised Portraits") {
                                    return <div>
                                        <h3 class="title">{item.category}</h3>
                                        <div className="col col-4">
                                            <div>
                                                <div class="card">
                                                    <div><img src={process.env.PUBLIC_URL + `/${item.product}.png`} /></div>
                                                    <div><Link to={`viewprod/${params.id}+${item.title}+${item.product}+${item.category}+${item.cost}+${item.number}`} className="btn btn-dark arttitle">{item.category}</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            })
                        }
                    </div>
                    <div className="row">
                        {
                            prods.map((item, index) => {
                                if (item.category == "Art Forms") {
                                    return <div>
                                        <h3 class="title">{item.category}</h3>
                                        <div className="col col-4">
                                            <div>
                                                <div class="card">
                                                    <div><img src={process.env.PUBLIC_URL + `/${item.product}.png`} /></div>
                                                    <div><Link to={`viewprod/${params.id}+${item.title}+${item.product}+${item.category}+${item.cost}+${item.number}`} className="btn btn-dark arttitle">{item.category}</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            })
                        }
                    </div>
                    <div className="row">
                        {
                            prods.map((item, index) => {
                                if (item.category == "Silhouette") {
                                    return <div>
                                        <h3 class="title">{item.category}</h3>
                                        <div className="col col-4">
                                            <div>
                                                <div class="card">
                                                    <div><img src={process.env.PUBLIC_URL + `/${item.product}.png`} /></div>
                                                    <div><Link to={`viewprod/${params.id}+${item.title}+${item.product}+${item.category}+${item.cost}+${item.number}`} className="btn btn-dark arttitle">{item.category}</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            })
                        }
                    </div>
                    <div className="row">
                        {
                            prods.map((item, index) => {
                                if (item.category == "Mandala") {
                                    return <div>
                                        <h3 class="title">{item.category}</h3>
                                        <div className="col col-4">
                                            <div>
                                                <div class="card">
                                                    <div><img src={process.env.PUBLIC_URL + `/${item.product}.png`} /></div>
                                                    <div><Link to={`viewprod/${params.id}+${item.title}+${item.product}+${item.category}+${item.cost}+${item.number}`} className="btn btn-dark arttitle">{item.category}</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            })
                        }
                    </div>
                    <div className="row">
                        {
                            prods.map((item, index) => {
                                if (item.category == "Painting") {
                                    return <div>
                                        <h3 class="title">{item.category}</h3>
                                        <div className="col col-4">
                                            <div>
                                                <div class="card">
                                                    <div><img src={process.env.PUBLIC_URL + `/${item.product}.png`} /></div>
                                                    <div><Link to={`viewprod/${params.id}+${item.title}+${item.product}+${item.category}+${item.cost}+${item.number}`} className="btn btn-dark arttitle">{item.category}</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            })
                        }
                    </div>
                    <div className="row">
                        {
                            prods.map((item, index) => {
                                if (item.category == "Theme-based") {
                                    return <div>
                                        <h3 class="title">{item.category}</h3>
                                        <div className="col col-4">
                                            <div>
                                                <div class="card">
                                                    <div><img src={process.env.PUBLIC_URL + `/${item.product}.png`} /></div>
                                                    <div><Link to={`viewprod/${params.id}+${item.title}+${item.product}+${item.category}+${item.cost}+${item.number}`} className="btn btn-dark arttitle">{item.category}</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            })
                        }
                    </div>
                </form>
                <div className="col col-3">
                    <Link to={`/cart/${userId}`} className="btn btn-light pinkbutton m-2">Go to Cart</Link>
                </div>
            </section>
        </>
    )
}

export default Main;
