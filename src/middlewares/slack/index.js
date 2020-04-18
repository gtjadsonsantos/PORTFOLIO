import config from "../../Utils/config";

const { channel, icon_emoji, text, url, username } = config.platforms.slack;

function slackNotification() {
  const data =  {
    channel,
    username,
    text,
    icon_emoji,
  };
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then(json => console.log(json));
}

export default slackNotification;