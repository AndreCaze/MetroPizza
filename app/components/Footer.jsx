import React from 'react';
import Link from 'next/link';

const rutas = [
  {
    ruta: '/about',
    label: 'Acerca de'
  },
  {
      ruta: '/terminos',
      label: 'Terminos y Condiciones'
  },
  {
      ruta: '/politicas',
      label: 'Politicas de Privacidad'
  },
]

const Footer = () => {
  return (
    <footer>
        <ul className='flex flex-row bg-black text-white font-bold text-1xl p-5 justify-evenly'>
            {rutas.map(({ruta, label}) =>(
                <li key={ruta}>
                     <Link href={ruta}>{label}</Link>
                </li>
            ))}

        </ul>
    </footer>
    
  )
}

export default Footer