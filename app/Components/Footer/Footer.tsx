import footer from "./Footer.module.css"

function Footer() {
    return (
        <footer>
            <div className={footer.yellowPart}></div>
            <p>
                Hecho en México. Todos los derechos reservados 2025.
                Esta página puede ser reproducida con fines no lucrativos, siempre y cuando no se mutile, se cite la fuente completa y su dirección electrónica. De otra forma, requiere permiso previo por escrito de la institución.
            </p>
            <div className={footer.yellowPartOpuest}></div>
        </footer>
    )
}

export default Footer;
//IO