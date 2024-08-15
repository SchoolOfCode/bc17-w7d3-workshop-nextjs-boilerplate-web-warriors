import Link from 'next/link'
import styles from './Menu.module.css'

export default function Menu(){
    return(
    <div className = {styles.div}>
        <Link href="/home">Home</Link>
        <Link href="/founders">Founders</Link>
    </div>
    )
}