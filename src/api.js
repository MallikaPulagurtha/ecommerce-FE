import axios from "axios";

export function postAdminLogin(data) {
    return axios.post("https://malliecommerce-be.herokuapp.com/adminlogin", data);
}

export function postAdminProduct(data, id) {
    return axios.post(`https://malliecommerce-be.herokuapp.com/adminPost/${id}`, data);
}

export function getAdminProducts() {
    return axios.get("https://malliecommerce-be.herokuapp.com/admingetprod/");
}

export function postUserLogin(data) {
    return axios.post("https://malliecommerce-be.herokuapp.com/login", data);
}

export function postUserRegister(data) {
    return axios.post("https://malliecommerce-be.herokuapp.com/register", data);
}

export function postUserOrder(id, data) {
    return axios.post(`https://malliecommerce-be.herokuapp.com/${id}`, data, {
        headers: {
            authorization: window.localStorage.getItem("loginToken")
        }
    });
}

export function getUser(id) {
    return axios.get(`https://malliecommerce-be.herokuapp.com/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("loginToken")
        }
    });
}

export function deleteItem(id, data) {
    return axios.put(`https://malliecommerce-be.herokuapp.com/delitem/${id}`, data);
}

export function updateCopies(id, data) {
    return axios.get(`https://malliecommerce-be.herokuapp.com/${id}`, data);
}



// export const isAuth = () =>
// 	window.localStorage.getItem("login_token")
// 		? window.localStorage.getItem("login_token")
// 		: false;

// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import { isAuth } from "../components/context";



// function ProtectedRoute({ component: Component, ...rest }) {
// 	return (
// 		<Route
// 			{...rest}
// 			render={(props) =>
// 				window.localStorage.getItem("login_token") && isAuth() ? (
// 					<Component />
// 				) : (
// 					<Redirect
// 						to={{
// 							pathname: "/",
// 							state: { from: props.location },
// 						}}
// 					/>
// 				)
// 			}
// 		/>
// 	);
// }
// export default ProtectedRoute;



// import { withRouter } from "react-router-dom";