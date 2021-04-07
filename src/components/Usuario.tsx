import { useState } from 'react';

interface User {
    uid: string;
    name: string;
}

export const Usuario = () => {

const [user, setUser] = useState<User>();


const login = () => {
    setUser({
        uid: 'ABC123',
        name: 'Yesmeily Cabreja'
});
}

return (
    <div className="mt-5">
        <h3>Usuario: useState</h3>

        <button 
        onClick={ login }
        className="btn btn-outline-primary">
login
        </button>




        <pre> { JSON.stringify( user ) } </pre>
    </div>
)
}