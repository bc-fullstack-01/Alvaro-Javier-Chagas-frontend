import React from 'react';
import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from './pages/Signup';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import Profile from './pages/Profile';
import Profiles from './pages/Profiles';
import PostDetail from './pages/PostDetail';

const CustomRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/create" element={<NewPost />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/posts/:postId" element={<PostDetail />} />
        </Routes>
    );
};

export default CustomRoutes;