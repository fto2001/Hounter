
    var tabs = document.querySelectorAll('.nav-button__button');
    var prevButton = document.querySelector('.prev-button');
    var nextButton = document.querySelector('.next-button');
    var heroCards = document.querySelector('.hero-cards');
    var currentTab = 0;

    var tabData = [
        [
            { image: 'images/villa-with-garage.png', category: 'Roselands House', price: '$ 35.000.000', name: 'Dianne Russell', place: 'Manchester, Kentucky', imageFace: 'images/dianne-good-picture.png', buttonName: 'Popular', buttonLogo: 'local_fire_department', buttonColor: 'card-image__button_background-red-color'},
            { image: 'images/roof.png', category: 'Woodlandside', price: '$ 20.000.000', name: 'Robert Fox', place: 'Dr, San Jose, South Dakota', imageFace: 'images/doctor.png', buttonName: 'New House', buttonLogo: 'home', buttonColor: 'card-image__button_background-blue-color', buttonSize: 'card-image__button_big-size'},
            { image: 'images/cottage.png', category: 'The Old Lighthouse', price: '$ 44.000.000', name: 'Ronald Richards', place: 'Santa Ana, Illinois', imageFace: 'images/ronald.png', buttonName: 'Best Deals', buttonLogo: 'account_balance_wallet', buttonColor: 'card-image__button_background-green-color', buttonSize: 'card-image__button_medium-size' },
            { image: 'images/villa-with-garage.png', category: 'Roselands House', price: '$ 35.000.000', name: 'Dianne Russell', place: 'Manchester, Kentucky', imageFace: 'images/dianne-good-picture.png', buttonName: 'Popular', buttonLogo: 'local_fire_department', buttonColor: 'card-image__button_background-red-color'},
            { image: 'images/roof.png', category: 'Woodlandside', price: '$ 20.000.000', name: 'Robert Fox', place: 'Dr, San Jose, South Dakota', imageFace: 'images/doctor.png', buttonName: 'New House', buttonLogo: 'home', buttonColor: 'card-image__button_background-blue-color', buttonSize: 'card-image__button_big-size' }
             // Дані для першого табу
        ],
        [ 
            { image: 'images/cottage.png', category: 'The Old Lighthouse', price: '$ 44.000.000', name: 'Ronald Richards', place: 'Santa Ana, Illinois', imageFace: 'images/ronald.png', buttonName: 'Best Deals', buttonLogo: 'account_balance_wallet', buttonColor: 'card-image__button_background-green-color', buttonSize: 'card-image__button_medium-size' },
            { image: 'images/villa-with-garage.png', category: 'Roselands House', price: '$ 35.000.000', name: 'Dianne Russell', place: 'Manchester, Kentucky', imageFace: 'images/dianne-good-picture.png', buttonName: 'Popular', buttonLogo: 'local_fire_department', buttonColor: 'card-image__button_background-red-color'},
            { image: 'images/roof.png', category: 'Woodlandside', price: '$ 20.000.000', name: 'Robert Fox', place: 'Dr, San Jose, South Dakota', imageFace: 'images/doctor.png', buttonName: 'New House', buttonLogo: 'home', buttonColor: 'card-image__button_background-blue-color', buttonSize: 'card-image__button_big-size' },
            { image: 'images/cottage.png', category: 'The Old Lighthouse', price: '$ 44.000.000', name: 'Ronald Richards', place: 'Santa Ana, Illinois', imageFace: 'images/ronald.png', buttonName: 'Best Deals', buttonLogo: 'account_balance_wallet', buttonColor: 'card-image__button_background-green-color', buttonSize: 'card-image__button_medium-size' },
            { image: 'images/villa-with-garage.png', category: 'Roselands House', price: '$ 35.000.000', name: 'Dianne Russell', place: 'Manchester, Kentucky', imageFace: 'images/dianne-good-picture.png', buttonName: 'Popular', buttonLogo: 'local_fire_department', buttonColor: 'card-image__button_background-red-color'},
            // Дані для другого табу
        ],
        [
            { image: 'images/roof.png', category: 'Woodlandside', price: '$ 20.000.000', name: 'Robert Fox', place: 'Dr, San Jose, South Dakota', imageFace: 'images/doctor.png', buttonName: 'New House', buttonLogo: 'home', buttonColor: 'card-image__button_background-blue-color', buttonSize: 'card-image__button_big-size' },
            { image: 'images/cottage.png', category: 'The Old Lighthouse', price: '$ 44.000.000', name: 'Ronald Richards', place: 'Santa Ana, Illinois', imageFace: 'images/ronald.png', buttonName: 'Best Deals', buttonLogo: 'account_balance_wallet', buttonColor: 'card-image__button_background-green-color', buttonSize: 'card-image__button_medium-size' },
            { image: 'images/villa-with-garage.png', category: 'Roselands House', price: '$ 35.000.000', name: 'Dianne Russell', place: 'Manchester, Kentucky', imageFace: 'images/dianne-good-picture.png', buttonName: 'Popular', buttonLogo: 'local_fire_department', buttonColor: 'card-image__button_background-red-color' },
            { image: 'images/roof.png', category: 'Woodlandside', price: '$ 20.000.000', name: 'Robert Fox', place: 'Dr, San Jose, South Dakota', imageFace: 'images/doctor.png', buttonName: 'New House', buttonLogo: 'home', buttonColor: 'card-image__button_background-blue-color', buttonSize: 'card-image__button_big-size' },
            { image: 'images/cottage.png', category: 'The Old Lighthouse', price: '$ 44.000.000', name: 'Ronald Richards', place: 'Santa Ana, Illinois', imageFace: 'images/ronald.png', buttonName: 'Best Deals', buttonLogo: 'account_balance_wallet', buttonColor: 'card-image__button_background-green-color', buttonSize: 'card-image__button_medium-size' },
            
            // Дані для третього табу
        ]
    ];

    function showTab(index) {
        tabs.forEach(function (tab, tabIndex) {
            if (tabIndex === index) {
                tab.classList.add('background-green-color');
            } else {
                tab.classList.remove('background-green-color');
            }
        });
        currentTab = index; // Додали оновлення поточного табу
        updateHeroCards();
    }

    function updateHeroCards() {
        heroCards.innerHTML = '';

        tabData[currentTab].forEach(function (cardData) {
            var card = document.createElement('div');
            card.className = 'hero-card';
            card.innerHTML = `
                <div class="card-image">
                    <img src="${cardData.image}" alt="image">
                    <button class="card-image__button ${cardData.buttonColor} ${cardData.buttonSize}"><span class="material-symbols-outlined">${cardData.buttonLogo}</span> ${cardData.buttonName}</button>
                </div>
                <h3 class="hero-card__category">${cardData.category}</h3>
                <h4 class="hero-card__price">${cardData.price}</h4>
                <div class="person">
                    <img src="${cardData.imageFace}" alt="person">
                    <div class="person-name">
                        <h5 class="person-name__full-name">${cardData.name}</h5>
                        <p class="person-name__place">${cardData.place}</p>
                    </div>
                </div>
            `;
            heroCards.appendChild(card);
            
        });
    }

    prevButton.addEventListener('click', function () {
        if (currentTab > 0) {
            showTab(currentTab - 1);
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentTab < tabs.length - 1) {
            showTab(currentTab + 1);
        }
    });

    tabs.forEach(function (tab, tabIndex) {
        tab.addEventListener('click', function () {
            showTab(tabIndex);
        });
    });

    showTab(currentTab); // Показати початковий таб
