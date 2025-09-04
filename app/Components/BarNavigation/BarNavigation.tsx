'use client';
import { useState } from "react";
import './BarNavigation.css';
import Link from "next/link";

function BarNavigation() {
    const [openMenu, setOpenMenu] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

    const toggleMenu = () => setOpenMenu(!openMenu);
    const toggleSubMenu = (index: number) => {
        setOpenSubMenu(openSubMenu === index ? null : index);
    };
    return (
        <nav className="barNavigation">
            <div
                className={`menuToggle ${openMenu ? 'center' : ''}`}
                onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <ul className={openMenu ? "active" : ""}>
                <li className={`subMenu ${openSubMenu === 0 ? "open" : ""}`}>
                    <span onClick={() => toggleSubMenu(0)}>Inscripciones</span>
                    <ul className="containerLinks">
                        <Link href="/Alta">
                            <li >Alta</li>
                        </Link>
                        <Link href="/AgregarTiempo" >
                            <li >Agregar Tiempo</li>
                        </Link>
                        <Link href="/Inscripciones">
                            <li>Inscripciones</li>
                        </Link>
                    </ul>
                </li>

                <li className={`subMenu ${openSubMenu === 1 ? "open" : ""}`}>
                    <span onClick={() => toggleSubMenu(1)}>Servicios</span>
                    <ul>
                        <Link href="/Impresiones">
                            <li >
                                Impresiones y Ploteo
                            </li>
                        </Link>
                        <Link href="/AsignacionMesas">
                            <li>
                                Asignacion de Mesas
                            </li>
                        </Link>
                        <Link href="/AsignacionEquipo">
                            <li>
                                Asignacion de Equipos
                            </li>
                        </Link>
                        <Link href="/Monitor">
                            <li>
                                Monitor
                            </li>
                        </Link>
                    </ul>
                </li>

                <li className={`subMenu ${openSubMenu === 2 ? "open" : ""}`}>
                    <span onClick={() => toggleSubMenu(2)}>Equipo</span>
                    <ul >
                        <Link href="/InformacionEquipo">
                            <li>Informacion de Equipos</li>
                        </Link>
                        <Link href="/ActivosMantenimiento">
                            <li >Activos y en Mantenimiento</li>
                        </Link>
                        <Link href="/Mensajes">
                            <li>Mensajes</li>
                        </Link>
                        <Link href="/Programas">
                            <li>Programas</li>
                        </Link>
                    </ul>
                </li>

                <li className={`subMenu ${openSubMenu === 3 ? "open" : ""}`}>
                    <span onClick={() => toggleSubMenu(3)}>Reportes</span>

                    <ul>
                        <Link href="/Recibo">
                            <li>Recibo</li>
                        </Link>
                        <Link href="/Inscritos">
                            <li>Inscritos</li>
                        </Link>
                        <Link href="/BitacoraSanciones">
                            <li>Bitacora y sanciones</li>
                        </Link>
                    </ul>
                </li>
                <li className="subMenu">
                    <Link href="/QuitarSancion" className="links">
                        Quitar sancion
                    </Link>
                </li>
                <li className="subMenu">
                    <Link href="CambiarPass" className="links">
                        Cambiar contraseña
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default BarNavigation;
//IO