import React from 'react';
import { useParams } from 'react-router-dom';
import PostContainer from '../containers/PostContainer';

const PostPage = (/*{ match }*/) => {
  //* useParams() === match.params // URL 파라미터 조회
  //* @6에서는 console.log(match) 실행 시 undefined 출력
  const { id } = useParams();
  return <PostContainer postId={parseInt(id, 10)} />;
}

export default PostPage;