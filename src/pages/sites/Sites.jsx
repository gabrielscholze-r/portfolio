import React from "react";
import data from "../../assets/sites/sites.json";
import SiteCard from "../../components/sites/siteCard/SiteCard";
import "./Sites.css";
import { useLanguage } from "../../context/Language.jsx";

export default function Sites() {
  const { t } = useLanguage();

  return (
    <div className="sites-page">
      <div className="sites-header">
        <div className="sites-title-row">
          <span className="sites-icon">
            <i className="bi bi-globe2"></i>
          </span>
          <h1 className="sites-title">sites/</h1>
          <span className="sites-count">{data.length} {t("sites.live")}</span>
        </div>
        <p className="sites-subtitle">
          <span className="dollar">$</span> curl -s --head https://*.client | grep "200 OK"
        </p>
        <p className="sites-intro">{t("sites.intro")}</p>
      </div>
      <div className="siteList">
        {data.map((item, index) => (
          <SiteCard data={item} key={item.slug} index={index} />
        ))}
      </div>
    </div>
  );
}
