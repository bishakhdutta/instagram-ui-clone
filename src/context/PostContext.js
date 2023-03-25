import { createContext, useState, useContext } from "react";
import { useApi } from "../hooks/useApi";
const Posts = createContext(null);
export function PostContext({children}){
    const [post,getPost]=useApi('https://dummyapi.io/data/v1/post?limit=20');
    return(
        <Posts.Provider value={[post,getPost]}>
            {children}
        </Posts.Provider>
    );
}
export default function GetPosts() {
    return useContext(Posts)
}