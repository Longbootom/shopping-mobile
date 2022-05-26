import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">94mobileadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://bengo.vn/media/wysiwyg/product/Gia-do-dien-thoai/gia-do-may-tinh-bang-dien-thoai-di-dong-nho-gon/gia-do-may-tinh-bang-dien-thoai-di-dong-nho-gon19_bengovn.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
