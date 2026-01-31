import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const attemptLog = async () => {
        try {
            const response = await fetch(API_BASE_URL + "/user/self", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            if (response.ok) {
                const user = await response.json();
                onLogin(user);
                alert('Session restored.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred: ' + error);
        }
    }

    const handleSubmit = async () => {
        try {
            const response = await fetch(API_BASE_URL + "/user", {
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
            } else {
                alert('Failed to create user.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred: ' + error);
        }
    };

    useEffect(() => {
        attemptLog();
    }, []);

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
