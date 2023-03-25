import { createContext, useState, useContext } from "react";
import { useApi } from "../hooks/useApi";
const Discoveries = createContext(null);
export function DiscoverContext({children}){
    const [post,getPost]=useApi('https://dummyapi.io/data/v1/post?limit=50');
    return(
        <Discoveries.Provider value={[post,getPost]}>
            {children}
        </Discoveries.Provider>
    );
}
export default function GetDiscoverPosts() {
    return useContext(Discoveries)
}