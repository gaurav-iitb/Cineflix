import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import { useEffect, useState } from "react";
import axios from "axios";
import { useMemo } from "react";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./Context/authContext/AuthContext";
import NewProduct from "../src/pages/newProduct/NewProduct";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";

function App() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <Router>
      <Routes>
            <Route
              path="/"
              element={
                user?
                <>
                
                  <Navbar />
                  <div className="container">
                    <Sidebar />
                    <Homepage />
                  </div>
                </>:<Navigate to="/login" />
              }
            />
            <Route
              path="/users"
              element={
                user?
                <>
                  <Navbar />
                  <div className="container">
                    <Sidebar />
                    <UserList />
                  </div>
                </>:<Navigate to="/login" />
              }
            />
            <Route
              path="/user/:userId"
              element={
                user?
                <>
                  <Navbar />
                  <div className="container">
                    <Sidebar />
                    <User />
                  </div>
                </>:<Navigate to="/login" />
              }
            />
            <Route
              path="/newUser"
              element={
                user?
                <>
                  <Navbar />
                  <div className="container">
                    <Sidebar />
                    <NewUser />
                  </div>
                </>:<Navigate to="/login" />
              }
            />
            <Route
              path="/movies"
              element={
                user?
                <>
                  <Navbar />
                  <div className="container">
                    <Sidebar />
                    <ProductList />
                  </div>
                </>:<Navigate to="/login" />
              }
            />
            <Route
              path="/movie/:movieId"
              element={
                user?
                <>
                  <Navbar />
                  <div className="container">
                    <Sidebar />
                    <Product />
                  </div>
                </>:<Navigate to="/login" />
              }
            />
            <Route
              path="/newproduct"
              element={
                user?
                <>
                  <Navbar />
                  <div className="container">
                    <Sidebar />
                    <NewProduct />
                  </div>
                </>:<Navigate to="/login" />
              }
            />
            <Route
              path="/lists"
              element={
                user?
                <>
                  <Navbar />
                  <div className="container">
                    <Sidebar />
                    <ListList />
                  </div>
                </>:<Navigate to="/login" />
              }
            />
            <Route
              path="/list/:listId"
              element={
                user?
                <>
                  <Navbar />
                  <div className="container">
                    <Sidebar />
                    <List />
                  </div>
                </>:<Navigate to="/login" />
              }
            />
            <Route
              path="/newlist"
              element={
                user?
                <>
                  <Navbar />
                  <div className="container">
                    <Sidebar />
                    <NewList />
                  </div>
                </>:<Navigate to="/login" />
              }
            />

        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
