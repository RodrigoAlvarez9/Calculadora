import { Outlet } from "react-router-dom";
import BarraLateral from "../components/BarraLateral";
import style from './Main.module.css';

export default function Layout({ children }) {
    return (
        <>
            <div className={style.conteudoEsquerda}>
                <BarraLateral />
            </div>
            <div className={style.conteudoDireita}>
                <Outlet />
            </div>

        </>
    );
}

