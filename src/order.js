import React from "react"
import { Link, useParams } from "react-router-dom";

function Order() {
    const params = useParams();
    console.log(params);

    return (
        <>
            <section>
                <h3 className="title">Your order is on the way</h3>
                <hr />
                <Link to={`/main/${params.id}`} className="btn btn-light pinkbutton m-2">Continue Shopping</Link>
            </section>
        </>
    )
}

export default Order;