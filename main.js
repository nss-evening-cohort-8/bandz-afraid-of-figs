let band_pictures= ["/img/img1.jpg", "/img/img2.jpg", "/img/img3.jpg"];
let afraidOfFigs = {
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
    ],
tourInformation: [
        {date: "September 12th", venue: "Bridgestone Arena", locations:"Nashville,TN", tickets: 'www.ticketmaster.com'},
        {date: "September 13th", venue: "House of Blues", locations:"Chicago, IL", tickets: 'www.ticketmaster.com'},
        {date: "September 14th", venue: "Wells Fargo Center", locations:"Philadelphia, PA", tickets: 'www.ticketmaster.com'},
        {date: "September 15th", venue: "American Airlines Arena", locations:"Miami, FL", tickets: 'www.ticketmaster.com'},
        {date: "September 16th", venue: "Smoothie King Center", locations:"New Orleans, LA", tickets: 'www.ticketmaster.com'},
        {date: "September 17th", venue: "Ryman Auditorium", locations:"Nashville,TN", tickets: 'www.ticketmaster.com'},
        {date: "September 18th", venue: "Toyota Center", locations:"Houston, TX", tickets: 'www.ticketmaster.com'},
        {date: "September 19th", venue: "MGM Grand Garden Arena", locations:"Las Vegas, NV", tickets: 'www.ticketmaster.com'},
        {date: "September 20th", venue: "Staples Center", locations:"Los Angeles, CA", tickets: 'www.ticketmaster.com'},
        {date: "September 21st", venue: "The Forum", locations:"Inglewood, CA", tickets: 'www.ticketmaster.com'},
        {date: "September 22nd", venue: "Gila River Arena", locations:"Glendale, AZ", tickets: 'www.ticketmaster.com'},
        
    ],
};


const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    if(selectedDiv){
    selectedDiv.innerHTML = stringToPrint
    }
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
    printToDom(newString, 'albumContainerMain');
};


const printImg = () => {
       
    let img ='';
    for(let i=0; i < band_pictures.length; i++){

        img += `<div class="img_band"> <img src="${band_pictures[i]}"></div>`;
    }

    printToDom(img, "image_container")
};

const tourStringBuilder = () => {
    
    let newString = '';
    for(let i=0; i<afraidOfFigs.tourInformation.length; i++){
        newString += `<div id="tour">`
        newString += `<h3 class="concert">${afraidOfFigs.tourInformation[i].date}</h3>`
        newString += `<h3 class="concert">${afraidOfFigs.tourInformation[i].venue}</h3>`
        newString += `<h3 class="concert">${afraidOfFigs.tourInformation[i].locations}</h3>`
        newString += `<a href="https://${afraidOfFigs.tourInformation[i].tickets}" target ="_blank">Tickets</a>`
        newString += `</div>`
    }
    printToDom(newString, "tour")
};

printImg();
albumsStringBuilder();
tourStringBuilder();

