import React from "react";
import "./homeOne.css";
import { useTranslation } from "react-i18next";
const HomeOne = () => {
  const { t, i18n } = useTranslation(["common"]);
  return (
    <>
      <div className="homeOneContainer">
        <div className="conatiner">
          <div className="ordeDiv">
            <div className="order">{t("orderTitle")}</div>
          </div>
          <form className="foodForm">
            <div className="foodSearch">
              <img
                src={require("../../assets/icn_search_home copy.png")}
                className="searchIcon"
                alt="glass"
              />
            </div>
            <div className="foodInput">
              <input
                type="text"
                placeholder="Search your restaurant or cuisines"
                className="searchFeild"
              />
            </div>
          </form>
          <form className="placeDate">
            <div className="placeDiv">
              <img
                src={require("../../assets/icn_pin.png")}
                className="pinImage"
                alt="pin"
              />
              <input type="text" placeholder="" className="placeName" />
              <img
                src={require("../../assets/icn_gps_indicator.png")}
                alt="ind"
                className="gps"
              />
            </div>
            <div className="datePicker">
              <div className="dateTime">Today, 28 April, 2018</div>
              <img
                src={require("../../assets/now_button.png")}
                alt=""
                className="dateNow"
              />
            </div>
          </form>
          <div className="scroll">
            <div className="srollIcon">
              <img src={require("../../assets/mouse.png")} alt="" />
            </div>
            <div className="scrollText">Scroll</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOne;
