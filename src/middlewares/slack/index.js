import config from "../../Utils/config";

const { url } = config.platforms.zapier;

function slackNotification() {

  fetch(url, { method: "POST" , body: JSON.stringify({ text:"oi" })})
}

export default slackNotification;
