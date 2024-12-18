import { Link } from "react-router-dom"
import styles from "./Cabecera.module.css"
import logo from "./logo-Main.png"
import CabeceraLink from "../CabeceraLink/CabeceraLink"

function Cabecera(){
    return(
        <header className={styles.Cabecera}>
        <Link to="/">
            <section className={styles.logoContainer}>
                <img src={logo} alt="Logo ALuraflix"/>
            </section>
        </Link>
        <nav>
            <CabeceraLink url="./">
                Home
            </CabeceraLink>
            <CabeceraLink url="./Favoritos">
                Favoritos
            </CabeceraLink>
            <CabeceraLink url="./NuevaCard">
                Nuevo Video
            </CabeceraLink>
        </nav>
        </header>
    )
}

export default Cabecera