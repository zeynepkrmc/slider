var models = [
    {
        name : 'guns n roses',
        image : 'img/gunsnroses.jpeg',
        link : 'https://www.google.com/'

    },
    {
        name : 'iron_maiden',
        image : 'img/iron_maiden.jpg',
        link : 'https://www.google.com/'

    },
    {
        name : 'metallica',
        image : 'img/metallica.jpg',
        link : 'https://www.google.com/'

    },
    {
        name : 'nirvana',
        image : 'img/nirvana.jpg',
        link : 'https://www.google.com/'

    },
    {
        name : 'system of a down',
        image : 'img/system_of_a_down.jpeg',
        link : 'https://www.google.com/'

    }
];
/**bu index ile hangi slide  aldık onu belirledik */
var index=0;

/**number of objects */
var slideCount = models.length;

//for the direction buttons usage
var interval;

/**object for duration */
var settings = {
    duration : '2000', /**default time 2 sec.*/
    random : false /**randomly show */
};




/**function call */
//showSlide(index); no need instead below
init(settings);

/**getting references of icons, when hover icons auto timer stop and when not hover it continues */
document.querySelectorAll('.arrow').forEach(function(item){//forEach for all elements
    item.addEventListener('mouseenter', function(){
        clearInterval(interval); //moueenter event added to two directioon buttons
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
});

/** */
function init(settings){

    //check if a random  number equal to the produced one with d0-while
    var prev;

    interval = setInterval(function(){
        if(settings.random){
            //random index
            do {
            index = Math.floor(Math.random() * slideCount);
            } while(index == prev)
            prev = index;
        }else{
            //increased index
            if(slideCount == index+1){//if reached ot last slide and equal number occured
                index = -1;

            }
            //other situations
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);
    }, settings.duration)
}



/**model objesi üzerindeki elemanları teker teker slide a aktarımı */
/**number of objects should not be < 0 */
function showSlide(i){

    index = i;/**locally set (lokal olarak aktarldı) */
    if (i<0) {
        index = slideCount - 1; /**sends to first slide when it comes last one */
    }
    else if (i >= slideCount) {
        index = 0; /**vice versa */
    }
document.querySelector('.card-title').textContent = models[index].name;
document.querySelector('.card-img-top').setAttribute('src',models[index].image);
document.querySelector('.card-link').setAttribute('href',models[index].link);
}

//read more link event
document.querySelector('.card-link').addEventListener('click', function(event) {
    event.preventDefault();
    var url = models[index].link;
    window.open(url, '_blank');
});

/**click event */
document.querySelector('.fa-arrow-circle-left').addEventListener('click', function(){
    index--;
    /**index value sent here  */
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function(){
    index++;
    /*index value sent here */ 
    showSlide(index);
    console.log(index);
});
