let afraidOfFigs = {
albums: [
    {
      imageUrl: "./img/figs_A.jpg",
      title: "Nevermind",
      year: "2001"    
    },
    {
        imageUrl: "./img/figs_B.jpg",
        title: "Rumors",
        year: "2003"    
      },
    {
        imageUrl: "./img/figs_C.jpg",
        title: "Abbey Road",
        year: "2006"    
      },
    {
        imageUrl: "./img/figs_D.jpg",
        title: "Blonde on Blonde",
        year: "2009"    
      },
    {
        imageUrl: "./img/figs_E.jpg",
        title: "Appetite For Destruction",
        year: "2011"    
      },
    {
        imageUrl: "./img/figs_F.jpg",
        title: "Thriller",
        year: "2014"    
      },
    {
        imageUrl: "./img/figs_G.jpg",
        title: "Dark Side of the Moon",
        year: "2016"    
      },
    {
        imageUrl: "./img/figs_H.jpg",
        title: "Self Titled",
        year: "2017"    
      },
    {
        imageUrl: "./img/figs_I.jpg",
        title: "Purple Rain",
        year: "2018"    
      },
  ]
}

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    if (selectedDiv) {
        selectedDiv.innerHTML = stringToPrint
    }
};

const albumsStringBuilder = () => {
    let newString = '';
    for(let i = 0; i<afraidOfFigs.albums.length; i++) {
        newString += `<div class="albumCard">`;
        newString += `<img src="${afraidOfFigs.albums[i].imageUrl}">`;
        newString += `<h2>${afraidOfFigs.albums[i].title}</h2>`;
        newString += `<h5>${afraidOfFigs.albums[i].year}</h5>`;
        newString += `</div>`; 
       
    }
    printToDom(newString, 'albumContainerMain');
 
    
};

albumsStringBuilder();

