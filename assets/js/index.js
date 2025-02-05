const teamMembers = [
    {
        name: "Munira Ozarwala",
        image: "assets/img/Hive/Done/4.1 Munira.jpg",
    },
    {
        name: "John Doe",
        image: "assets/img/Hive/Done/john.jpg",
    },
    // Add more members as needed
];

const teamContainer = document.getElementById("team-container");

teamMembers.forEach((member) => {
    const teamDiv = document.createElement("div");
    teamDiv.classList.add("team-widget-boxarea");

    teamDiv.innerHTML = `
      <div class="img1 image-anime">
          <img src="${member.image}" alt="${member.name}" />
      </div>
      <div class="space20"></div>
      <div class="text-area">
          <a href="speakers">${member.name}</a>
          <div class="space16"></div>
      </div>
    `;

    teamContainer.appendChild(teamDiv);
});
