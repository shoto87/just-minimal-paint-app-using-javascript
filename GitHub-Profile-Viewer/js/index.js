function fetchProfile() {
  const username = document.getElementById("username").value;
  if (!username) {
    alert("Please enter valid username");
    return;
  }
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("newtwork error");
      }
      return response.json();
    })
    .then((data) => {
      displayProfile(data);
    })
    .catch((error) => {
      alert("error", error);
    });

  function displayProfile(profileData) {
    const profileContainer = document.getElementById("profile");
    profileContainer.innerHTML = `
         <h2>${profileData.login}</h2>
         <img src="${
           profileData.avatar_url
         }" style="width:100px;height=100px;border-radius:50%;"></img>
         <p>Bio: ${profileData.bio || "No Bio Available"}</p>
         <p>Followers: ${profileData.following}</p>
         <p>Public Repos: ${profileData.public_repos}</p>
         <div>
        <a href="${profileData.blog || "No Blog Available"}">check out blog</a>
         
         </div>
         <div>
         <a href="${profileData.html_url || ""}">visit GitHub Profile</a>
         
         </div>
        `;
  }
}
