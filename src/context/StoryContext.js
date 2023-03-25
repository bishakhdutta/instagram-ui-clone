import { createContext, useState, useContext } from "react";
import { useApi } from "../hooks/useApi";
const Stories = createContext(null);
export function StoryContext({children}){
    const [story,getStory]=useApi('https://dummyapi.io/data/v1/user?limit=20');
    return(
        <Stories.Provider value={[story,getStory]}>
            {children}
        </Stories.Provider>
    );
}
export default function GetStories() {
    return useContext(Stories)
}