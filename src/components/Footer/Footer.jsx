import { NavLink } from "react-router-dom"
import Ikon from "../../assets/img/shopping-cart.png"
import Ikon2 from "../../assets/img/user.png"
import logo from "../../assets/img/logo.png"
import style from "./footer.module.css"

const Footer = () => {
    return (
        <footer>
            <NavLink to={"/"} style={{ textDecoration: 'none' }}>
                <div className={style.logo}>
                    РемБыт
                </div>
            </NavLink>
            <nav>
                <NavLink className={style.navlink} to={"/"}>главная</NavLink>
                <NavLink className={style.navlink} to={"#"}>каталог</NavLink>
            </nav>
            <div className={style.btns_header}>
                <div className="ikon">
                    <img src={Ikon} alt="" />
                </div>
                <NavLink to={"/user"}>
                    <div className="ikon">
                        <img src={Ikon2} alt="" />
                    </div>
                </NavLink>
            </div>
        </footer>
    )
}

export default Footer