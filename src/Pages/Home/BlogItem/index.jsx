import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './style.css';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={cover} alt='cover' style={{
        width: '400px', height: '250px', backgroundColor: 'black'
      , borderBlockColor:'black' }} />
      <Chip label={category} />
      <h2 style={{ color: 'Green' }}>{title}</h2>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar'  />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          <button>➝</button> 
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;