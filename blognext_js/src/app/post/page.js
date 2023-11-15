"use client"
import {useParams, usePathname} from 'next/navigation'
import styles from '.././page.module.css'
export default function Post() {
    const param = useParams();
    const pathName = usePathname();
    console.log("Param: ", param, "and Path: ", pathName);
    
    return(
        <div className={styles.Description}>
            <h1> My Post Feed</h1>
        </div>
    )
}