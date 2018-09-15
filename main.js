const bandMembers = {
    joey: [
        {name:'Joey', instrument:'vocals', hometown:'Nashville, TN'}
    ],
    tom: [
        {name:'Tom', instrument:'guitar', hometown:'New York, NY'}
    ],
    jim: [
        {name:'Jim', instrument:'drums', hometown:'Austin, TX'}
    ]
};

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const membersStringBuilder1 = () => {
    let newString = '';
    for(let i=0; i<bandMembers.joey.length; i++) {
        newString+= `<div class="memberCard">`
        newString+= `<h3>${bandMembers.joey[i].name}</h3>`
        newString+= `<p>${bandMembers.joey[i].instrument}</p>`
        newString+= `<p>${bandMembers.joey[i].hometown}</p>`
        newString+= `</div>`
    }
    printToDom(newString, 'memberInfo1');
  };
const membersStringBuilder2 = () => {
    let newString = '';
    for(let i=0; i<bandMembers.tom.length; i++) {
        newString+= `<div class="memberCard">`
        newString+= `<h3>${bandMembers.tom[i].name}</h3>`
        newString+= `<p>${bandMembers.tom[i].instrument}</p>`
        newString+= `<span>${bandMembers.tom[i].hometown}</span>`
        newString+= `</div>`
    }
    printToDom(newString, 'memberInfo2');
  };
const membersStringBuilder3 = () => {
    let newString = '';
    for(let i=0; i<bandMembers.jim.length; i++) {
        newString+= `<div class="memberCard">`
        newString+= `<h3>${bandMembers.jim[i].name}</h3>`
        newString+= `<p>${bandMembers.jim[i].instrument}</p>`
        newString+= `<p>${bandMembers.jim[i].hometown}</p>`
        newString+= `</div>`
    }
    printToDom(newString, 'memberInfo3');
  };

membersStringBuilder1();
membersStringBuilder2();
membersStringBuilder3();

let band_pictures= ["/img/img1.jpg", "/img/img2.jpg", "/img/img3.jpg"];
let afraidOfFigs = {
tour: "na",
members: "na",
albums: [
    {
      imageUrl: "https://orig00.deviantart.net/a457/f/2008/223/f/9/weird_square_things_by_kurachan.png",
      title: "Squares",
      year: "2001"    
    },
    {
        imageUrl: "http://forum.curvefever.com/sites/default/files/ideas14Mar/square%20big.png",
        title: "More Squares",
        year: "2003"    
      },
    {
        imageUrl: "https://allgiftsconsidered.com/wp-content/uploads/2013/08/weird-square-chair.jpg",
        title: "Squares On Legs",
        year: "2006"    
      },
    {
        imageUrl: "https://avatars2.githubusercontent.com/u/8086224?s=88&v=4",
        title: "Alien Square",
        year: "2009"    
      },
  ]
};

const albumsStringBuilder = () => {
    let newString = '';
    for(let i = 0; i<afraidOfFigs.albums.length; i++) {
        newString += `<div class ="image">`;
        newString += `<img src="${afraidOfFigs.albums[i].imageUrl}">`;
        newString += `<h2>${afraidOfFigs.albums[i].title}</h2>`;
        newString += `<h5>${afraidOfFigs.albums[i].year}</h5>`;
        newString += `</div>`;    
    }
    printToDom(newString, 'albumCardA');
    printToDom(newString, 'albumCardB');
    
};



const printImg = () => {
       
    let img ='';
    for(let i=0; i < band_pictures.length; i++){

        img += `<div class="img_band"> <img src="${band_pictures[i]}"></div>`;
    };

    printToDom(img, "image_container")
}

printImg();
albumsStringBuilder();
