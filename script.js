function like(element) {
    var parent = element.parentElement;
    likeCount = parent.querySelector(".like-number");
    likeCount.innerHTML++;
}
