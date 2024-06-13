// mark notification read

let notiSet = document.querySelectorAll(".notification");

notiSet.forEach((noti) => {
  noti.addEventListener("click", (e) => {
    if (noti.classList.contains("unread")) {
      let readMarker = document.querySelector(`#${noti.id} .unread-marker`);

      noti.classList.remove("unread");
      readMarker.classList.remove("unread");
    } else {}
  });
});


