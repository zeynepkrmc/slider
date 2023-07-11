var models = [
    {
        name : 'guns n roses',
        image : 'img/gunsnroses.jpeg',
        link : 'https://www.google.com/'

    },
    {
        name : 'iron_maiden',
        image : 'img/iron_maiden.jpeg',
        link : 'https://www.google.com/'

    },
    {
        name : 'metallica',
        image : 'img/gunsnroses.jpeg',
        link : 'https://www.google.com/'

    },
    {
        name : 'nirvana',
        image : 'img/gunsnroses.jpeg',
        link : 'https://www.google.com/'

    },
    {
        name : 'system of a down',
        image : 'img/system_of_a_down.jpeg',
        link : 'https://www.google.com/'

    }
];
/**bu ndex ile hangi slide  aldık onu belirledik */
var index=0;
/**model objesi üzerindeki elemanları teker teker slide a aktardık */
document.querySelector('.card-title').textContent = models[index].name;
document.querySelector('.card-img-top').setAttribute('src',models[0].image);
document.querySelector('.card-link').setAttribute('href',models[index].link);

/**click event */
document.querySelector('.fa-arrow-circle-left').addEventListener('click', function(){
    index--;
    console.log(index);
});
document.querySelector('.fa-arrow-circle-left').addEventListener('click', function(){
    index++;
    console.log(index);
});

