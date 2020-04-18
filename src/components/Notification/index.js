import React, { useEffect } from "react";

import slackNotification from "../../middlewares/slack";

import "./styles.css";

export default function Notification() {

  useEffect(() => {
    function verifyNotification() {
      const status = sessionStorage.getItem("slack_status");
      console.log(status);

      if (status === null) {
        sessionStorage.setItem("slack_status", "up");

        const el = document.getElementById("containerNotification").style;
        el.animation = "shownotification 3s";

        slackNotification();
      }
    }
    verifyNotification();
  }, []);

  return (
    <div id="containerNotification">
      <p>Notificação de acesso enviada</p>
    </div>
  );
}

