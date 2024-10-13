import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Users from "../users/Users";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import UserDetailPage from "../pages/UserDetailPage";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/users/:id" element={<UserDetailPage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
    );
}
