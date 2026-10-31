const companyData = [
    {
        img: 'company/company-img-woman.webp',
        text: 'We are a team of passionate travel experts and explorers dedicated to creating unforgettable journeys across the globe. Our mission is to open up new horizons, offering you unique destinations with top-tier comfort, safety, and authentic local experiences. '
    },
    {
        img: 'company/company-img-man.webp',
        text: 'We craft tailor-made travel itineraries, exclusive group tours, and luxury cruises carefully designed down to the last detail. From premium accommodations and expert local guides to seamless transfer logistics, we handle everything so you can simply enjoy the adventure. '
    },
    {
        img: 'company/company-img-woman.webp',
        text: 'Our clients are curious travelers, adventure seekers, and thrill-lovers who value comfort, time, and genuine emotions. Whether you are traveling solo, as a couple, or with family and friends, we design experiences that inspire and leave lifelong memories.'
    }
];

let currentIndex = 0;

const companySection = document.getElementById('company__card-id');
const textCompany = document.querySelector('.company__card-block-text');
const imgCompany = document.querySelector('.company__card-img');
const companyBtn = document.querySelectorAll('.company__nav-link');



function companySlide(index) {

    const company = companyData[index];

    if (companySection) {
        companySection.classList.add('_fade')
    }

    setTimeout(() => {

        if (textCompany && company) {
            textCompany.textContent = company.text;
        }

        if (imgCompany && company) {
            imgCompany.src = company.img;
        }

        if (companySection) {
            companySection.classList.remove('_fade')
        }

    }, 400);


}

companySlide(currentIndex)

if (companyBtn.length > 0) {
    companyBtn.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            companyBtn.forEach((item) => {
                item.classList.remove('_active');
            });
            btn.classList.add('_active');
            currentIndex = index;
            companySlide(currentIndex);
        });
    });
}