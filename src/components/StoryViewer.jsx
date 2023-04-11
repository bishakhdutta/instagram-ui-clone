import React, { useEffect } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { useApi } from '../hooks/useApi';

const StoryViewer = () => {
    const {storyid}=useParams();
    const [post,getPost]=useApi(`https://dummyapi.io/data/v1/post/${storyid}`);
    useEffect(()=>{
      getPost(`https://dummyapi.io/data/v1/post/${storyid}`);
    },[storyid])
  return (
    <div>
    <img src={post?.image} />
    </div>
  )
}

export default StoryViewer