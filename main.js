const bandMembers = [

    { name: 'Joey', instrument: 'vocals', hometown: 'Nashville, TN', image: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg" },

    { name: 'Tom', instrument: 'guitar', hometown: 'New York, NY', image: "http://cdn.playbuzz.com/cdn//144320c8-a8c8-43db-b6a4-d9ea26f32a24/5b6f640b-cdfd-4de5-a592-92911aa9ab65.jpg" },

    { name: 'Jim', instrument: 'drums', hometown: 'Austin, TX', image: "https://onmilwaukee.com/images/articles/bu/bucksfoofightersdrummer/bucksfoofightersdrummer_fullsize_story1.jpg?20160202102658" }
];

let band_pictures = ["/img/img1.jpg", "/img/img2.jpg", "/img/img3.jpg"];
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
let tourSchedule = {
    tourInformation: [

        { date: 'September 15th', venue: 'Ryman Auditorium', locations: 'Nashville, TN', tickets: "www.ticketmaster.com" },
        { date: 'September 16th', venue: 'Shoreline Ampitheater', locations: 'Menlo Park, CA', tickets: "www.ticketmaster.com" },
        { date: 'September 17th', venue: 'Bridgestone Arena', locations: 'Nashville, TN', tickets: "www.ticketmaster.com" },
        { date: 'September 18th', venue: 'Ascend Ampitheater', locations: 'Nashville, TN', tickets: "www.ticketmaster.com" },
        { date: 'September 19th', venue: 'American Airlines Center', locations: 'Dallas, TX', tickets: "www.ticketmaster.com" },
        { date: 'September 20th', venue: 'Toyota Center', locations: 'Houston, TX', tickets: "www.ticketmaster.com" },
        { date: 'September 21st', venue: 'Wells Fargo Center', locations: 'Philadelphia, PA', tickets: "www.ticketmaster.com" },
        { date: 'September 23rd', venue: 'America Airlines Arena', locations: 'Miami, FL', tickets: "www.ticketmaster.com" },
        { date: 'September 24th', venue: 'Gila River Arena', locations: 'Glendale, AZ', tickets: "www.ticketmaster.com" },
        { date: 'September 25th', venue: 'Vivint Smart Home Arena', locations: 'Salt Lake City, UT', tickets: "www.ticketmaster.com" },
        { date: 'September 26th', venue: 'The Forum', locations: 'Inglewood, CA', tickets: "www.ticketmaster.com" },
    ]
};



const albumsStringBuilder = () => {
    let newString = '';
    for (let i = 0; i < afraidOfFigs.albums.length; i++) {
        newString += `<div class="albumCard">`;
        newString += `<img src="${afraidOfFigs.albums[i].imageUrl}">`;
        newString += `<h2>${afraidOfFigs.albums[i].title}</h2>`;
        newString += `<h5>${afraidOfFigs.albums[i].year}</h5>`;
        newString += `</div>`;

    }
    printToDom(newString, 'albumContainerMain');


};

const printImg = () => {

    let img = '';
    for (let i = 0; i < band_pictures.length; i++) {

        img += `<div class="img_band"> <img src="${band_pictures[i]}"></div>`;
    };

    printToDom(img, "image_container")
}
const membersStringBuilder = () => {
    let newString = '';
    for (let i = 0; i < bandMembers.length; i++) {
        newString += `<div class="memberCard">`
        newString += `<img class="imageMemberCard"src="${bandMembers[i].image}">`
        newString += `<div id="memberInfo1">`
        newString += `<h3>${bandMembers[i].name}</h3>`
        newString += `<p>${bandMembers[i].instrument}</p>`
        newString += `<p>${bandMembers[i].hometown}</p>`
        newString += `</div></div>`
    }
    printToDom(newString, 'memberWrapper');
};
const tourStringBuilder = () => {

    let newString = '';
    for (let i = 0; i < tourSchedule.tourInformation.length; i++) {
        newString += `<div id="tour">`
        newString += `<h2 class="concert">${tourSchedule.tourInformation[i].date}</h2>`
        newString += `<h4 class="concert">${tourSchedule.tourInformation[i].venue}</h4>`
        newString += `<h4 class="concert">${tourSchedule.tourInformation[i].locations}</h4>`
        newString += `<a href="https://${tourSchedule.tourInformation[i].tickets}" target ="_blank" class="concert">Tickets</a>`
        newString += `</div>`
    }
    printToDom(newString, "tour-container")
};
membersStringBuilder();
// membersStringBuilder(memberInfo2);
// membersStringBuilder(memberInfo3);

printImg();
albumsStringBuilder();
tourStringBuilder();

