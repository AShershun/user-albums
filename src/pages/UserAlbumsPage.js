import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';

import styles from './pages.module.css';

export default function UserAlbumsPage() {
    const { userId } = useParams();
    const [albums, setAlbums] = useState([]);
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
            .then(data => {
                setAlbums(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error get albums:', error);
                setLoading(false);
            });

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(data => setUserName(data.name))
            .catch(error => console.error('Error get user:', error));
    }, [userId]);

    return (
        <div className={styles.wrapper}>
            <h2>Albums by {userName}</h2>
            {loading ? (
                <div>
                    <h5>Loading...</h5>
                </div>
            ) : (
                <div className={styles.list}>
                    {albums.map(album => (
                        <Link className={styles.list_item} key={album.id} to={`/album/${album.id}`}>{album.title}</Link>
                    ))}
                </div>
            )}
        </div>
    );
};
