let like_btn = document.getElementById("like_btn");
let dislike_btn = document.getElementById("dislike_btn");

like_btn.addEventListener("click", (e) => {
  likes.innerHTML = 1;
  like_btn.disabled = true;
  dislike_btn.disabled = true;
});
dislike_btn.addEventListener("click", (e) => {
  dislikes.innerHTML = 1;
  like_btn.disabled = true;
  dislike_btn.disabled = true;
});
