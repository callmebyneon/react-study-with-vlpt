import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../components/PostList';
import { getPosts } from '../modules/posts';

const PostListContainer = () => {
  const { data, loading, error } = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();

  // Request post list after mount this component
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  
  if (loading && !data) return <div>Now loading ...</div>;
  if (error) return <div>{error.toString()}</div>;
  if (!data) return null;
  
  return <PostList posts={data} />;
}

export default PostListContainer;