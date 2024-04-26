import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

import styles from './pages.module.css';

export default function AlbumPhotosPage() {
    const { albumId } = useParams();
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_limit=4`)
            .then(response => response.json())
            .then(data => {
                setPhotos(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error get photos:', error);
                setLoading(false);
            });
    }, [albumId]);

    return (
        <div className={styles.wrapper}>
            {loading ? (
                <div>
                    <h5>Loading...</h5>
                </div>
            ) : (
                <div className={styles.list}>
                    {photos.map(photo => (
                        <a href={photo.url} key={photo.id} target={'_blank'} className={styles.link_img}>
                            <img src={photo.thumbnailUrl} alt={photo.title} className={styles.img_item}/>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};
