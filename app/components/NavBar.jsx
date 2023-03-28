import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const rutas = [
    {
        ruta: '/',
        label: 'Inicio'
    },
    {
        ruta: '/promos',
        label: 'Promociones'
    },
    {
        ruta: '/especial',
        label: 'Especialidades'
    },
    {
        ruta: '/about',
        label: 'Acerca de'
    }
]


const NavBar = () => {
  return (
    <nav>
        
        <ul className='flex flex-row bg-red-500 text-white font-bold text-1xl p-5 justify-evenly'>
        <Image src='/app/img/logo_metro.png' alt='logo' width={40} height={30}></Image> 
            {rutas.map(({ruta, label}) =>(
                <li key={ruta}>
                     <Link href={ruta}>{label}</Link>
                </li>
            ))}

        </ul>
    </nav>
        
    
  )
}

export default NavBar