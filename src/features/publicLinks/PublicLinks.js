import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';


export const PUBLIC_LINKS = [
  { label: "Inicio",      href: '/' },
  { label: "Nosotros",    href: '/nosotros' },
  { label: "Actividades", href: '/actividades' },
  { label: "Novedades",   href: '/novedades' },
  // { label: "Testimonios", href: '/testimonios' },
  { label: "Contacto",    href: '/contacto' },
  { label: "Landing", href: '/landing'}
];

export const SOCIAL_LINKS = [
  { label: "Facebook",  href: "https://www.facebook.com/Somos_Más",         component: <FaFacebook />},
  { label: "Linkedin",  href: "https://www.linkedin.com/company/somosmas",  component: <FaLinkedin />},
  { label: "Instagram", href: "https://www.instagram.com/SomosMás",         component: <FaInstagram /> },
  { label: "Twitter",   href: "https://www.twitter.com/somosmas",           component: <FaTwitter />}
];