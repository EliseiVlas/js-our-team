const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// creo un valore di ouput sulla pagina
const listaTeam = document.querySelector(".container2")

let lista = "";
for (let i = 0; i < teamMembers.length; i++){

    let infoEsimo = teamMembers[i]

    const { name, role, email, img } = infoEsimo

    lista += `
      <div class="card mb-3" style="width: 430px; height: 100px; background-color: black; color:white; border-radius: 0px;">
            <div class="row g-0">
            <div class="col-md-4">
              <img src="${img}" class="img-fluid rounded-start" style="height: 100px; border-radius: 0px; " alt="${name}">
            </div>
            <div class="col-md-8">
              <div class="card-body" style="padding-left: 0px; padding-top: 7px;">
              <h5 class="card-title">${name}</h5>
              <span class="card-text">${role}</span>
              <p class="card-text">${email}</p>
              </div>
            </div>
            </div>
        </div>
    `
    console.log(lista);
    
}
// ouput
listaTeam.innerHTML = lista;
