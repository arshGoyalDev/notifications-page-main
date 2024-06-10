let notiContainer = document.querySelector(".noti-container");

const checkForRead = function (element) {
  if (!element.readStatus) {
    return "unread";
  } else {
    return "read";
  }
};

const checkForMessage = function (element) {
  if (element.message !== "") {
    return `<a href="./"><div class='message'>${element.message}</div></a>`;
  } else {
    return "";
  }
};

const loadNotifications = function () {
  Object.keys(notiData).forEach((e) => {
    notiContainer.innerHTML += ` 
    <div class="notification ${checkForRead(notiData[e])}">
      <div class="user-image">
        <a href="./">
          <img
            src="./assets/images/avatar-${notiData[e].userImage}.webp"
            alt="${notiData[e].userName}"
          />
      </a>
      </div>
        <div class="noti-details">
        <div class="noti-title">
          <a href="./" class="user-name">${notiData[e].userName}</a>
          ${notiData[e].notiTitle}
          <a href="./" class="highlighted-part">${
            notiData[e].highlightedPart
          }</a>
          <div class='unread-marker ${checkForRead(notiData[e])}'></div>
        </div>
        <span class="noti-time">${notiData[e].notiTime}</span>
        ${checkForMessage(notiData[e])}
      </div>
    </div>`;
  });
};

let notiData = {
  notification1: {
    userName: "Mark Webber",
    userImage: "mark-webber",
    notiTime: "1min ago",
    picture: "",
    message: "",
    notiTitle: "reacted to your recent post",
    highlightedPart: "My first tournament today",
    readStatus: false,
  },
  notification2: {
    userName: "Angela Gray",
    userImage: "angela-gray",
    notiTime: "5min ago",
    picture: "",
    message: "",
    notiTitle: "followed you",
    highlightedPart: "",
    readStatus: false,
  },
  notification3: {
    userName: "Jacob Thompson",
    userImage: "jacob-thompson",
    notiTime: "1 day ago",
    picture: "",
    message: "",
    notiTitle: "has joined your group",
    highlightedPart: "Chess Club",
    readStatus: false,
  },
  notification4: {
    userName: "Rizky Hasanuddin",
    userImage: "rizky-hasanuddin",
    notiTime: "5 days ago",
    picture: "",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    notiTitle: "sent you a private message",
    highlightedPart: "",
    readStatus: true,
  },
  notification5: {
    userName: "Kimberly Smith",
    userImage: "kimberly-smith",
    notiTime: "1 week ago",
    picture: "../assets/images/image-chess.webp",
    message: "",
    notiTitle: "commented on your picture",
    highlightedPart: "",
    readStatus: true,
  },
  notification6: {
    userName: "Nathan Peterson",
    userImage: "nathan-peterson",
    notiTime: "2 weeks ago",
    picture: "",
    message: "",
    notiTitle: "reacted to your recent post",
    highlightedPart: "5 end-game strategies to increase your win rate",
    readStatus: true,
  },

  notification7: {
    userName: "Anna Kim",
    userImage: "anna-kim",
    notiTime: "2 weeks ago",
    picture: "",
    message: "",
    notiTitle: "left the group",
    highlightedPart: "Chess Club",
    readStatus: true,
  },
};

loadNotifications();
