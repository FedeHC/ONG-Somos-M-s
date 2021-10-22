import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';


export const PUBLIC_LINKS = [
  { label: "Inicio", href: '/' },
  { label: "Nosotros", href: '/nosotros' },
  { label: "Actividades", href: '/actividades' },
  { label: "Novedades", href: '/novedades' },
  { label: "Testimonios", href: '/testimonios' },
  { label: "Contacto", href: '/contacto' }
];

export const SOCIAL_LINKS = [
  { label: "Facebook", href: '#', component: <FaFacebook />},
  { label: "Linkedin", href: '#', component: <FaLinkedin />},
  { label: "Instagram", href: '#', component: <FaInstagram /> },
  { label: "Twitter", href: '#', component: <FaTwitter />}
];