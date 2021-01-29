import './style.css';

function Footer () {
    return (
        <div className="footer">
        <footer>
        <div className="mapa">
            <img src="../../assets/imagens/place-localizer.png" alt="Localização"/>
            <p>Localização</p>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0095284394306!2d-46.67754509999998!3d-23.532159699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57fa54d01e95%3A0x11a6393aafef07d!2sRua%20Aimber%C3%AA%2C%20127%20-%20Perdizes%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005018-010!5e0!3m2!1spt-BR!2sbr!4v1602853437184!5m2!1spt-BR!2sbr"
                className="mp"/>

        </div>

        </footer>

        <div className="footer1">
        <p>Corretor Natal M. Ferraz</p>
        <p> CRECI: 131055</p>
        </div>
    </div>

    );
}

export default Footer;