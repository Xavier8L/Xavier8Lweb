import Styles from '../styles/sideNavbar.module.css';
import { useState, useEffect } from 'react';

export default function sideNavbar() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(()=>{
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = '';
            sections.forEach(section=>{
                const sectionTop = section.offsetTop;
                if(window.scrollY >= sectionTop-50){
                    currentSection = section.getAttribute('id');
                }
            });
            setActiveSection(currentSection);
            };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
  return (
    <nav className={Styles.sideNavbar}>
    <ul>
      <li className={activeSection === 'profiel' ? Styles.active : ''}>
        <a href="#profiel">Profiel</a>
      </li>
      <li className={activeSection === 'ervaring' ? Styles.active : ''}>
        <a href="#ervaring">Werkervaring</a>
      </li>
      <li className={activeSection === 'vaardigheden' ? Styles.active : ''}>
        <a href="#vaardigheden">Vaardigheden</a>
      </li>
      <li className={activeSection === 'product' ? Styles.active : ''}>
        <a href="#product">Product</a>
      </li>
      <li className={activeSection === 'contact' ? Styles.active : ''}>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
    
  );
}