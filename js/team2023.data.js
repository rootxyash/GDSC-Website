/* ********************************************************** */
// Members Details Data Object
/* ********************************************************** */

let facul = [
  {
    id: 0,
    name: "Mrs. Rasika Rewatkar",
    avatar: "../assets/img/team/Dr.DKK.jfif",
    badges: `
      <span class="red">Professor</span>
      <span class="green">KITS, Ramtek</span>
    `,
    cardBorderColor: "blue",
    // socialGithubLink: "#",
    socialLinkedinLink: "https://www.linkedin.com/in/dipak-kumar-kole-a2a4ab38/",
    // socialTwitterLink: "#",

  }
]
// Lead Member Details
let leadMemberDetails2023 = [
  {
    id: 0,
    name: "Sejal Chaurasia",
    avatar: "../assets/img/team/Shreya_lead_23.jfif",
    badges: `
                    <span class="blue">2023</span>
                    <span class="green">GDSC</span>
                    <span class="yellow">Lead</span>
                `,
    cardBorderColor: "red",

    socialGithubLink: "https://github.com/zugzwang03",
    socialLinkedinLink: "https://www.linkedin.com/in/shreya-sarkar-a788b4225/",
    socialTwitterLink: "https://twitter.com/zugzwang03",
  },
  {
    id: 0,
    name: "Yash Devkate",
    avatar: "../assets/img/team/Shreya_lead_23.jfif",
    badges: `
                    <span class="blue">2023</span>
                    <span class="green">GDSC</span>
                    <span class="yellow">Co-Lead</span>
                `,
    cardBorderColor: "red",

    socialGithubLink: "https://github.com/zugzwang03",
    socialLinkedinLink: "https://www.linkedin.com/in/shreya-sarkar-a788b4225/",
    socialTwitterLink: "https://twitter.com/zugzwang03",
  },
  {
    id: 0,
    name: "Samiksha Mendhe",
    avatar: "../assets/img/team/Shreya_lead_23.jfif",
    badges: `
                    <span class="blue">2023</span>
                    <span class="green">GDSC</span>
                    <span class="yellow">Co-Lead</span>
                `,
    cardBorderColor: "red",

    socialGithubLink: "https://github.com/zugzwang03",
    socialLinkedinLink: "https://www.linkedin.com/in/shreya-sarkar-a788b4225/",
    socialTwitterLink: "https://twitter.com/zugzwang03",
  }
  
];

// *************** Core Members Details 2023 ***************************
let coreMembersDetails2023 = [
  {
    id:0,
    name:"Param Chauragade",
    avatar: "../assets/img/team/Zaid_Mahmud.jfif",
    badges: `
      <span class="green">Web Devlopment</span>
      <span class="blue">Lead</span>
      `,
    cardBorderColor: "red",
    socialGithubLink: "",
    socialLinkedinLink: "",
    socialTwitterLink: "",
  },
  {
    id:1,
    name:"Yash Raut",
    avatar: "../assets/img/team/Arjun_Choudhury.jfif",
    badges: `
      <span class="red">Android Development</span>
      <span class="yellow">Lead</span>
    `,
    cardBorderColor: "blue",
    socialGithubLink: "",
    socialLinkedinLink: "",
    socialTwitterLink: "",
  },
  {
    id:2,
    name:"Sameer Tarare",
    avatar: "../assets/img/team/Sayan_Majumder.jfif",
    badges: `
      <span class="blue">Cybersecurity</span>
      <span class="red">Head</span>
    `,
    cardBorderColor: "green",
    socialGithubLink: "https://github.com/Sayan404",
    socialLinkedinLink: "https://www.linkedin.com/in/sayan404",
    socialTwitterLink: "https://twitter.com/SayMa404",
  },
  {
    id:3,
    name:"Rahul Salame",
    avatar: "../assets/img/team/Abhigyan_Singh.jfif",
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
    avatar: "../assets/img/team/Dhiraj_Thakur.jfif",
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

