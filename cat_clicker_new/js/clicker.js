$(document).ready(() => {

    const model = [
        {
            id: 'cat01',
            name: 'Kitty',
            clickedTimes: 0,
            image: '../images/cat1.jpg'
        },

        {
            id: 'cat02',
            name: 'Arya',
            clickedTimes: 0,
            image: '../images/cat2.jpg'
        },

        {
            id: 'cat03',
            name: 'Sansa',
            clickedTimes: 0,
            image: '../images/cat3.jpg'
        },

        {
            id: 'cat04',
            name: 'Obinze',
            clickedTimes: 0,
            image: '../images/cat4.jpg'
        },

        {
            id: 'cat05',
            name: 'Kute',
            clickedTimes: 0,
            image: '../images/cat5.jpg'
        }
    ];

    const controller = {

        init: function() {
            view.init();
        },

        getCat: function(catId) {
            const cat = model.filter(cat => cat.id === catId);
            return cat[0];
        },

        incrementClickedTimes: function(catId) {
            const cat = this.getCat(catId);
            cat.clickedTimes += 1;
            view.render();
        },

        getClickedTimes: function(catId) {
            const cat = this.getCat(catId);
            return cat.clickedTimes;
        },

        getCats: function() {
            return model;
        }
    };

    const view = {
        init: function() {

            this.$listPanel = $("#list-panel");
            this.$catList = $("#cat-list");
            this.$imageBox = $("#image-box");
            this.$clickCount = $("#cat-click-count");
            this.$catName = $("#cat-name");
            
            // list of cat names
            const cats = controller.getCats();
            cats.forEach((cat) => {
                const $li = $("<li></li>").addClass("cat-name").text(cat.name);
                $li.data("key", cat.id);
                this.$catList.append($li);
            });

            this.render();
        },

        render: function() {
            // this.init();
            // get all lists
            const $allLists = $("#cat-list li");
            // console.log($allLists.length);
            $allLists.each((idx, el) => {
                $(el).click(() => {
                    // get cat with the key stored in each list item
                    const cat = controller.getCat($(el).data("key"));
                    this.$catName.text(cat.name);
                    this.$clickCount.text(cat.clickedTimes);

                    const $img = $("<img>").attr({ src: cat.image }, 
                                            { alt: `Udacity Cat ${cat.id}`});
                    this.$imageBox.html("");
                    this.$imageBox.append($img);
                });
            });
        }
    };

    controller.init();
})