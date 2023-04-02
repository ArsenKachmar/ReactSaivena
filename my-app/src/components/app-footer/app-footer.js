import './app-footer.css'
import WhiteLogo from '../img/white_logo.png'
import FooterFacebook from '../img/footer_facebook.svg'
import FooterInstagram from '../img/footer_instagram.svg'
import FooterLinkedin from '../img/footer_linkedin.svg'
import FooterYoutube from '../img/footer_youtube.svg'
const AppFooter = () => {
    return(
        <footer class="footer">
        <div class="footer_container">
            <img src={WhiteLogo} alt="" class="footer_logo"/>
            <ul class="footer_menu">
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
            <a href="" class="footer_phone">
                +380 (44) 299 09 66
            </a>
            <div class="footer_soc">
                <a href="facebook.com"><img  src={FooterFacebook} alt="facebook icon"/></a>
                <a href="instagram.com"><img src={FooterInstagram} alt="instagram icon"/></a>
                <a href="linkedin.com"><img  src={FooterLinkedin} alt="linkedin icon"/></a>
                <a href="youtube.com"><img  src={FooterYoutube} alt="youtube icon"/></a>
            </div>
        </div>
        <div class="footer_underLine">
            <p class="underLine_txt">® Всі права захищено 2022 SAIVENA Group</p>
            <p class="underLine_txt">Політика конфіденційності</p>
            <p class="underLine_txt" id="creators">Розроблено Avis Digital Studio</p>
        </div>
    </footer>
    )
}
export default AppFooter