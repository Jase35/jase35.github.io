import { useState } from 'react';
import Login from '../components/Login';
import Nameplate from '../components/Nameplate';

function Silly() {
    const [user, setUser] = useState(null);

    const handleLogin = (userData) => {
        setUser(userData);
    };

    return (
        <div>
            {!user && <Login onLogin={handleLogin} />}
            {user && (
                <Nameplate user={user}/>
            )}
        </div>
    );
}

export default Silly
