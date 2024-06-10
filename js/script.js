import data from "../data/notifications.json" assert { type: "json" };

let notiContainer = document.querySelector(".noti-container");

const checkForRead = function (element) {
  if (!element.readStatus) {
    return "<div class='unread-marker'></div>";
  } else {
    return "";
  }
};

const loadNotifications = function () {
  Object.keys(data).forEach((e) => {
    notiContainer.innerHTML += ` <div class="notification">
      <div class="user-image">
        <img
          src="./assets/images/avatar-${data[e].userImage}.webp"
          alt="Mark Webber"
        />
      </div>
      <div class="noti-details">
        <div class="noti-title">
          <a href="./" class="user-name">${data[e].userName}</a>
          ${data[e].notiTitle}
          <a href="./" class="highlighted-part">${data[e].highlightedPart}</a>
          ${checkForRead(data[e])}
        </div>
        <span class="noti-time">${data[e].notiTime}</span>
      </div>
    </div>`;
  });
};

loadNotifications();
