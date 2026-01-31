import { useState } from 'react';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:4000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    username,
                    imageUrl,
                }),
            });
            if (response.ok) {
                const user = await response.json();
                onLogin(user);
                alert('User created successfully!');
            } else {
                alert('Failed to create user.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred.');
        }
    };

    return (
        <div>
            <p>Test</p>
            <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <button onClick={handleSubmit}>Join</button>
            </div>
        </div>
    );
}

export default Login
