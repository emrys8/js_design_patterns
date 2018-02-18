var listPanel = document.querySelector('.list-panel'),
    catNamePara = document.querySelector('.cat-name'),
    catClickCountPara = document.querySelector('.cat-click-count'),
    imageBox = document.querySelector('.image-box');

// a collection of all cats
var cats = [
    {
        name: 'Tom',
        countClick: 0,
        image: './images/cat1.jpg'
    },

    {
        name: 'Juanita',
        countClick: 0,
        image: './images/cat2.jpg'
    },

    {
        name: 'Perry',
        countClick: 0,
        image: './images/cat3.jpg'
    }
];

// create a list of all cat objects
(function() {
    var list = document.createElement('ul');
    for (var i = 0, len = cats.length; i < len; i++) {
        var cat = cats[i];
        var listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(cat.name));
        list.appendChild(listItem);
    }

    listPanel.appendChild(list);
}());