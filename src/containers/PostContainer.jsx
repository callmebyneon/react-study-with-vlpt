import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../modules/posts';
import Post from '../components/Post';

const PostContainer = ({ postId }) => {
  const { data, loading, error } = useSelector(
    state => state.posts.post[postId]
  ) || {
    loading: false,
    data: null,
    error: null
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getPost(postId));
  }, [postId, dispatch, data]);

  if (loading) return <div>Now loading ...</div>;
  if (error) return <div>{error.toString()}</div>;
  if (!data) return null;
  
  return <Post post={data} />;
}

export default PostContainer;