import World from "./World";
import styles from './Hello.module.css';

export default function Hello(){
    return (
        <div>
            <p style={{
                color: '#f00',
                borderRight: '2px solid #000',
                marginBottom: '50px',
                opacity: 0.5
            }}>Hello!!</p>
            <div className={styles.box}/>
            <World/>
        </div>
        )
}