
let band_pictures= ["/img/img1.jpg", "/img/img2.jpg", "/img/img3.jpg"];


const printToDom = (imageToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = imageToPrint;
    };

   const printImg = () => {
       
        let img ='';
        for(let i=0; i < band_pictures.length; i++){

            img += `<div class="img_band"> <img src="${band_pictures[i]}"></div>`;
        };

        printToDom(img, "image_container")
}

printImg();


