import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom";
import { getUser, deleteItem } from "./api"

function Cart() {
    const params = useParams();
    console.log(params);

    let [orderData, setOrderData] = useState([]);

    let cost = 0;

    orderData.map((item, index) => {
        cost += parseInt(item.cost);
    });

    useEffect(async () => {
        let user = await getUser(params.id);
        setOrderData(user.data.order);
    }, []);
    console.log(orderData);

    return (
        <>
            <section>
                <div>
                    <form>
                        {
                            cost === 0 ? <h3 className="title">Your Cart is Empty</h3> : <h3 className="title">Your Cart</h3>
                        }
                        <hr style={{ width: "100%" }} />
                        {
                            orderData.map((item, index) => {
                                return <div class="card view">
                                    <div className="row">
                                        <div className="col col-3">
                                            <img class="viewimg" src={process.env.PUBLIC_URL + `/${item.product}.png`} />
                                        </div>
                                        <div className="col col-3"></div>
                                        <div className="col col-6">
                                            <h4 class="title">{item.title}</h4>
                                            <h5><b>Cost - ${item.cost}</b></h5>
                                            <div className="buttons">
                                                <button className="btn btn-dark m-2" onClick={async () => {
                                                    await deleteItem(params.id, { title: item.title });
                                                }}>Remove Product</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                        <div className="row">
                            <div className="col col-5"><h3 className="title">TotalCost - ${cost}</h3></div>
                            <div className="col col-4"><Link to={`/order/${params.id}`} className="btn btn-light pinkbutton m-2">Proceed to Buy</Link></div>
                            <div className="col col-3"><Link to={`/main/${params.id}`} className="btn btn-dark m-2">Buy More</Link></div>
                            {/* <div className="col col-5"><Link className="btn btn-light pinkbutton m-2">Proceed to Buy</Link></div> */}
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Cart;