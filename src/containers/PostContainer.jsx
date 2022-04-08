import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, goToHome } from '../modules/posts';
import Post from '../components/Post';
// import { useNavigate } from 'react-router-dom';

// const goToHome = (state, navigate) => {
//   console.log(`%c ${JSON.stringify(state, null, 2)}`, 'background-color:#202124;color:yellow;');
//   navigate('/')
// }

const PostContainer = ({ postId }) => {
  // const navigate = useNavigate();
  // const state = useSelector(state => state.posts);
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
  
  return (
    <>
      <button onClick={() => dispatch(goToHome())}>home</button>
      <Post post={data} />
    </>
  );
}

export default PostContainer;