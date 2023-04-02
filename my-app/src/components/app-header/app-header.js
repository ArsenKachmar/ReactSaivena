import './app-header.css'
import logo from '../img/logo.png'
import facebook from '../img/header_facebook.svg'
import instagram from '../img/header_instagram.svg'

const AppHeader = () => {
    return(
        <header class="header">
       <div class="container_header">
            <img src={logo} alt="" class="header_logo"/>
            <ul class="header_menu">
                <li>
                    <a href="#">Про нас</a>
                </li>
                <li>
                    <a href="#">Концепція КІК</a>
                </li>
                <li>
                    <a href="#">Послуги</a>
                </li>
                <li>
                    <a href="#">Наші проекти</a>
                </li>
                <li>
                    <a href="#">контакти</a>
                </li>
            </ul>
            <ul class="header_lang">
                <li>ua</li>
                <li><a href="#">en</a></li>
            </ul>
            <a href="" class="header_phone">
                +380 (44) 299 09 66
            </a>
            <div class="header_soc">
                <a href="facebook.com"><img  src={facebook} alt="facebook icon"/></a>
                <a href="instagram.com"><img src={instagram} alt=""/></a>
            </div>
       </div>
    </header>
    )
}

export default AppHeader 