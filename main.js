let afraidOfFigs = {
albums: [
    {
      imageUrl: "https://i.imgur.com/OFbP0lp.jpg",
      title: "Nevermind",
      year: "2001"    
    },
    {
        imageUrl: "https://i.imgur.com/g93zMrX.jpg",
        title: "Rumors",
        year: "2003"    
      },
    {
        imageUrl: "https://i.imgur.com/d1QNeDz.jpg",
        title: "Abbey Road",
        year: "2006"    
      },
    {
        imageUrl: "https://i.imgur.com/ZdffId8.jpg",
        title: "Blonde on Blonde",
        year: "2009"    
      },
    {
        imageUrl: "https://i.imgur.com/TmPeycg.jpg",
        title: "Appetite For Destruction",
        year: "20011"    
      },
    {
        imageUrl: "https://i.imgur.com/HAKabfZ.jpg",
        title: "Thriller",
        year: "2014"    
      },
    {
        imageUrl: "https://i.imgur.com/5vaSoY0.jpg",
        title: "Dark Side of the Moon",
        year: "2016"    
      },
    {
        imageUrl: "https://i.imgur.com/cSoldzo.jpg",
        title: "Self Titled",
        year: "2017"    
      },
    {
        imageUrl: "https://i.imgur.com/McmbdoW.jpg",
        title: "Purple Rain",
        year: "2018"    
      },
  ]
}

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint
    

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

