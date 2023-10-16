/* ********************************************************** */
// Members Details Data Object
/* ********************************************************** */

let facul = [
  {
    id: 0,
    name: "Mrs. Rasika Rewatkar",
    avatar: "../assets/img/team/rasikamam.png",
    badges: `
      <span class="red">Professor</span>
      <span class="green">KITS, Ramtek</span>
    `,
    cardBorderColor: "blue",
    // socialGithubLink: "#",
    socialLinkedinLink: "",
    // socialTwitterLink: "#",

  }
]
// Lead Member Details
let leadMemberDetails2023 = [
  {
    id: 0,
    name: "Sejal Chaurasia",
    avatar: "../assets/img/team/sejal.png",
    badges: `
                    <span class="blue">2023</span>
                    <span class="green">GDSC</span>
                    <span class="yellow">Lead</span>
                `,
    cardBorderColor: "red",

    socialGithubLink: "",
    socialLinkedinLink: "",
    socialTwitterLink: "",
  },
  {
    id: 0,
    name: "Yash Devkate",
    avatar: "../assets/img/team/yash.png",
    badges: `
                    <span class="blue">2023</span>
                    <span class="green">GDSC</span>
                    <span class="yellow">Co-Lead</span>
                `,
    cardBorderColor: "red",

    socialGithubLink: "",
    socialLinkedinLink: "",
    socialTwitterLink: "",
  },
  {
    id: 0,
    name: "Samiksha Mendhe",
    avatar: "../assets/img/team/samiksha.png",
    badges: `
                    <span class="blue">2023</span>
                    <span class="green">GDSC</span>
                    <span class="yellow">Co-Lead</span>
                `,
    cardBorderColor: "red",

    socialGithubLink: "",
    socialLinkedinLink: "",
    socialTwitterLink: "",
  }
  
];

// *************** Core Members Details 2023 ***************************
let coreMembersDetails2023 = [
  {
    id:0,
    name:"Param Chauragade",
    avatar: "../assets/img/team/param.png",
    badges: `
      <span class="green">Web Devlopment</span>
      <span class="blue">Head</span>
      `,
    cardBorderColor: "red",
    socialGithubLink: "",
    socialLinkedinLink: "",
    socialTwitterLink: "",
  },
  {
    id:1,
    name:"Yash Raut",
    avatar: "../assets/img/team/raut.png",
    badges: `
      <span class="red">Android Development</span>
      <span class="yellow">Head</span>
    `,
    cardBorderColor: "blue",
    socialGithubLink: "",
    socialLinkedinLink: "",
    socialTwitterLink: "",
  },
  {
    id:2,
    name:"Sameer Tarare",
    avatar: "../assets/img/team/sameer.png",
    badges: `
      <span class="blue">Cybersecurity</span>
      <span class="red">Head</span>
    `,
    cardBorderColor: "green",
    socialGithubLink: "",
    socialLinkedinLink: "",
    socialTwitterLink: "",
  },
  {
    id:3,
    name:"Rahul Salame",
    avatar: "../assets/img/team/rahul.png",
    badges: `
      <span class="green">Management Team</span>
      <span class="blue">Head</span>
    `,
    cardBorderColor: "yellow",
    socialGithubLink: "",
    socialLinkedinLink: "",
    socialTwitterLink: "",
  },
  {
    id:4,
    name:"Sujal Taware",
    avatar: "../assets/img/team/sujal.png",
    badges: `
      <span class="green">Design and Content Team</span>
      <span class="red">Head</span>
    `,
    cardBorderColor: "red",
    socialGithubLink: "",
    socialLinkedinLink: "",
    socialTwitterLink: "",
  },
]


// Extended Core Members Details 2023



/* ********************************************************** */
// Members Preview Mapping
/* ********************************************************** */
let leadMember = document.querySelector("#lead");
let coreMember = document.querySelector("#core");
let excoreMember = document.querySelector("#exCore");
let faculty = document.querySelector("#faculty-advisor");

Object.values(facul).map((val) => {
  faculty.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.badges}</p>

            <div class="social">
              
                <a href="${val.socialLinkedinLink}"><i class="bx bxl-linkedin"></i></a>
                
            </div>
        </div>
    `;
});
// **************** Lead Member 2023 ***********************

Object.values(leadMemberDetails2023).map((val) => {
  leadMember.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.badges}</p>

            <div class="social">
                <a href="${val.socialGithubLink}" ><i class="bx bxl-github"></i></a>
                <a href="${val.socialLinkedinLink}"><i class="bx bxl-linkedin"></i></a>
                <a href="${val.socialTwitterLink}"><i class="bx bxl-twitter"></i></a>
            </div>
        </div>
    `;
});

// Core Members   
Object.values(coreMembersDetails2023).map((val) => {
  coreMember.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.badges}</p>

            <div class="social">
                <a href="${val.socialGithubLink}"><i class="bx bxl-github"></i></a>
                <a href="${val.socialLinkedinLink}" ><i class="bx bxl-linkedin"></i></a>
                <a href="${val.socialTwitterLink}"><i class="bx bxl-twitter"></i></a>
            </div>
        </div>
    `;
});



// ************************* Extended Core Members 2023 *******************************
Object.values(exCoreMemberDetails2023).map((val) => {
  excoreMember.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.badges}</p>

            <div class="social">
                <a href="${val.socialGithubLink}" ><i class="bx bxl-github"></i></a>
                <a href="${val.socialLinkedinLink}" ><i class="bx bxl-linkedin"></i></a>
                <a href="${val.socialTwitterLink}" ><i class="bx bxl-twitter"></i></a>
            </div>
        </div>
    `;
});
