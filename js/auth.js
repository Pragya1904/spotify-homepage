const getUser = () => {
  const access_token = Cookies.get("access_token");
  axios
    .get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((r) => {
      const { data } = r;
      const non_auth_links = document.querySelectorAll(".non_auth");
      Array.from(non_auth_links).forEach((link) => {
        link.style.display = "none";
      });
      document.querySelector(
        ".user-avatar"
      ).innerHTML += `<img src="${data.images[0].url}" alt="${data.display_name}">`;
    })
    .catch((err) => {
      console.log(err);
    });
};

if (Cookies.get("access_token")) {
  getUser();
} else {
  document.querySelector(".authenticated").style.display = "none";
}
