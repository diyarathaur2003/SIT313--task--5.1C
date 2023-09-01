import React, { useState } from 'react';
import './Header.css'

const PostPage = () => {
  const [postType, setPostType] = useState('question');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [abstract, setAbstract] = useState('');

  const handlePostTypeChange = (event) => {
    setPostType(event.target.value);
  };

  const handleSubmit = () => {
    // Logic to handle the submission of the post
    console.log('Submitted post:', { postType, title, content, tags, abstract });
  };

  return (
    <div>
      <h1>Post New</h1>
      <div className="Select">
        <label>
          Select Post Type:
          <label>
            <input
              type="radio"
              value="question"
              checked={postType === 'question'}
              onChange={handlePostTypeChange}
            />
            Question
          </label>
          <label>
            <input
              type="radio"
              value="article"
              checked={postType === 'article'}
              onChange={handlePostTypeChange}
            />
            Article
          </label>
          <div>
            <h1> What do you want to ask or share </h1>
          </div>
        </label>
      </div>
      <div className="Content">
        {postType === 'question' && (
          <div>
            <div className="Title">
              <label>
                Title
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder='Start your question with how, what, why, etc.'
                />
              </label>
            </div>
            <div className="descript">
              <label>
                Describe Your Problem:
              </label>
            </div>
            <div className="cont">
              <label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </label>
            </div>
            <div className="Tags">
              <label>
                Tags:
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder='Please add up to 3 tags to describe what your question is about e.g., Java'
                />
              </label>
            </div>
          </div>
        )}

        {postType === 'article' && (
          <div>
            <div className="Title">
              <label>
                Title:
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder='Enter a descriptive title'
                />
              </label>
            </div>
            <div className="Abstract">
              <label>
                Abstract:
                <textarea
                  value={abstract}
                  onChange={(e) => setAbstract(e.target.value)}
                  placeholder='Enter a 1-paragraph abstract'
                />
              </label>
            </div>
            <div className="Article">
              <label>
                Article Text:
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder='Enter article text'
                />
              </label>
            </div>
          </div>
        )}
      </div>
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
};

export default PostPage;
