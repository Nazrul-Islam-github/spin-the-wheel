import Style from '../../styles/Footer.module.scss'
import Link from 'next/link';
import { useEffect, useState } from 'react';
const Footer = ()=>{
    const [year,setYear]= useState(2022);
    useEffect(()=>{
        const date = new Date();
       setYear(date.getFullYear())
    },[])
    return (<footer className={Style.FooterContainer}>
<div className={Style.Logo}>
    <h3>My Fancy Text</h3>
</div>

<ul>
    <li><Link href="/privacy">Privacy Policy</Link></li>
    <li><Link href="/terms">Terms and Condition</Link></li>
    <li><Link href="/disclaimer">Disclaimer</Link></li>
    <li><Link href="/about">About us</Link></li>
    <li><Link href="/contact">Contact Us</Link></li>
    
</ul>

<div className={Style.Copy}>
    <p>&copy; Copyright 2022 - {year} || All rights reserved by ❤️️ <Link href="/"> myfancytext.com </Link></p>
</div>


    </footer>)
};

export default Footer