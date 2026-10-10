import style from './Header.module.css'

const Header = () => {
  return (
    <div className={style.container}>
        <nav className={style.navbox}>
            <div className={style.logo}>
                <p>NAME-LOGO</p>
            </div>
            <div className={style.navMenu}>
                <ul className={style.list}>
                    <a href="" className={style.listItem}><li>Início</li></a>
                    <a href="" className={style.listItem}><li>Informações</li></a>
                    <a href="" className={style.listItem}><li>Contato</li></a>
                </ul>
            </div>
            <div className={style.IaChat}>
                <a href="">Bora Conversar?</a>
            </div>
        </nav>
    </div>
  )
}

export default Header