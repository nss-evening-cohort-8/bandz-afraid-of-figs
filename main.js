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
}

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint

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

albumsStringBuilder();

