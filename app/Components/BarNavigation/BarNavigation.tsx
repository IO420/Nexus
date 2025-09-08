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
                className={`menuToggle ${openMenu ? '' : ''}`}
                onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <ul className={openMenu ? "active" : ""}>
                <li className={`subMenu ${openSubMenu === 0 ? "open" : ""}`}>
                    <span onClick={() => toggleSubMenu(0)}>Inscripciones</span>
                    <ul className="containerLinks" onClick={toggleMenu}>
                        <Link href="/Alta" className="links">
                            <li >Alta</li>
                        </Link>
                        <Link href="/AgregarTiempo" className="links">
                            <li >Agregar Tiempo</li>
                        </Link>
                        <Link href="/Inscripciones" className="links">
                            <li>Inscripciones</li>
                        </Link>
                    </ul>
                </li>

                <li className={`subMenu ${openSubMenu === 1 ? "open" : ""}`}>
                    <span onClick={() => toggleSubMenu(1)}>Servicios</span>
                    <ul onClick={toggleMenu}>
                        <Link href="/Impresiones" className="links">
                            <li >
                                Impresiones y Ploteo
                            </li>
                        </Link>
                        <Link href="/AsignacionMesas" className="links">
                            <li>
                                Asignacion de Mesas
                            </li>
                        </Link>
                        <Link href="/AsignacionEquipo" className="links">
                            <li>
                                Asignacion de Equipos
                            </li>
                        </Link>
                        <Link href="/Monitor" className="links">
                            <li>
                                Monitor
                            </li>
                        </Link>
                    </ul>
                </li>

                <li className={`subMenu ${openSubMenu === 2 ? "open" : ""}`}>
                    <span onClick={() => toggleSubMenu(2)}>Equipo</span>
                    <ul onClick={toggleMenu}>
                        <Link href="/InformacionEquipo" className="links">
                            <li>Informacion de Equipos</li>
                        </Link>
                        <Link href="/ActivosMantenimiento" className="links">
                            <li >Activos y en Mantenimiento</li>
                        </Link>
                        <Link href="/Mensajes" className="links">
                            <li>Mensajes</li>
                        </Link>
                        <Link href="/Programas" className="links">
                            <li>Programas</li>
                        </Link>
                    </ul>
                </li>

                <li className={`subMenu ${openSubMenu === 3 ? "open" : ""}`}>
                    <span onClick={() => toggleSubMenu(3)}>Reportes</span>
                    <ul onClick={toggleMenu}>
                        <Link href="/Recibo" className="links">
                            <li>Recibo</li>
                        </Link>
                        <Link href="/Inscritos" className="links">
                            <li>Inscritos</li>
                        </Link>
                        <Link href="/BitacoraSanciones" className="links">
                            <li>Bitacora y sanciones</li>
                        </Link>
                    </ul>
                </li>
                <li className="subMenu" onClick={toggleMenu}>
                    <Link href="/QuitarSancion" className="links">
                        Quitar sancion
                    </Link>
                </li>
                <li className="subMenu" onClick={toggleMenu}>
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