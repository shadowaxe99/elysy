import React, { useState } from 'react';
import axios from 'axios';

const GitHubForm = () => {
  const [githubUrl, setGithubUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/generate-backend', { githubUrl });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to generate backend.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={githubUrl} 
          onChange={(e) => setGithubUrl(e.target.value)} 
          placeholder="Enter GitHub Repo URL"
        />
        <button type="submit">Generate Backend</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default GitHubForm;