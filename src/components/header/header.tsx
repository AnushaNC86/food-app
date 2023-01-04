import "./header.css";
import { useDispatch } from "react-redux";
import { showModal } from "../../redux/modalSlice";
import { useTranslation } from "react-i18next";
const Header = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation(["common"]);

  const handleLanguageChange = (e: any) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <div className="headerContainer">
        <div className="headerLeft">
          <div className="logoText">LOREM</div>
        </div>
        <div className="headerRight">
          <div className="webMenu">
            <div className="language">
              <select
                name="language"
                className="languageSelect"
                onChange={handleLanguageChange}
                // value={localStorage.getItem("i18nextLng")}
              >
                <option className="lang" value="en">
                  English
                </option>
                <option className="lang" value="kn">
                  Kannada
                </option>
              </select>
            </div>
            <div className="login" onClick={() => dispatch(showModal())}>
              {t("loginText")}
            </div>
            <div className="createAccount">{t("accountText")}</div>
          </div>
          <div className="mobileMenu">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="cartDetails">
            <img
              src={require("../../assets/icn_cart.png")}
              alt=""
              className="cartItems"
            />
            <div className="cartText">{t("cart")}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
