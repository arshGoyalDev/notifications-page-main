let unreadCount = 3;
let countEl = document.querySelector(".unread-count");

// func() => to mark notification read;

const markRead = function (noti, countDcrement) {
  let readMarker = document.querySelector(`#${noti.id} .unread-marker`);

  noti.classList.remove("unread");
  readMarker.classList.remove("unread");

  unreadCount -= countDcrement;
  countEl.textContent = unreadCount;
};

// mark notification read

let notiSet = document.querySelectorAll(".notification");

notiSet.forEach((noti) => {
  noti.addEventListener("click", (e) => {
    if (noti.classList.contains("unread")) {
      markRead(noti, 1);
    } else {
      alert("Already Marked");
      // return;
    }
  });
});

// mark all read

let markAllBtn = document.querySelector(".mark-read-btn");

const markAllRead = function () {
  notiSet.forEach((noti) => {
    markRead(noti, unreadCount);
  });
};

markAllBtn.addEventListener("click", markAllRead);
