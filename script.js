function createPost() {
  const text = document.getElementById("textInput").value.trim();
  const bgClass = document.getElementById("bgSelect").value;
  const color = document.getElementById("textColor").value;

  if (!text) {
    alert("Please write something!");
    return;
  }

  const post = document.createElement("div");
  post.classList.add("post", bgClass);
  post.style.color = color;
  post.innerText = text;

  document.getElementById("feed").prepend(post);
  document.getElementById("textInput").value = "";
}
