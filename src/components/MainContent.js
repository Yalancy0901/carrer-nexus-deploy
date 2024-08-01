import React, { useState } from 'react';
import './styles/MainContent.css';

const MainContent = () => {
    const [posts, setPosts] = useState([]);
    const [postText, setPostText] = useState('');
    const [postImage, setPostImage] = useState(null);
    const [postVideo, setPostVideo] = useState(null);

    const handlePostTextChange = (e) => {
        setPostText(e.target.value);
    };

    const handleImageChange = (e) => {
        setPostImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleVideoChange = (e) => {
        setPostVideo(URL.createObjectURL(e.target.files[0]));
    };

    const handlePostSubmit = () => {
        if (postText.trim() || postImage || postVideo) {
            const newPost = {
                id: Date.now(), // Unique ID for each post
                username: 'marko123', // Changed from email to username
                date: new Date().toLocaleString('en-GB'), // Use toLocaleString for correct time format
                text: postText,
                image: postImage,
                video: postVideo,
                likes: 0,
                comments: [],
                shares: 0
            };
            setPosts([newPost, ...posts]);
            setPostText('');
            setPostImage(null);
            setPostVideo(null);
        }
    };

    const handleLike = (id) => {
        setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
    };

    const handleComment = (id) => {
        const commentText = prompt("Enter your comment:");
        if (commentText) {
            setPosts(posts.map(post => post.id === id ? { ...post, comments: [...post.comments, commentText] } : post));
        }
    };

    const handleShare = (id) => {
        setPosts(posts.map(post => post.id === id ? { ...post, shares: post.shares + 1 } : post));
    };

    return (
        <div className="main-content">
            <div className="post-container">
                <div className="post-header">
                    <input
                        type="text"
                        placeholder="What's on your mind?"
                        className="post-input"
                        value={postText}
                        onChange={handlePostTextChange}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        className="file-input"
                        onChange={handleImageChange}
                    />
                    <input
                        type="file"
                        accept="video/*"
                        className="file-input"
                        onChange={handleVideoChange}
                    />
                    <button className="share-button" onClick={handlePostSubmit}>SHARE</button>
                </div>
                <div className="post-options">
                    <button className="option-button">
                        <img src="image-icon.png" alt="Image" />
                    </button>
                    <button className="option-button">
                        <img src="live-icon.png" alt="Live" />
                    </button>
                    <button className="option-button">
                        <img src="feeling-icon.png" alt="Feeling" />
                    </button>
                </div>
            </div>

            <div className="posts-list">
                {posts.map(post => (
                    <div key={post.id} className="post-content">
                        <div className="post-info">
                            <img src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg" alt="Profile" className="profile-pic" />
                            <div className="post-details">
                                <span className="post-username">{post.username}</span>
                                <span className="post-date">Published: {post.date}</span>
                            </div>
                        </div>
                        <p className="post-text">{post.text}</p>
                        {post.image && <img src={post.image} alt="Post" className="post-image" />}
                        {post.video && (
                            <video controls className="post-video">
                                <source src={post.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                        <div className="post-actions">
                            <button className="action-button" onClick={() => handleLike(post.id)}>👍 Like ({post.likes})</button>
                            <button className="action-button" onClick={() => handleComment(post.id)}>📝 Comments ({post.comments.length})</button>
                            <button className="action-button" onClick={() => handleShare(post.id)}>📩 Share ({post.shares})</button>
                        </div>
                        <div className="comments-section">
                            {post.comments.map((comment, index) => (
                                <div key={index} className="comment">
                                    <span>{comment}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainContent;
