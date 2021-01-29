import logo from "../../assets/imagens/logo-natal.png";
import "./style.css";

function Header() {
  return (
    <div className="mainHeader">
      <header>
        <a href="#">
          <img src={logo} alt="Consultor Natal M. Ferraz" />
        </a>
        <nav>
          <li>
            <a href="#">Aimberê</a>
          </li>
          <li>
            <a href="#">Way</a>
          </li>
          <li>
            <a href="https://wa.me/message/ULJPFC73ABRZH1">Whatsapp</a>
          </li>
          <li>
            <a href="https://forms.gle/7NF5FhfzX4SiRCzt6">Saiba mais</a>
          </li>
        </nav>
      </header>
    </div>
  );
}

export default Header;
