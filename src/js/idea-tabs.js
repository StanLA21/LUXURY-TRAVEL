const ideaData = {
    usa: [
        {
            dateMonth: 'JUNE',
            dateDay: '23',
            img: '/tours/usa/hollywood.webp',
            title: 'HOLLYWOOD',
            text: 'Immerse yourself in the heart of cinematic history. Enjoy VIP access to iconic landmarks, luxury rooftop dining, and breathtaking views from the Hollywood Hills. ',
            link: '#learn-more'
        },
        {
            dateMonth: 'JULY',
            dateDay: '14',
            img: '/tours/usa/sequoia-national-park.webp',
            title: 'GIANT SEQUOIA NATIONAL PARK',
            text: 'Walk among ancient natural giants in California’s majestic Sierra Nevada. Stand before General Sherman, the world’s largest living tree, and explore serene mountain trails.',
            link: '#learn-more'
        },
        {
            dateMonth: 'AUGUST',
            dateDay: '05',
            img: '/tours/usa/niagara-falls.webp',
            title: 'NIAGARA FALLS',
            text: 'Witness the breathtaking power and thunderous roar of one of the world’s most magnificent natural wonders. Experience unforgettable up-close boat views and mist-kissed panoramas. ',
            link: '#learn-more'
        }
    ],
    europe: [

        {
            dateMonth: 'SEPTEMBER',
            dateDay: '12',
            img: '/tours/europe/britan.webp',
            title: 'ROYAL LONDON & BRITISH HERITAGE',
            text: 'Discover the timeless elegance of London. Experience royal palaces, world-class West End theatre, iconic landmarks, and exclusive excursions through the British countryside. ',
            link: '#learn-more'
        },
        {
            dateMonth: 'MAY',
            dateDay: '28',
            img: '/tours/europe/amsterdam.webp',
            title: 'AMSTERDAM & DUTCH CANALS',
            text: 'Explore the charming historic canals, world-famous museums, and vibrant tulip fields of Amsterdam aboard private luxury boats. ',
            link: '#learn-more'
        },
        {
            dateMonth: 'OCTOBER',
            dateDay: '03',
            img: '/tours/europe/paris-france.webp',
            title: 'PARIS & FRENCH RIVIERA',
            text: 'Indulge in the romance of Paris, from private tours of the Louvre to Michelin-starred dining, followed by the sun-drenched glamour of the French Riviera. ',
            link: '#learn-more'
        },
        {
            dateMonth: 'MAY',
            dateDay: '15',
            img: '/tours/europe/rome-italy.webp',
            title: 'ROME & ANCIENT ITALY',
            text: 'Step back in time through the immortal city of Rome. Enjoy private VIP tours of the Colosseum, Vatican treasures, and exquisite Italian culinary experiences. ',
            link: '#learn-more'
        }
    ],
    asia: [

        {
            dateMonth: 'SEPTEMBER',
            dateDay: '18',
            img: '/tours/asia/great-wall.webp',
            title: 'GREAT WALL OF CHINA',
            text: 'Trek along one of humanity’s greatest architectural marvels. Experience breathtaking mountain ridge vistas and private sunset tours over ancient stone watchtowers. ',
            link: '#learn-more'
        },
        {
            dateMonth: 'NOVEMBER',
            dateDay: '04',
            img: '/tours/asia/Ha-Long-Bay-Vietnam.webp',
            title: 'HA LONG BAY & VIETNAM',
            text: 'Cruise through emerald waters surrounded by thousands of towering limestone islands. Experience luxury overnight journeys on traditional junks, sea kayaking, and hidden cave explorations. ',
            link: '#learn-more'
        },
        {
            dateMonth: 'OCTOBER',
            dateDay: '22',
            img: '/tours/asia/Petronas-Towers.webp',
            title: 'PETRONAS TOWERS & KUALA LUMPUR',
            text: 'Ascend the world’s tallest twin towers for breathtaking skyline views. Experience the vibrant culture, modern architecture, and luxury shopping of Malaysia’s capital. ',
            link: '#learn-more'
        },
        {
            dateMonth: 'NOVEMBER',
            dateDay: '15',
            img: '/tours/asia/tokio.webp',
            title: 'TOKYO & MODERN JAPAN',
            text: 'Discover the ultimate blend of ultra-modern technology and timeless tradition. Explore neon-lit districts, historic temples, and exquisite Michelin-starred cuisine in Japan’s iconic capital. ',
            link: '#learn-more'
        }
    ],
    antarctica: [

        {
            dateMonth: 'DECEMBER',
            dateDay: '08',
            img: '/tours/antarctica/Antarctica-Safari.webp',
            title: 'ANTARCTICA EXPEDITION & SAFARI',
            text: 'The daily zodiac excursions are what make expedition cruising in Antarctica truly a Trip of a Lifetime. One never knows what you may experience, these lucky passengers got to witness something few ever will, an Orca hunt for seals on the ice.',
            link: '#learn-more'
        },
        {
            dateMonth: 'JANUARY',
            dateDay: '14',
            img: '/tours/antarctica/Kayaking-in-Antarctica.webp',
            title: 'KAYAKING IN ANTARCTICA',
            text: 'Paddle through pristine polar waters amidst colossal blue icebergs and ancient glaciers. Experience absolute silence, raw wilderness, and up-close encounters with curious local wildlife. ',
            link: '#learn-more'
        }
    ],
    cruises: [

        {
            dateMonth: 'JUNE',
            dateDay: '02',
            img: '/tours/cruises/malta.webp',
            title: 'MALTA CRUISE & MEDITERRANEAN JEWELS',
            text: 'Sail through the crystal-clear waters of the Mediterranean to the historic grand harbors of Malta. Discover ancient fortresses, hidden sea caves, and sun-soaked coastal retreats.',
            link: '#learn-more'
        },
        {
            dateMonth: 'NOVEMBER',
            dateDay: '20',
            img: '/tours/cruises/oae-cruise.webp',
            title: 'UAE & ARABIAN GULF CRUISE',
            text: 'Sail across the turquoise waters of the Arabian Gulf in ultimate luxury. Experience futuristic skylines, historic coastal forts, and serene desert island stops along the Emirati coast. ',
            link: '#learn-more'
        },
        {
            dateMonth: 'SEPTEMBER',
            dateDay: '25',
            img: '/tours/cruises/Queen-Mary-New-York-Harbour.webp',
            title: 'QUEEN MARY & NEW YORK HARBOUR',
            text: 'Experience classic transatlantic luxury as you sail into iconic New York Harbour. Marvel at breathtaking skyline panoramas, the Statue of Liberty, and the rich maritime history of world-class ocean liners.',
            link: '#learn-more'
        },
    ]
};

