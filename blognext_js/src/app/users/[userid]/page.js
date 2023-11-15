"use client"
import {useParams, usePathname} from 'next/navigation'
import styles from '../.././page.module.css'

export default function UserDetail(){
    const param = useParams();
    const pathName = usePathname();
    console.log("Param: ", param, "and Path: ", pathName);
    return(
        <div className={styles.description}><h1>User Detail</h1></div>
    )
}