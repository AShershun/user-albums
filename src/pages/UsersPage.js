import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import styles from './pages.module.css';

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error get users:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className={styles.wrapper}>
            {loading ? (
                <div>
                    <h5>Loading...</h5>
                </div>
            ) : (
                <div className={styles.list}>
                    {users.map(user => (
                        <Link className={styles.list_item} key={user.id} to={`/user/${user.id}`}>{user.name}</Link>
                    ))}
                </div>
            )}
        </div>
    )
}

