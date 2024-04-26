import {useNavigate} from 'react-router-dom';

import styles from './header.module.css';

export default function Header() {
    const navigate = useNavigate();



    return (
        <nav className={styles.navbar}>
            <div className={styles.nav_item} onClick={() => navigate('/')}>Home</div>
            <div className={styles.nav_item} onClick={() => navigate(-1)}>Go Back</div>
        </nav>
    )
}