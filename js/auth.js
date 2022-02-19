const getUser = () => {
  const access_token = Cookies.get("access_token");
  axios
    .get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((r) => {
      console.log(r.status);
      const { data } = r;
      console.log(data);
      const non_auth_links = document.querySelectorAll(".non_auth");
      Array.from(non_auth_links).forEach((link) => {
        link.style.display = "none";
      });
      document.querySelector(
        ".user-avatar"
      ).innerHTML += `<img src="${data.images[0].url}" alt="${data.display_name}">`;
    })
    .catch(async (err) => {
      if (err.response && err.response.data) {
        const { error } = err.response.data;
        if (error) {
          try {
            const r = await axios.post("http://localhost:5000/refresh_token", {
              refresh_token: Cookies.get("refresh_token"),
            });
            Cookies.set("access_token", r.data.access_token);
            window.location.reload();
          } catch (err) {
            console.log(err);
          }
        }
      }
    });
};

if (Cookies.get("access_token")) {
  getUser();
} else {
  document.querySelector(".authenticated").style.display = "none";
}
