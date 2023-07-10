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

var index=1;

document.querySelector('.card-title').textContent = models[index].name;
document.querySelector('.card-img-top').setAttribute('src',models[0].image);
document.querySelector('.card-link').setAttribute('href',models[index].link);