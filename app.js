const github = new Github();
const ui = new UI();

const searcUser = document.getElementById("searchUser");

searcUser.addEventListener("keyup", e => {
  const text = e.target.value;
  if (text !== "") {
    github.getUser(text).then(data => {
      if (data.profile.message === "Not Found") {
        // show alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        //Show User
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //clear Profile
    ui.clearField();
  }
});
