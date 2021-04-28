import React, { useEffect, useState } from "react"
import { Link, useParams, useHistory } from "react-router-dom";
import { getAdminProducts, postUserOrder, getUser, updateCopies } from "./api";

function ViewProd() {
    const history = useHistory();

    const params = useParams();
    const prodDetails = params.id.split("+");
    const userId = prodDetails[0]
    const title = prodDetails[1];
    const product = prodDetails[2];
    const category = prodDetails[3];
    const cost = prodDetails[4];
    const copies = prodDetails[5];
    console.log(prodDetails);
    const [prods, setProds] = useState([]);
    console.log(product);

    let [orderData, setOrderData] = useState([]);
    let [copiesAvailable, setCopiesAvailable] = useState(0);

    useEffect(async () => {
        let user = await getUser(userId);
        setOrderData(user.data);
    }, []);
    console.log(orderData);

    useEffect(async () => {
        let adminproducts = await getAdminProducts();
        setProds(adminproducts.data.products);
    }, []);
    console.log(prods);

    return (
        <>
            <section>
                <div>
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                        orderData = { title, product, category, cost };
                        await postUserOrder(userId, orderData);
                        history.push(`/cart/${userId}`);
                        setCopiesAvailable("");
                        // await updateCopies(userId, { number : ()})
                    }}>
                        <h3 class="title">{params.product}</h3>
                        <div class="card view">
                            <div className="row">
                                <div className="col col-7">
                                    <img class="viewimg" src={process.env.PUBLIC_URL + `/${product}.png`} />
                                </div>
                                <div className="col col-5">
                                    <h3 class="title">{title}</h3>
                                    <hr />
                                    <div className="row">
                                        <h4><b>Product Details</b></h4>
                                    </div>
                                    <h5>Category - {category}</h5>
                                    <h5>Copies Available - {copies}</h5>
                                    <h5><b>Cost - ${cost}</b></h5>
                                    <div className="buttons">
                                        <button className="btn btn-dark buttons">Add to Cart</button>
                                        <Link to={`/main/${userId}`} className="btn btn-light pinkbutton m-2">Buy More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ViewProd;