import { useState } from 'react';

function Nameplate({user}) {
    return(
        <div className="w-50 p-2 bg-gray-300 rounded-4xl">
            <img src={user.imageUrl} alt="Profile" loading="lazy" className="rounded-3xl"/>
            <p className="text-lg">{user.username}</p>
        </div>
    );
}

export default Nameplate