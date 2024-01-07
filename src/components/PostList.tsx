import React from 'react';
import './styles/PostList.css'; // Importuj plik CSS
import PostComment from './PostComment';
import PostComments from './PostComments';
import PostGallery from './PostGallery';
interface PostListProps {

}

const PostList: React.FC<PostListProps> = () => {
    return (

        <div className="post-list">
            <div className='single-post'>
                <div className='personal-header'>


                    <div className='post-info'>
                        <p>Tren Twiner</p>
                        <p><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00002 1.16666C3.78352 1.16666 1.16669 3.7835 1.16669 7C1.16669 10.2165 3.78352 12.8333 7.00002 12.8333C10.2165 12.8333 12.8334 10.2165 12.8334 7C12.8334 3.7835 10.2165 1.16666 7.00002 1.16666ZM2.33335 7C2.33335 6.47558 2.42435 5.97216 2.58477 5.50141L3.50002 6.41666L4.66669 7.58333V8.75L5.83335 9.91667L6.41669 10.5V11.6264C4.11894 11.3377 2.33335 9.37533 2.33335 7ZM10.6925 9.84258C10.3116 9.53575 9.7341 9.33333 9.33335 9.33333V8.75C9.33335 8.44058 9.21044 8.14383 8.99165 7.92504C8.77285 7.70625 8.47611 7.58333 8.16669 7.58333H5.83335V5.83333C6.14277 5.83333 6.43952 5.71041 6.65831 5.49162C6.8771 5.27283 7.00002 4.97608 7.00002 4.66666V4.08333H7.58335C7.89277 4.08333 8.18952 3.96041 8.40831 3.74162C8.6271 3.52283 8.75002 3.22608 8.75002 2.91666V2.67691C10.458 3.3705 11.6667 5.04583 11.6667 7C11.6666 8.02941 11.3238 9.0295 10.6925 9.84258Z" fill="#DCDCDC" />
                        </svg>
                            Opublikowane: 15 2023 19:00</p>
                    </div>
                </div>
                <div className='post-content'>
                    if you dont get swole, shes not gonna want your pole
                </div>
                <PostComments />
                <PostComment />
            </div>

            <div className='single-post'>
                <div className='personal-header'>


                    <div className='post-info'>
                        <p>Tren Twiner</p>
                        <p><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00002 1.16666C3.78352 1.16666 1.16669 3.7835 1.16669 7C1.16669 10.2165 3.78352 12.8333 7.00002 12.8333C10.2165 12.8333 12.8334 10.2165 12.8334 7C12.8334 3.7835 10.2165 1.16666 7.00002 1.16666ZM2.33335 7C2.33335 6.47558 2.42435 5.97216 2.58477 5.50141L3.50002 6.41666L4.66669 7.58333V8.75L5.83335 9.91667L6.41669 10.5V11.6264C4.11894 11.3377 2.33335 9.37533 2.33335 7ZM10.6925 9.84258C10.3116 9.53575 9.7341 9.33333 9.33335 9.33333V8.75C9.33335 8.44058 9.21044 8.14383 8.99165 7.92504C8.77285 7.70625 8.47611 7.58333 8.16669 7.58333H5.83335V5.83333C6.14277 5.83333 6.43952 5.71041 6.65831 5.49162C6.8771 5.27283 7.00002 4.97608 7.00002 4.66666V4.08333H7.58335C7.89277 4.08333 8.18952 3.96041 8.40831 3.74162C8.6271 3.52283 8.75002 3.22608 8.75002 2.91666V2.67691C10.458 3.3705 11.6667 5.04583 11.6667 7C11.6666 8.02941 11.3238 9.0295 10.6925 9.84258Z" fill="#DCDCDC" />
                        </svg>
                            Opublikowane: 15 2023 19:00</p>
                    </div>
                </div>
                <div className='post-content'>
                    <PostGallery />
                </div>
                <PostComments />
                <PostComment />
            </div>
        </div>
    );
};

export default PostList;