const tabs = document.querySelectorAll('.idea__link');
const body = document.getElementById('idea__body-cont');

function renderCards(categoryKey) {
    const cardsData = ideaData[categoryKey];
    if (!cardsData) return;

    if (body) {
        body.classList.add('_fade');
    }

    setTimeout(() => {
        if (body) {
            body.innerHTML = cardsData.map(card => `<div class="idea__body-cont" id="idea__body-id" >
            <div class="idea__body">
              <div class="idea__date">
                <span class="idea__date-month">${card.dateMonth}</span>
                <span class="idea__date-number">${card.dateDay}</span>
              </div>
              <div class="idea__block">
                <div class="idea__img"><img src="${card.img}" alt="${card.title}" loading="lazy"></div>
                <div class="idea__about">
                  <h3 class="idea__about-title">${card.title}</h3>
                  <p class="idea__about-text">${card.text}</p>
                  <a href="/tours.html" class="idea__about-link">Find more <img src="/idea-section/arrow/arrow_right.svg" alt=""></a>
                </div>
              </div>
            </div>
          </div>`).join('');
        }

    }, 400);

    if (body) {
        body.classList.remove('_fade');
    }
}

renderCards('usa');

if (tabs.length > 0) {
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            tabs.forEach(t => t.classList.remove('_active'));
            tab.classList.add('_active');

            const category = tab.getAttribute('data-category');
            renderCards(category);
        });
    });
}
