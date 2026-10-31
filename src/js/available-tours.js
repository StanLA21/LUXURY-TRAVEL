import './details.js';
import './deteails-voyage.js';
import './header-blur.js';
import './burger-menu.js';


export const toursData = [
    {
        id: 'rome-italy-may',
        country: 'europe',
        month: 'MAY',
        date: '12 – 18 MAY',
        duration: '7 DAYS / 6 NIGHTS',
        name: 'ROME, ITALY',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: './tours/europe/rome-italy.webp',
        price: '$1,800',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190028.3544265694!2d12.371191233888965!3d41.91020879186578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2s0KDQuNC8LCDQmNGC0LDRjCDQo8DCQ4Y8!5e0!3m2!1sru!2sua!4v1792059513949!5m2!1sru!2sua'
    },
    {
        id: 'hollywood-usa-june',
        country: 'usa',
        month: 'June',
        date: '23 – 30 MAY',
        duration: '7 DAYS / 6 NIGHTS',
        name: 'HOLLYWOOD',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: './tours/usa/hollywood.webp',
        price: '$1,800',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105736.30550839708!2d-118.28334518350252!3d34.08849087474142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf07045279bf%3A0xf67a9a6797bdfae4!2z0JPQvtC70LvQuNCy0YPQtCwg0JvQvtGBLdCQ0L3QtNC20LXQu9C10YEsINCa0LDQu9C40YTQvtGA0L3QuNGPLCDQodCo0JA!5e0!3m2!1sru!2sua!4v1792062084140!5m2!1sru!2sua'
    },
    {
        id: 'ha-long-bay-vietnam-november',
        country: 'asia',
        month: 'November',
        date: '10 – 17 NOVEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'HA LONG BAY',
        guideName: 'Linh Tran',
        guideIcon: './guides-section/mary.webp',
        img: './tours/asia/Ha-Long-Bay-Vietnam.webp',
        price: '$1,950',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14876.131757825227!2d107.0435122!3d20.9101019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a5796fbc4b257%3A0xbcc0e1de74f3fc58!2z3JHRg9GC3Ywg3KHQutCw0L3QsCwgVmhvbiBMb25nLCBRdcOgbmcgTmluaCwgVmlldG5hbQ!5e0!3m2!1sru!2sua!4v1792063000000!5m2!1sru!2sua'
    },
    {
        id: 'antarctica-december',
        country: 'antarctica',
        month: 'December',
        date: '05 – 15 DECEMBER',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'ANTARCTICA',
        guideName: 'James Miller',
        guideIcon: './guides-section/mary.webp',
        img: './tours/antarctica/Antarctica-Safari.webp',
        price: '$5,400',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.442!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792064000000!5m2!1sru!2sua'
    },
    {
        id: 'giant-sequoia-national-park-july',
        country: 'usa',
        month: 'July',
        date: '10 – 17 JULY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'GIANT SEQUOIA NATIONAL PARK',
        guideName: 'Alex Vance',
        guideIcon: './guides-section/mary.webp',
        img: './tours/usa/sequoia-national-park.webp',
        price: '$2,100',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d-118.5657868!3d36.5658601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80bf07045279bf%3A0xf67a9a6797bdfae4!2sGiant%20Sequoia%20National%20Monument!5e0!3m2!1sru!2sua!4v1792065000000!5m2!1sru!2sua'
    },
    {
        id: 'niagara-falls-august',
        country: 'usa',
        month: 'August',
        date: '05 – 12 AUGUST',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'NIAGARA FALLS',
        guideName: 'Sarah Connor',
        guideIcon: './guides-section/mary.webp',
        img: './tours/usa/niagara-falls.webp',
        price: '$1,950',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.123456789!2d-79.0377!3d43.0896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d34456789abcdef%3A0x123456789abcdef!2sNiagara%20Falls!5e0!3m2!1sru!2sua!4v1792066000000!5m2!1sru!2sua'
    },
    {
        id: 'royal-london-british-heritage-september',
        country: 'europe',
        month: 'September',
        date: '15 – 22 SEPTEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'ROYAL LONDON & BRITISH HERITAGE',
        guideName: 'Oliver Smith',
        guideIcon: './guides-section/mary.webp',
        img: './tours/europe/britan.webp',
        price: '$2,400',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19844.75624794248!2d-0.1277583!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xedd165797708516e!2sLondon%2C%20UK!5e0!3m2!1sru!2sua!4v1792067000000!5m2!1sru!2sua'
    },
    {
        id: 'amsterdam-dutch-canals-october',
        country: 'europe',
        month: 'October',
        date: '08 – 15 OCTOBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'AMSTERDAM & DUTCH CANALS',
        guideName: 'Sophie van Dijk',
        guideIcon: './guides-section/mary.webp',
        img: './tours/europe/amsterdam.webp',
        price: '$2,200',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155958.83060241855!2d4.7638781!3d52.3547498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7d0af8d!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sru!2sua!4v1792068000000!5m2!1sru!2sua'
    },
    {
        id: 'paris-french-riviera-june',
        country: 'europe',
        month: 'June',
        date: '10 – 18 JUNE',
        duration: '9 DAYS / 8 NIGHTS',
        name: 'PARIS & FRENCH RIVIERA',
        guideName: 'Antoine Dubois',
        guideIcon: './guides-section/mary.webp',
        img: './tours/europe/paris-france.webp',
        price: '$2,600',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166885.38575003662!2d2.2725227!3d48.8588377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sru!2sua!4v1792069000000!5m2!1sru!2sua'
    },
    {
        id: 'great-wall-of-china-may',
        country: 'asia',
        month: 'May',
        date: '12 – 19 MAY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'GREAT WALL OF CHINA',
        guideName: 'Wei Zhang',
        guideIcon: './guides-section/mary.webp',
        img: './tours/asia/great-wall.webp',
        price: '$2,150',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.068923485123!2d116.5703749!3d40.4319077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f121d120a169b7%3A0x89e023772242095f!2sGreat%20Wall%20of%20China!5e0!3m2!1sru!2sua!4v1792070000000!5m2!1sru!2sua'
    },
    {
        id: 'petronas-towers-kuala-lumpur-august',
        country: 'asia',
        month: 'August',
        date: '14 – 21 AUGUST',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'PETRONAS TOWERS & KUALA LUMPUR',
        guideName: 'Aiden Wong',
        guideIcon: './guides-section/mary.webp',
        img: './tours/asia/Petronas-Towers.webp',
        price: '$1,850',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8055611311025!2d101.7119753!3d3.1578843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d3129598a1%3A0x729d7223b24f5a34!2sPetronas%20Twin%20Towers!5e0!3m2!1sru!2sua!4v1792071000000!5m2!1sru!2sua'
    },
    {
        id: 'tokyo-modern-japan-april',
        country: 'asia',
        month: 'April',
        date: '04 – 12 APRIL',
        duration: '9 DAYS / 8 NIGHTS',
        name: 'TOKYO & MODERN JAPAN',
        guideName: 'Kenji Sato',
        guideIcon: './guides-section/mary.webp',
        img: './tours/asia/tokyo.webp',
        price: '$2,800',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828030580824!2d139.6917064!3d35.6894875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0x440b522072c663c1!2sTokyo%2C%20Japan!5e0!3m2!1sru!2sua!4v1792072000000!5m2!1sru!2sua'
    },
    {
        id: 'kayaking-in-antarctica-january',
        country: 'antarctica',
        month: 'January',
        date: '10 – 20 JANUARY',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'KAYAKING IN ANTARCTICA',
        guideName: 'Elena Rostova',
        guideIcon: './guides-section/mary.webp',
        img: './tours/antarctica/Kayaking-in-Antarctica.webp',
        price: '$5,800',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.442!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792073000000!5m2!1sru!2sua'
    },
    {
        id: 'santorini-greek-islands-september',
        country: 'europe',
        month: 'September',
        date: '02 – 10 SEPTEMBER',
        duration: '9 DAYS / 8 NIGHTS',
        name: 'SANTORINI & GREEK ISLANDS',
        guideName: 'Nikos Papadopoulos',
        guideIcon: './guides-section/mary.webp',
        img: './tours/europe/Santorini-Greece.webp',
        price: '$2,500',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102370.83515468783!2d25.3524951!3d36.3931562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1499ce86ad3022f5%3A0x400bd2f322080a0!2sSantorini!5e0!3m2!1sru!2sua!4v1792075000000!5m2!1sru!2sua'
    },
    {
        id: 'bali-nusa-penida-expedition-november',
        country: 'asia',
        month: 'November',
        date: '05 – 14 NOVEMBER',
        duration: '10 DAYS / 9 NIGHTS',
        name: 'BALI & NUSA PENIDA EXPEDITION',
        guideName: 'I Wayan Pratama',
        guideIcon: './guides-section/mary.webp',
        img: './tours/asia/bali.webp',
        price: '$1,750',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010207.2403328107!2d114.7088921!3d-8.4552882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb10b2d6228!2sBali%2C%20Indonesia!5e0!3m2!1sru!2sua!4v1792076000000!5m2!1sru!2sua'
    },
    {
        id: 'grand-canyon-zion-park-october',
        country: 'usa',
        month: 'October',
        date: '12 – 20 OCTOBER',
        duration: '9 DAYS / 8 NIGHTS',
        name: 'GRAND CANYON & ZION PARK',
        guideName: 'Chris Evans',
        guideIcon: './guides-section/mary.webp',
        img: './tours/usa/grand-canyon.webp',
        price: '$2,350',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418190.2312658826!2d-112.4276081!3d36.0544445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80cc0654bd15e687%3A0xbe1f736021d720d2!2sGrand%20Canyon%20National%20Park!5e0!3m2!1sru!2sua!4v1792077000000!5m2!1sru!2sua'
    },
    {
        id: 'south-pole-ice-cruise-february',
        country: 'antarctica',
        month: 'February',
        date: '14 – 26 FEBRUARY',
        duration: '13 DAYS / 12 NIGHTS',
        name: 'SOUTH POLE ICE CRUISE',
        guideName: 'Sven Lindqvist',
        guideIcon: './guides-section/mary.webp',
        img: './tours/antarctica/ice-cruise.webp',
        price: '$6,200',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.442!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792080000000!5m2!1sru!2sua'
    },
    {
        id: 'new-york-winter-wonderland-january',
        country: 'usa',
        month: 'January',
        date: '10 – 17 JANUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'NEW YORK WINTER WONDERLAND',
        guideName: 'Sarah Connor',
        guideIcon: './guides-section/mary.webp',
        img: './tours/usa/new-york.webp',
        price: '$2,200',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69766374859667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sru!2sua!4v1792081000000!5m2!1sru!2sua'
    },
    {
        id: 'miami-florida-sunshine-january',
        country: 'usa',
        month: 'January',
        date: '12 – 19 JANUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'MIAMI & FLORIDA SUNSHINE',
        guideName: 'Alex Vance',
        guideIcon: './guides-section/mary.webp',
        img: './tours/usa/miami.webp',
        price: '$2,050',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53955916748!2d-80.25049097779749!3d25.782390733064366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL%2C%20USA!5e0!3m2!1sru!2sua!4v1792082000000!5m2!1sru!2sua'
    },
    {
        id: 'hawaiian-islands-adventure-january',
        country: 'usa',
        month: 'January',
        date: '15 – 24 JANUARY',
        duration: '10 DAYS / 9 NIGHTS',
        name: 'HAWAIIAN ISLANDS ADVENTURE',
        guideName: 'Chris Evans',
        guideIcon: './guides-section/mary.webp',
        img: './tours/usa/hawaii.webp',
        price: '$3,100',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.671448834958!2d-157.85833308511046!3d21.306944485834773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006ee62e7f9c73%3A0x7c4bf7f046a80c35!2sHonolulu%2C%20HI%2C%20USA!5e0!3m2!1sru!2sua!4v1792083000000!5m2!1sru!2sua'
    },
    {
        id: 'san-francisco-pacific-coast-january',
        country: 'usa',
        month: 'January',
        date: '20 – 27 JANUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'SAN FRANCISCO & PACIFIC COAST',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: './tours/usa/san-francisco.webp',
        price: '$2,300',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098494!2d-122.50764017997972!3d37.75781499544523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sru!2sua!4v1792084000000!5m2!1sru!2sua'
    },
    {
        id: 'las-vegas-lights-desert-january',
        country: 'usa',
        month: 'January',
        date: '03 – 10 JANUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'LAS VEGAS LIGHTS & DESERT',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: './tours/usa/las-vegas.jpg',
        price: '$1,900',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103217.75!2d-115.1398!3d36.1699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c43df0cb77c1%3A0x367f0b9868779c1!2sLas%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sru!2sua!4v1792087000000!5m2!1sru!2sua'
    },
    {
        id: 'yellowstone-winter-safari-january',
        country: 'usa',
        month: 'January',
        date: '18 – 25 JANUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'YELLOWSTONE WINTER SAFARI',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: './tours/usa/yellowstone.jpg',
        price: '$2,400',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d287654.32!2d-110.5885!3d44.4280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x534c5a!2sYellowstone%20National%20Park!5e0!3m2!1sru!2sua!4v1792088000000!5m2!1sru!2sua'
    },
    {
        id: 'miami-beach-getaway-february',
        country: 'usa',
        month: 'February',
        date: '05 – 12 FEBRUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'MIAMI BEACH GETAWAY',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: './tours/usa/miami.jpg',
        price: '$2,100',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53!2d-80.25!3d25.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL%2C%20USA!5e0!3m2!1sru!2sua!4v1792089000000!5m2!1sru!2sua'
    },
    {
        id: 'orlando-theme-parks-february',
        country: 'usa',
        month: 'February',
        date: '10 – 17 FEBRUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'ORLANDO & THEME PARKS',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: './tours/usa/orlando.jpg',
        price: '$2,250',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112356.78!2d-81.3792!3d28.5383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063cad5f9ef!2sOrlando%2C%20FL%2C%20USA!5e0!3m2!1sru!2sua!4v1792090000000!5m2!1sru!2sua'
    },
    {
        id: 'death-valley-expedition-february',
        country: 'usa',
        month: 'February',
        date: '15 – 22 FEBRUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'DEATH VALLEY EXPEDITION',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: './tours/usa/death-valley.jpg',
        price: '$2,150',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d318234.56!2d-116.9325!3d36.5054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c71544a04d2bfd%3A0x67ee1c8d6727289b!2sDeath%20Valley%20National%20Park!5e0!3m2!1sru!2sua!4v1792091000000!5m2!1sru!2sua'
    },
    {
        id: 'washington-dc-spring-blossom-march',
        country: 'usa',
        month: 'March',
        date: '05 – 12 MARCH',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'WASHINGTON DC SPRING BLOSSOM',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1617581629397-a72507c3de9e?q=80&w=1000&auto=format&fit=crop',
        price: '$1,950',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198389.2891234!2d-77.0364!3d38.8951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdec0b17f%3A0x96fb932130e63f5f!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sru!2sua!4v1792092000000!5m2!1sru!2sua'
    },
    {
        id: 'seattle-pacific-northwest-march',
        country: 'usa',
        month: 'March',
        date: '15 – 22 MARCH',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'SEATTLE & PACIFIC NORTHWEST',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1502175353174-a7a70e73b362?q=80&w=1000&auto=format&fit=crop',
        price: '$2,100',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86054.67!2d-122.3321!3d47.6062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944c59a!2sSeattle%2C%20WA%2C%20USA!5e0!3m2!1sru!2sua!4v1792093000000!5m2!1sru!2sua'
    },
    // --- APRIL ---
    {
        id: 'grand-canyon-adventure-april',
        country: 'usa',
        month: 'April',
        date: '05 – 12 APRIL',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'GRAND CANYON ADVENTURE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1474044159976-feb177bde255?q=80&w=1000&auto=format&fit=crop',
        price: '$2,150',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.5!2d-112.1129!3d36.1069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873312ae751b34a1%3A0x25166fc914568858!2sGrand%20Canyon%20National%20Park!5e0!3m2!1sru!2sua!4v1792094000000!5m2!1sru!2sua'
    },
    {
        id: 'new-orleans-jazz-culture-april',
        country: 'usa',
        month: 'April',
        date: '14 – 21 APRIL',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'NEW ORLEANS JAZZ & CULTURE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop',
        price: '$1,950',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110512.4!2d-90.0715!3d29.9511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a464c2d7d3d1%3A0x356fcf1844b36024!2sNew%20Orleans%2C%20LA%2C%20USA!5e0!3m2!1sru!2sua!4v1792094100000!5m2!1sru!2sua'
    },
    {
        id: 'savannah-historic-spring-april',
        country: 'usa',
        month: 'April',
        date: '22 – 29 APRIL',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'SAVANNAH HISTORIC SPRING',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1000&auto=format&fit=crop',
        price: '$1,850',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108395.2!2d-81.0912!3d32.0835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fb9e68e146eb55%3A0x442b083c267f814b!2sSavannah%2C%20GA%2C%20USA!5e0!3m2!1sru!2sua!4v1792094200000!5m2!1sru!2sua'
    },

    // --- MAY ---
    {
        id: 'yosemite-waterfalls-nature-may',
        country: 'usa',
        month: 'May',
        date: '03 – 10 MAY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'YOSEMITE WATERFALLS & NATURE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1426604966848-d7adacbd02bff?q=80&w=1000&auto=format&fit=crop',
        price: '$2,300',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101281.3!2d-119.5383!3d37.8651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8096f09439c27d3b%3A0xbfa6a12ebb1e7589!2sYosemite%20National%20Park!5e0!3m2!1sru!2sua!4v1792094300000!5m2!1sru!2sua'
    },
    {
        id: 'chicago-architecture-mile-may',
        country: 'usa',
        month: 'May',
        date: '12 – 19 MAY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'CHICAGO ARCHITECTURE & MILE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1000&auto=format&fit=crop',
        price: '$2,050',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.4!2d-87.6298!3d41.8781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c00!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sru!2sua!4v1792094400000!5m2!1sru!2sua'
    },
    {
        id: 'boston-freedom-trail-may',
        country: 'usa',
        month: 'May',
        date: '21 – 28 MAY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'BOSTON FREEDOM TRAIL',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1519163219899-2143ab345398?q=80&w=1000&auto=format&fit=crop',
        price: '$2,100',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94226.4!2d-71.0589!3d42.3601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA%2C%20USA!5e0!3m2!1sru!2sua!4v1792094500000!5m2!1sru!2sua'
    },

    // --- JUNE ---
    {
        id: 'alaska-wilderness-cruise-hike-june',
        country: 'usa',
        month: 'June',
        date: '04 – 11 JUNE',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'ALASKA WILDERNESS CRUISE & HIKE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop',
        price: '$3,400',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372111.4!2d-149.4937!3d64.2008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5600f764a50d2495%3A0x5a14d59f5b6134b!2sAlaska%2C%20USA!5e0!3m2!1sru!2sua!4v1792094600000!5m2!1sru!2sua'
    },
    {
        id: 'rocky-mountain-explorer-june',
        country: 'usa',
        month: 'June',
        date: '13 – 20 JUNE',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'ROCKY MOUNTAIN EXPLORER',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop',
        price: '$2,450',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.2!2d-105.5823!3d40.3428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8769788d52445e99%3A0x3344682490dfb42b!2sRocky%20Mountain%20National%20Park!5e0!3m2!1sru!2sua!4v1792094700000!5m2!1sru!2sua'
    },
    {
        id: 'napa-valley-wine-tasting-june',
        country: 'usa',
        month: 'June',
        date: '22 – 29 JUNE',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'NAPA VALLEY WINE TASTING',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop',
        price: '$2,800',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100456.2!2d-122.2869!3d38.2975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085064e43b14515%3A0x7d6b38c2c62c3f7!2sNapa%2%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sru!2sua!4v1792094800000!5m2!1sru!2sua'
    },

    // --- JULY ---
    {
        id: 'hawaii-tropical-paradise-july',
        country: 'usa',
        month: 'July',
        date: '01 – 08 JULY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'HAWAII TROPICAL PARADISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
        price: '$3,200',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6!2d-157.8583!3d21.3069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006ee62e7f9c73%3A0x7c4bf7f046a80c35!2sHonolulu%2C%20HI%2C%20USA!5e0!3m2!1sru!2sua!4v1792094900000!5m2!1sru!2sua'
    },
    {
        id: 'san-diego-coast-beaches-july',
        country: 'usa',
        month: 'July',
        date: '10 – 17 JULY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'SAN DIEGO COAST & BEACHES',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1000&auto=format&fit=crop',
        price: '$2,350',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107384.5!2d-117.1611!3d32.7157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc00fad7cb3dab%3A0xa1529c2937746419!2sSan%20Diego%2C%20CA%2C%20USA!5e0!3m2!1sru!2sua!4v1792095000000!5m2!1sru!2sua'
    },
    {
        id: 'glacier-national-park-hike-july',
        country: 'usa',
        month: 'July',
        date: '19 – 26 JULY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'GLACIER NATIONAL PARK HIKE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1000&auto=format&fit=crop',
        price: '$2,600',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d348123.4!2d-113.7870!3d48.7596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536893e3d231de3f%3A0x6b7fa1c4f52613cb!2sGlacier%20National%20Park!5e0!3m2!1sru!2sua!4v1792095100000!5m2!1sru!2sua'
    },

    // --- AUGUST ---
    {
        id: 'yellowstone-summer-wildlife-august',
        country: 'usa',
        month: 'August',
        date: '03 – 10 AUGUST',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'YELLOWSTONE SUMMER WILDLIFE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
        price: '$2,500',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d287654.3!2d-110.5885!3d44.4280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x534c5a!2sYellowstone%20National%20Park!5e0!3m2!1sru!2sua!4v1792095200000!5m2!1sru!2sua'
    },
    {
        id: 'maine-coast-acadia-august',
        country: 'usa',
        month: 'August',
        date: '12 – 19 AUGUST',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'MAINE COAST & ACADIA',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
        price: '$2,150',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91234.5!2d-68.2733!3d44.3386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cae8f526b772c39%3A0x1d2c0b62846fa2b0!2sAcadia%20National%20Park!5e0!3m2!1sru!2sua!4v1792095300000!5m2!1sru!2sua'
    },
    {
        id: 'las-vegas-canyons-august',
        country: 'usa',
        month: 'August',
        date: '21 – 28 AUGUST',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'LAS VEGAS & CANYONS',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1508873696983-2df5c920cad2?q=80&w=1000&auto=format&fit=crop',
        price: '$2,000',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103217.7!2d-115.1398!3d36.1699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c43df0cb77c1%3A0x367f0b9868779c1!2sLas%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sru!2sua!4v1792095400000!5m2!1sru!2sua'
    },

    // --- SEPTEMBER ---
    {
        id: 'new-england-autumn-colors-september',
        country: 'usa',
        month: 'September',
        date: '05 – 12 SEPTEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'NEW ENGLAND AUTUMN COLORS',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1507783590521-9d92437d4e3e?q=80&w=1000&auto=format&fit=crop',
        price: '$2,250',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312345.4!2d-72.5000!3d44.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb453982e7e31d7%3A0x6b9d62d2b0e6dfb0!2sVermont%2C%20USA!5e0!3m2!1sru!2sua!4v1792095500000!5m2!1sru!2sua'
    },
    {
        id: 'san-francisco-golden-gate-september',
        country: 'usa',
        month: 'September',
        date: '14 – 21 SEPTEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'SAN FRANCISCO & GOLDEN GATE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1000&auto=format&fit=crop',
        price: '$2,300',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.9!2d-122.5076!3d37.7578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sru!2sua!4v1792095600000!5m2!1sru!2sua'
    },
    {
        id: 'zion-bryce-canyon-red-rocks-september',
        country: 'usa',
        month: 'September',
        date: '23 – 30 SEPTEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'ZION & BRYCE CANYON RED ROCKS',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop',
        price: '$2,400',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152643.2!2d-113.0263!3d37.2982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80caead969f6cd97%3A0x7096603a118e9d3d!2sZion%20National%20Park!5e0!3m2!1sru!2sua!4v1792095700000!5m2!1sru!2sua'
    },

    // --- OCTOBER ---
    {
        id: 'salem-mystic-massachusetts-october',
        country: 'usa',
        month: 'October',
        date: '04 – 11 OCTOBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'SALEM & MYSTIC MASSACHUSETTS',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=1000&auto=format&fit=crop',
        price: '$2,100',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23654.2!2d-70.8953!3d42.5195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e314642643193f%3A0xd2112443a609d57a!2sSalem%2C%20MA%2C%20USA!5e0!3m2!1sru!2sua!4v1792095800000!5m2!1sru!2sua'
    },
    {
        id: 'austin-texas-hill-country-october',
        country: 'usa',
        month: 'October',
        date: '13 – 20 OCTOBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'AUSTIN & TEXAS HILL COUNTRY',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1531219434268-3e4299b386e8?q=80&w=1000&auto=format&fit=crop',
        price: '$1,950',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220031.5!2d-97.7431!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sru!2sua!4v1792095900000!5m2!1sru!2sua'
    },
    {
        id: 'nashville-country-music-tour-october',
        country: 'usa',
        month: 'October',
        date: '22 – 29 OCTOBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'NASHVILLE COUNTRY MUSIC TOUR',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop',
        price: '$1,900',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206234.1!2d-86.7816!3d36.1627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864ec3213eb030d%3A0x4642442468f7634f!2sNashville%2C%20TN%2C%20USA!5e0!3m2!1sru!2sua!4v1792096000000!5m2!1sru!2sua'
    },

    // --- NOVEMBER ---
    {
        id: 'new-york-thanksgiving-city-november',
        country: 'usa',
        month: 'November',
        date: '03 – 10 NOVEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'NEW YORK THANKSGIVING & CITY',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=1000&auto=format&fit=crop',
        price: '$2,400',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3!2d-74.2598!3d40.6976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sru!2sua!4v1792096100000!5m2!1sru!2sua'
    },
    {
        id: 'miami-sunshine-escape-november',
        country: 'usa',
        month: 'November',
        date: '12 – 19 NOVEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'MIAMI SUNSHINE ESCAPE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1000&auto=format&fit=crop',
        price: '$2,050',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.5!2d-80.2504!3d25.7823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL%2C%20USA!5e0!3m2!1sru!2sua!4v1792096200000!5m2!1sru!2sua'
    },
    {
        id: 'phoenix-desert-oasis-november',
        country: 'usa',
        month: 'November',
        date: '21 – 28 NOVEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'PHOENIX & DESERT OASIS',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop',
        price: '$1,950',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213245.6!2d-112.0740!3d33.4484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c697cbcef859d6!2sPhoenix%2C%20AZ%2C%20USA!5e0!3m2!1sru!2sua!4v1792096300000!5m2!1sru!2sua'
    },

    // --- DECEMBER ---
    {
        id: 'new-york-holiday-lights-december',
        country: 'usa',
        month: 'December',
        date: '03 – 10 DECEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'NEW YORK HOLIDAY LIGHTS',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=1000&auto=format&fit=crop',
        price: '$2,500',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3!2d-74.2598!3d40.6976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sru!2sua!4v1792096400000!5m2!1sru!2sua'
    },
    {
        id: 'aspen-ski-resort-winter-december',
        country: 'usa',
        month: 'December',
        date: '12 – 19 DECEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'ASPEN SKI RESORT WINTER',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1000&auto=format&fit=crop',
        price: '$3,100',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24890.1!2d-106.8370!3d39.1911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87403a742880c515%3A0x90f666f7af207d!2sAspen%2C%20CO%2C%20USA!5e0!3m2!1sru!2sua!4v1792096500000!5m2!1sru!2sua'
    },
    {
        id: 'hawaii-christmas-getaway-december',
        country: 'usa',
        month: 'December',
        date: '21 – 28 DECEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'HAWAII CHRISTMAS GETAWAY',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1542259009477-d024f09d1e44?q=80&w=1000&auto=format&fit=crop',
        price: '$3,500',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6!2d-157.8583!3d21.3069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006ee62e7f9c73%3A0x7c4bf7f046a80c35!2sHonolulu%2C%20HI%2C%20USA!5e0!3m2!1sru!2sua!4v1792096600000!5m2!1sru!2sua'
    },
    // ==========================================
    // EUROPE (36 TOURS)
    // ==========================================

    // --- JANUARY ---
    {
        id: 'swiss-alps-ski-resort-january',
        country: 'europe',
        month: 'January',
        date: '05 – 12 JANUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'SWISS ALPS SKI RESORT',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000&auto=format&fit=crop',
        price: '$2,700',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2753.0!2d8.2275!3d46.8182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47868c2!2sSwitzerland!5e0!3m2!1sru!2sua!4v1792085000000!5m2!1sru!2sua'
    },
    {
        id: 'vienna-winter-fairy-tale-january',
        country: 'europe',
        month: 'January',
        date: '14 – 21 JANUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'VIENNA WINTER FAIRY TALE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=1000&auto=format&fit=crop',
        price: '$2,100',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170123.4!2d16.3738!3d48.2082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e513650f3%3A0x1005a7209a2b0e0!2sVienna%2C%20Austria!5e0!3m2!1sru!2sua!4v1792085100000!5m2!1sru!2sua'
    },
    {
        id: 'lapland-northern-lights-january',
        country: 'europe',
        month: 'January',
        date: '22 – 29 JANUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'LAPLAND NORTHERN LIGHTS',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1000&auto=format&fit=crop',
        price: '$2,900',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412345.6!2d25.7285!3d66.5039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x442b4bc2826d9101%3A0x40146d63c25b300!2sRovaniemi%2C%20Finland!5e0!3m2!1sru!2sua!4v1792085200000!5m2!1sru!2sua'
    },

    // --- FEBRUARY ---
    {
        id: 'venice-carnival-experience-february',
        country: 'europe',
        month: 'February',
        date: '03 – 10 FEBRUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'VENICE CARNIVAL EXPERIENCE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=1000&auto=format&fit=crop',
        price: '$2,300',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91234.5!2d12.3155!3d45.4408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1daf1d63d89%3A0x7ba3c7f04695476b!2sVenice%2C%20Italy!5e0!3m2!1sru!2sua!4v1792085300000!5m2!1sru!2sua'
    },
    {
        id: 'paris-romantic-getaway-february',
        country: 'europe',
        month: 'February',
        date: '12 – 19 FEBRUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'PARIS ROMANTIC GETAWAY',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop',
        price: '$2,200',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d165984.3!2d2.2770!3d48.8566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sru!2sua!4v1792085400000!5m2!1sru!2sua'
    },
    {
        id: 'prague-castles-old-town-february',
        country: 'europe',
        month: 'February',
        date: '21 – 28 FEBRUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'PRAGUE CASTLES & OLD TOWN',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1000&auto=format&fit=crop',
        price: '$1,850',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163980.2!2d14.4208!3d50.0755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2sPrague%2C%20Czechia!5e0!3m2!1sru!2sua!4v1792085500000!5m2!1sru!2sua'
    },

    // --- MARCH ---
    {
        id: 'amsterdam-tulip-season-march',
        country: 'europe',
        month: 'March',
        date: '04 – 11 MARCH',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'AMSTERDAM TULIP SEASON',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1000&auto=format&fit=crop',
        price: '$2,050',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155982.1!2d4.8951!3d52.3702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7d0b6d!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sru!2sua!4v1792085600000!5m2!1sru!2sua'
    },
    {
        id: 'barcelona-gaudi-architecture-march',
        country: 'europe',
        month: 'March',
        date: '13 – 20 MARCH',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'BARCELONA & GAUDI ARCHITECTURE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1000&auto=format&fit=crop',
        price: '$1,950',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d149684.2!2d2.1734!3d41.3851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Spain!5e0!3m2!1sru!2sua!4v1792085700000!5m2!1sru!2sua'
    },
    {
        id: 'rome-classic-vatican-march',
        country: 'europe',
        month: 'March',
        date: '22 – 29 MARCH',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'ROME CLASSIC & VATICAN',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1000&auto=format&fit=crop',
        price: '$2,100',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189980.3!2d12.4964!3d41.9028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRome%2C%20Italy!5e0!3m2!1sru!2sua!4v1792085800000!5m2!1sru!2sua'
    },

    // --- APRIL ---
    {
        id: 'greek-islands-athens-april',
        country: 'europe',
        month: 'April',
        date: '02 – 09 APRIL',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'GREEK ISLANDS & ATHENS',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop',
        price: '$2,250',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201234.5!2d23.7275!3d37.9838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x273635457638848d!2sAthens%2C%20Greece!5e0!3m2!1sru!2sua!4v1792085900000!5m2!1sru!2sua'
    },
    {
        id: 'london-windsor-castle-april',
        country: 'europe',
        month: 'April',
        date: '11 – 18 APRIL',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'LONDON & WINDSOR CASTLE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop',
        price: '$2,400',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198421.1!2d-0.1276!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sru!2sua!4v1792086000000!5m2!1sru!2sua'
    },
    {
        id: 'lisbon-sintra-palaces-april',
        country: 'europe',
        month: 'April',
        date: '20 – 27 APRIL',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'LISBON & SINTRA PALACES',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1509142148028-eb837936a282?q=80&w=1000&auto=format&fit=crop',
        price: '$1,900',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155823.1!2d-9.1393!3d38.7223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f39f%3A0x400ebbde49036d0!2sLisbon%2C%20Portugal!5e0!3m2!1sru!2sua!4v1792086100000!5m2!1sru!2sua'
    },

    // --- MAY ---
    {
        id: 'amalfi-coast-sunshine-may',
        country: 'europe',
        month: 'May',
        date: '04 – 11 MAY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'AMALFI COAST SUNSHINE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop',
        price: '$2,550',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96543.2!2d14.6027!3d40.6340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b97b0a70f7823%3A0x11029c6769931ad9!2sAmalfi%20Coast%2C%20Italy!5e0!3m2!1sru!2sua!4v1792086200000!5m2!1sru!2sua'
    },
    {
        id: 'norwegian-fjords-discovery-may',
        country: 'europe',
        month: 'May',
        date: '13 – 20 MAY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'NORWEGIAN FJORDS DISCOVERY',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1000&auto=format&fit=crop',
        price: '$2,800',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d341234.5!2d5.3221!3d60.3913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cfea638166d15%3A0xb45839f972b9a7b!2sBergen%2C%20Norway!5e0!3m2!1sru!2sua!4v1792086300000!5m2!1sru!2sua'
    },
    {
        id: 'dublin-irish-countryside-may',
        country: 'europe',
        month: 'May',
        date: '22 – 29 MAY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'DUBLIN & IRISH COUNTRYSIDE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?q=80&w=1000&auto=format&fit=crop',
        price: '$2,000',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152345.6!2d-6.2603!3d53.3498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin%2C%20Ireland!5e0!3m2!1sru!2sua!4v1792086400000!5m2!1sru!2sua'
    },

    // --- JUNE ---
    {
        id: 'santorini-mykonos-sunset-june',
        country: 'europe',
        month: 'June',
        date: '03 – 10 JUNE',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'SANTORINI & MYKONOS SUNSET',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000&auto=format&fit=crop',
        price: '$2,650',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51234.5!2d25.4317!3d36.3932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1499ce86adfd9f23%3A0xed017a5b1614e365!2sSantorini%2C%20Greece!5e0!3m2!1sru!2sua!4v1792086500000!5m2!1sru!2sua'
    },
    {
        id: 'iceland-ring-road-explorer-june',
        country: 'europe',
        month: 'June',
        date: '12 – 19 JUNE',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'ICELAND RING ROAD EXPLORER',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1000&auto=format&fit=crop',
        price: '$2,950',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d351234.5!2d-21.8277!3d64.1265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d674b9eedcedc3%3A0xec912ca230d26071!2sReykjavik%2C%20Iceland!5e0!3m2!1sru!2sua!4v1792086600000!5m2!1sru!2sua'
    },
    {
        id: 'croatian-coast-dubrovnik-june',
        country: 'europe',
        month: 'June',
        date: '21 – 28 JUNE',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'CROATIAN COAST & DUBROVNIK',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1555990538-1e422f18376e?q=80&w=1000&auto=format&fit=crop',
        price: '$2,100',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71234.5!2d18.0944!3d42.6507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134b8ba20835e831%3A0x400ad5086573e00!2sDubrovnik%2C%20Croatia!5e0!3m2!1sru!2sua!4v1792086700000!5m2!1sru!2sua'
    },

    // --- JULY ---
    {
        id: 'french-riviera-cannes-july',
        country: 'europe',
        month: 'July',
        date: '02 – 09 JULY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'FRENCH RIVIERA & CANNES',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop',
        price: '$2,850',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112345.6!2d7.2620!3d43.7102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd0106a852d31%3A0x40819a5fd979a70!2sNice%2C%20France!5e0!3m2!1sru!2sua!4v1792086800000!5m2!1sru!2sua'
    },
    {
        id: 'swiss-alps-summer-hiking-july',
        country: 'europe',
        month: 'July',
        date: '11 – 18 JULY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'SWISS ALPS SUMMER HIKING',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop',
        price: '$2,600',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2753.0!2d8.2275!3d46.8182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47868c2!2sSwitzerland!5e0!3m2!1sru!2sua!4v1792086900000!5m2!1sru!2sua'
    },
    {
        id: 'barcelona-beach-culture-july',
        country: 'europe',
        month: 'July',
        date: '20 – 27 JULY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'BALCELONA BEACH & CULTURE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1511527656417-089b6a6f5d16?q=80&w=1000&auto=format&fit=crop',
        price: '$2,150',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d149684.2!2d2.1734!3d41.3851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Spain!5e0!3m2!1sru!2sua!4v1792087000000!5m2!1sru!2sua'
    },

    // --- AUGUST ---
    {
        id: 'edinburgh-festival-highlands-august',
        country: 'europe',
        month: 'August',
        date: '03 – 10 AUGUST',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'EDINBURGH FESTIVAL & HIGHLANDS',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1000&auto=format&fit=crop',
        price: '$2,300',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d141234.5!2d-3.1883!3d55.9533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887b800a5982623%3A0x5de174f133d59e3!2sEdinburgh%2C%20UK!5e0!3m2!1sru!2sua!4v1792087100000!5m2!1sru!2sua'
    },
    {
        id: 'sicily-sun-ancient-ruins-august',
        country: 'europe',
        month: 'August',
        date: '12 – 19 AUGUST',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'SICILY SUN & ANCIENT RUINS',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1528114039593-4366cc08227d?q=80&w=1000&auto=format&fit=crop',
        price: '$2,050',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412345.6!2d14.0154!3d37.5990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313e2f5b4a0349b%3A0x10b27b9c9f0c2a0!2sSicily%2C%20Italy!5e0!3m2!1sru!2sua!4v1792087200000!5m2!1sru!2sua'
    },
    {
        id: 'portugal-algarve-coast-august',
        country: 'europe',
        month: 'August',
        date: '21 – 28 AUGUST',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'PORTUGAL ALGARVE COAST',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
        price: '$2,100',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181234.5!2d-7.9304!3d37.0194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab0e5e01614ef%3A0x23a35b128bb9c072!2sFaro%2C%20Portugal!5e0!3m2!1sru!2sua!4v1792087300000!5m2!1sru!2sua'
    },

    // --- SEPTEMBER ---
    {
        id: 'tuscany-wine-sunset-september',
        country: 'europe',
        month: 'September',
        date: '04 – 11 SEPTEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'TUSCANY WINE & SUNSET',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop',
        price: '$2,200',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312345.6!2d11.2558!3d43.7696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56a680d2d8ad%3A0x1015923c023d6a0!2sTuscany%2C%20Italy!5e0!3m2!1sru!2sua!4v1792087400000!5m2!1sru!2sua'
    },
    {
        id: 'munich-oktoberfest-experience-september',
        country: 'europe',
        month: 'September',
        date: '13 – 20 SEPTEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'MUNICH OKTOBERFEST EXPERIENCE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=1000&auto=format&fit=crop',
        price: '$2,350',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181234.5!2d11.5820!3d48.1351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd9%3A0x41e238dd66e4a20!2sMunich%2C%20Germany!5e0!3m2!1sru!2sua!4v1792087500000!5m2!1sru!2sua'
    },
    {
        id: 'greece-mythical-peloponnese-september',
        country: 'europe',
        month: 'September',
        date: '22 – 29 SEPTEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'GREECE MYTHICAL PELOPONNESE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop',
        price: '$2,000',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201234.5!2d23.7275!3d37.9838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x273635457638848d!2sAthens%2C%20Greece!5e0!3m2!1sru!2sua!4v1792087600000!5m2!1sru!2sua'
    },

    // --- OCTOBER ---
    {
        id: 'budapest-spa-castles-october',
        country: 'europe',
        month: 'October',
        date: '03 – 10 OCTOBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'BUDAPEST SPA & CASTLES',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000&auto=format&fit=crop',
        price: '$1,800',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172345.6!2d19.0402!3d47.4979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc0780f2d4e3%3A0xdd2d194c798c8e8d!2sBudapest%2C%20Hungary!5e0!3m2!1sru!2sua!4v1792087700000!5m2!1sru!2sua'
    },
    {
        id: 'berlin-art-history-october',
        country: 'europe',
        month: 'October',
        date: '12 – 19 OCTOBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'BERLIN ART & HISTORY',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=1000&auto=format&fit=crop',
        price: '$1,950',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203456.7!2d13.4050!3d52.5200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sru!2sua!4v1792087800000!5m2!1sru!2sua'
    },
    {
        id: 'madrid-art-triangle-october',
        country: 'europe',
        month: 'October',
        date: '21 – 28 OCTOBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'MADRID ART TRIANGLE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1000&auto=format&fit=crop',
        price: '$1,900',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194567.8!2d-3.7038!3d40.4168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287d303777e3%3A0xa185273869931ad9!2sMadrid%2C%20Spain!5e0!3m2!1sru!2sua!4v1792087900000!5m2!1sru!2sua'
    },

    // --- NOVEMBER ---
    {
        id: 'paris-museums-coffee-november',
        country: 'europe',
        month: 'November',
        date: '02 – 09 NOVEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'PARIS MUSEUMS & COFFEE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop',
        price: '$2,100',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d165984.3!2d2.2770!3d48.8566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sru!2sua!4v1792088000000!5m2!1sru!2sua'
    },
    {
        id: 'rome-lights-history-november',
        country: 'europe',
        month: 'November',
        date: '11 – 18 NOVEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'ROME LIGHTS & HISTORY',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1000&auto=format&fit=crop',
        price: '$2,000',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189980.3!2d12.4964!3d41.9028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRome%2C%20Italy!5e0!3m2!1sru!2sua!4v1792088100000!5m2!1sru!2sua'
    },
    {
        id: 'lisbon-autumn-escape-november',
        country: 'europe',
        month: 'November',
        date: '20 – 27 NOVEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'LISBON AUTUMN ESCAPE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1509142148028-eb837936a282?q=80&w=1000&auto=format&fit=crop',
        price: '$1,850',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155823.1!2d-9.1393!3d38.7223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f39f%3A0x400ebbde49036d0!2sLisbon%2C%20Portugal!5e0!3m2!1sru!2sua!4v1792088200000!5m2!1sru!2sua'
    },

    // --- DECEMBER ---
    {
        id: 'strasbourg-christmas-markets-december',
        country: 'europe',
        month: 'December',
        date: '02 – 09 DECEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'STRASBOURG CHRISTMAS MARKETS',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=1000&auto=format&fit=crop',
        price: '$2,300',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112345.6!2d7.7521!3d48.5734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796caa0a5f97371%3A0x40a5fb99a393d30!2sStrasbourg%2C%20France!5e0!3m2!1sru!2sua!4v1792088300000!5m2!1sru!2sua'
    },
    {
        id: 'vienna-magic-christmas-december',
        country: 'europe',
        month: 'December',
        date: '11 – 18 DECEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'VIENNA MAGIC CHRISTMAS',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=1000&auto=format&fit=crop',
        price: '$2,250',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170123.4!2d16.3738!3d48.2082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e513650f3%3A0x1005a7209a2b0e0!2sVienna%2C%20Austria!5e0!3m2!1sru!2sua!4v1792088400000!5m2!1sru!2sua'
    },
    {
        id: 'prague-winter-wonderland-december',
        country: 'europe',
        month: 'December',
        date: '20 – 27 DECEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'PRAGUE WINTER WONDERLAND',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1000&auto=format&fit=crop',
        price: '$2,150',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163980.2!2d14.4208!3d50.0755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2sPrague%2C%20Czechia!5e0!3m2!1sru!2sua!4v1792088500000!5m2!1sru!2sua'
    },
    // ==========================================
    // ASIA (36 TOURS)
    // ==========================================

    // --- JANUARY ---
    {
        id: 'bangkok-thai-temples-january',
        country: 'asia',
        month: 'January',
        date: '05 – 12 JANUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'BANGKOK & THAI TEMPLES',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1000&auto=format&fit=crop',
        price: '$1,900',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9!2d100.5018!3d13.7563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d60322!2sBangkok%2C%20Thailand!5e0!3m2!1sru!2sua!4v1792086000000!5m2!1sru!2sua'
    },
    {
        id: 'phuket-tropical-beaches-january',
        country: 'asia',
        month: 'January',
        date: '14 – 21 JANUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'PHUKET TROPICAL BEACHES',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=1000&auto=format&fit=crop',
        price: '$2,100',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63259.8!2d98.3923!3d7.8804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031851b14b2b7%3A0x40223bc50e65b90!2sPhuket%2C%20Thailand!5e0!3m2!1sru!2sua!4v1792098000000!5m2!1sru!2sua'
    },
    {
        id: 'singapore-modern-wonders-january',
        country: 'asia',
        month: 'January',
        date: '23 – 30 JANUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'SINGAPORE MODERN WONDERS',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1000&auto=format&fit=crop',
        price: '$2,400',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.4!2d103.8198!3d1.3521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869752f84b34!2sSingapore!5e0!3m2!1sru!2sua!4v1792098100000!5m2!1sru!2sua'
    },

    // --- FEBRUARY ---
    {
        id: 'bali-temples-nature-february',
        country: 'asia',
        month: 'February',
        date: '03 – 10 FEBRUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'BALI TEMPLES & NATURE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop',
        price: '$1,850',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010207.2!2d114.7088!3d-8.4552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb10b2d6228!2sBali%2C%20Indonesia!5e0!3m2!1sru!2sua!4v1792076000000!5m2!1sru!2sua'
    },
    {
        id: 'kuala-lumpur-highlands-february',
        country: 'asia',
        month: 'February',
        date: '12 – 19 FEBRUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'KUALA LUMPUR & HIGHLANDS',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000&auto=format&fit=crop',
        price: '$1,800',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8!2d101.7119!3d3.1578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d3129598a1%3A0x729d7223b24f5a34!2sPetronas%20Twin%20Towers!5e0!3m2!1sru!2sua!4v1792071000000!5m2!1sru!2sua'
    },
    {
        id: 'hanoi-halong-bay-february',
        country: 'asia',
        month: 'February',
        date: '21 – 28 FEBRUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'HANOI & HALONG BAY',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop',
        price: '$1,950',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14876.1!2d107.0435!3d20.9101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a5796fbc4b257%3A0xbcc0e1de74f3fc58!2sHa%20Long%20Bay%2C%20Vietnam!5e0!3m2!1sru!2sua!4v1792063000000!5m2!1sru!2sua'
    },

    // --- MARCH ---
    {
        id: 'tokyo-spring-blossom-march',
        country: 'asia',
        month: 'March',
        date: '04 – 11 MARCH',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'TOKYO SPRING BLOSSOM',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop',
        price: '$2,900',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8!2d139.6917!3d35.6894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0x440b522072c663c1!2sTokyo%2C%20Japan!5e0!3m2!1sru!2sua!4v1792072000000!5m2!1sru!2sua'
    },
    {
        id: 'kyoto-ancient-temples-march',
        country: 'asia',
        month: 'March',
        date: '13 – 20 MARCH',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'KYOTO ANCIENT TEMPLES',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop',
        price: '$2,750',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26253.3!2d135.7681!3d35.0116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600108d6d54238e5%3A0x421e7d727b1d9b0!2sKyoto%2C%20Japan!5e0!3m2!1sru!2sua!4v1792098200000!5m2!1sru!2sua'
    },
    {
        id: 'seoul-korean-heritage-march',
        country: 'asia',
        month: 'March',
        date: '22 – 29 MARCH',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'SEOUL & KOREAN HERITAGE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1538485399081-0d32d6cdee8d?q=80&w=1000&auto=format&fit=crop',
        price: '$2,300',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126532.4!2d126.9780!3d37.5665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2f79cb8945f%3A0x1121d51f92503a46!2sSeoul%2C%20South%20Korea!5e0!3m2!1sru!2sua!4v1792098300000!5m2!1sru!2sua'
    },

    // --- APRIL ---
    {
        id: 'hong-kong-skyline-lights-april',
        country: 'asia',
        month: 'April',
        date: '02 – 09 APRIL',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'HONG KONG SKYLINE & LIGHTS',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1000&auto=format&fit=crop',
        price: '$2,450',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5!2d114.1694!3d22.3193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403e2adc6c4a459%3A0xc633a557e1c8d7b3!2sHong%20Kong!5e0!3m2!1sru!2sua!4v1792098400000!5m2!1sru!2sua'
    },
    {
        id: 'taipei-cultural-explorer-april',
        country: 'asia',
        month: 'April',
        date: '11 – 18 APRIL',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'TAIPEI CULTURAL EXPLORER',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1508804052814-cd388651c6a2?q=80&w=1000&auto=format&fit=crop',
        price: '$2,100',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7!2d121.5654!3d25.0330!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97fa2dcfd43%3A0x5e08dfb6a51d0140!2sTaipei%2C%20Taiwan!5e0!3m2!1sru!2sua!4v1792098500000!5m2!1sru!2sua'
    },
    {
        id: 'cambodia-angkor-wat-april',
        country: 'asia',
        month: 'April',
        date: '20 – 27 APRIL',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'CAMBODIA ANGKOR WAT',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop',
        price: '$1,900',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103322.4!2d103.8567!3d13.3633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3110161474d23255%3A0xc6c7a957d19c3c1a!2sSiem%20Reap%2C%20Cambodia!5e0!3m2!1sru!2sua!4v1792098600000!5m2!1sru!2sua'
    },

    // --- MAY ---
    {
        id: 'great-wall-of-china-may',
        country: 'asia',
        month: 'May',
        date: '04 – 11 MAY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'GREAT WALL OF CHINA',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1508804052814-cd388651c6a2?q=80&w=1000&auto=format&fit=crop',
        price: '$2,150',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.0!2d116.5703!3d40.4319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f121d120a169b7%3A0x89e023772242095f!2sGreat%20Wall%20of%20China!5e0!3m2!1sru!2sua!4v1792070000000!5m2!1sru!2sua'
    },
    {
        id: 'shanghai-historic-water-towns-may',
        country: 'asia',
        month: 'May',
        date: '13 – 20 MAY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'SHANGHAI & HISTORIC WATER TOWNS',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop',
        price: '$2,250',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111874.3!2d121.4737!3d31.2304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35d270bc256193ff%3A0x44607770335e40a0!2sShanghai%2C%20China!5e0!3m2!1sru!2sua!4v1792098700000!5m2!1sru!2sua'
    },
    {
        id: 'mumbai-elephanta-caves-may',
        country: 'asia',
        month: 'May',
        date: '22 – 29 MAY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'MUMBAI & ELEPHANTA CAVES',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1000&auto=format&fit=crop',
        price: '$1,900',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.3!2d72.7410!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sru!2sua!4v1792098800000!5m2!1sru!2sua'
    },

    // --- JUNE ---
    {
        id: 'maldives-tropical-resort-june',
        country: 'asia',
        month: 'June',
        date: '03 – 10 JUNE',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'MALDIVES TROPICAL RESORT',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop',
        price: '$3,500',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64893.3!2d73.5093!3d4.1755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b47f4b9101d2a41%3A0x47ecb6b71f98015c!2sMalé%2C%20Maldives!5e0!3m2!1sru!2sua!4v1792098900000!5m2!1sru!2sua'
    },
    {
        id: 'sri-lanka-safari-tea-hills-june',
        country: 'asia',
        month: 'June',
        date: '12 – 19 JUNE',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'SRI LANKA SAFARI & TEA HILLS',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1000&auto=format&fit=crop',
        price: '$2,000',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7!2d79.8612!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sru!2sua!4v1792099000000!5m2!1sru!2sua'
    },
    {
        id: 'bali-summer-surf-beach-june',
        country: 'asia',
        month: 'June',
        date: '21 – 28 JUNE',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'BALI SUMMER SURF & BEACH',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop',
        price: '$1,900',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010207.2!2d114.7088!3d-8.4552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb10b2d6228!2sBali%2C%20Indonesia!5e0!3m2!1sru!2sua!4v1792099100000!5m2!1sru!2sua'
    },

    // --- JULY ---
    {
        id: 'sumatra-wildlife-jungle-july',
        country: 'asia',
        month: 'July',
        date: '02 – 09 JULY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'SUMATRA WILDLIFE & JUNGLE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1000&auto=format&fit=crop',
        price: '$2,100',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254929.5!2d98.6656!3d3.5952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131cc1202167f%3A0x9d5f0bbf3ee0e5f4!2sMedan%2C%20North%20Sumatra%2C%20Indonesia!5e0!3m2!1sru!2sua!4v1792099200000!5m2!1sru!2sua'
    },
    {
        id: 'singapore-malaysia-escape-july',
        country: 'asia',
        month: 'July',
        date: '11 – 18 JULY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'SINGAPORE & MALAYSIA ESCAPE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1000&auto=format&fit=crop',
        price: '$2,500',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.4!2d103.8198!3d1.3521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869752f84b34!2sSingapore!5e0!3m2!1sru!2sua!4v1792099300000!5m2!1sru!2sua'
    },
    {
        id: 'bangkok-islands-july',
        country: 'asia',
        month: 'July',
        date: '20 – 27 JULY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'BANGKOK & ISLANDS',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1000&auto=format&fit=crop',
        price: '$2,050',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9!2d100.5018!3d13.7563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d60322!2sBangkok%2C%20Thailand!5e0!3m2!1sru!2sua!4v1792099400000!5m2!1sru!2sua'
    },

    // --- AUGUST ---
    {
        id: 'petronas-towers-kuala-lumpur-august',
        country: 'asia',
        month: 'August',
        date: '03 – 10 AUGUST',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'PETRONAS TOWERS & KUALA LUMPUR',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000&auto=format&fit=crop',
        price: '$1,850',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8!2d101.7119!3d3.1578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d3129598a1%3A0x729d7223b24f5a34!2sPetronas%20Twin%20Towers!5e0!3m2!1sru!2sua!4v1792071000000!5m2!1sru!2sua'
    },
    {
        id: 'bali-nusa-penida-expedition-august',
        country: 'asia',
        month: 'August',
        date: '12 – 19 AUGUST',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'BALI & NUSA PENIDA EXPEDITION',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop',
        price: '$1,750',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010207.2!2d114.7088!3d-8.4552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb10b2d6228!2sBali%2C%20Indonesia!5e0!3m2!1sru!2sua!4v1792076000000!5m2!1sru!2sua'
    },
    {
        id: 'phuket-island-hopping-august',
        country: 'asia',
        month: 'August',
        date: '21 – 28 AUGUST',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'PHUKET & ISLAND HOPPING',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=1000&auto=format&fit=crop',
        price: '$2,150',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63259.8!2d98.3923!3d7.8804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031851b14b2b7%3A0x40223bc50e65b90!2sPhuket%2C%20Thailand!5e0!3m2!1sru!2sua!4v1792099500000!5m2!1sru!2sua'
    },

    // --- SEPTEMBER ---
    {
        id: 'tokyo-autumn-vibes-september',
        country: 'asia',
        month: 'September',
        date: '04 – 11 SEPTEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'TOKYO AUTUMN VIBES',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop',
        price: '$2,700',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8!2d139.6917!3d35.6894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0x440b522072c663c1!2sTokyo%2C%20Japan!5e0!3m2!1sru!2sua!4v1792072000000!5m2!1sru!2sua'
    },
    {
        id: 'seoul-autumn-palaces-september',
        country: 'asia',
        month: 'September',
        date: '13 – 20 SEPTEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'SEOUL AUTUMN PALACES',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1538485399081-0d32d6cdee8d?q=80&w=1000&auto=format&fit=crop',
        price: '$2,200',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126532.4!2d126.9780!3d37.5665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2f79cb8945f%3A0x1121d51f92503a46!2sSeoul%2C%20South%20Korea!5e0!3m2!1sru!2sua!4v1792099600000!5m2!1sru!2sua'
    },
    {
        id: 'hong-kong-macau-september',
        country: 'asia',
        month: 'September',
        date: '22 – 29 SEPTEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'HONG KONG & MACAU',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1000&auto=format&fit=crop',
        price: '$2,400',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5!2d114.1694!3d22.3193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403e2adc6c4a459%3A0xc633a557e1c8d7b3!2sHong%20Kong!5e0!3m2!1sru!2sua!4v1792099700000!5m2!1sru!2sua'
    },

    // --- OCTOBER ---
    {
        id: 'ha-long-bay-cruise-october',
        country: 'asia',
        month: 'October',
        date: '03 – 10 OCTOBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'HA LONG BAY CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop',
        price: '$1,950',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14876.1!2d107.0435!3d20.9101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a5796fbc4b257%3A0xbcc0e1de74f3fc58!2sHa%20Long%20Bay%2C%20Vietnam!5e0!3m2!1sru!2sua!4v1792063000000!5m2!1sru!2sua'
    },
    {
        id: 'bangkok-cultural-heritage-october',
        country: 'asia',
        month: 'October',
        date: '12 – 19 OCTOBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'BANGKOK CULTURAL HERITAGE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1000&auto=format&fit=crop',
        price: '$1,850',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9!2d100.5018!3d13.7563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d60322!2sBangkok%2C%20Thailand!5e0!3m2!1sru!2sua!4v1792099800000!5m2!1sru!2sua'
    },
    {
        id: 'singapore-gardens-october',
        country: 'asia',
        month: 'October',
        date: '21 – 28 OCTOBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'SINGAPORE & GARDENS',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1000&auto=format&fit=crop',
        price: '$2,350',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.4!2d103.8198!3d1.3521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869752f84b34!2sSingapore!5e0!3m2!1sru!2sua!4v1792099900000!5m2!1sru!2sua'
    },

    // --- NOVEMBER ---
    {
        id: 'bali-nusa-penida-november',
        country: 'asia',
        month: 'November',
        date: '02 – 09 NOVEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'BALI & NUSA PENIDA',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop',
        price: '$1,750',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010207.2!2d114.7088!3d-8.4552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb10b2d6228!2sBali%2C%20Indonesia!5e0!3m2!1sru!2sua!4v1792076000000!5m2!1sru!2sua'
    },
    {
        id: 'kyoto-autumn-leaves-november',
        country: 'asia',
        month: 'November',
        date: '11 – 18 NOVEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'KYOTO AUTUMN LEAVES',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop',
        price: '$2,850',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26253.3!2d135.7681!3d35.0116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600108d6d54238e5%3A0x421e7d727b1d9b0!2sKyoto%2C%20Japan!5e0!3m2!1sru!2sua!4v1792100000000!5m2!1sru!2sua'
    },
    {
        id: 'phuket-sunset-beaches-november',
        country: 'asia',
        month: 'November',
        date: '20 – 27 NOVEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'PHUKET SUNSET BEACHES',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=1000&auto=format&fit=crop',
        price: '$2,050',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63259.8!2d98.3923!3d7.8804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031851b14b2b7%3A0x40223bc50e65b90!2sPhuket%2C%20Thailand!5e0!3m2!1sru!2sua!4v1792100100000!5m2!1sru!2sua'
    },

    // --- DECEMBER ---
    {
        id: 'tokyo-winter-illuminations-december',
        country: 'asia',
        month: 'December',
        date: '02 – 09 DECEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'TOKYO WINTER ILLUMINATIONS',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop',
        price: '$2,800',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8!2d139.6917!3d35.6894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0x440b522072c663c1!2sTokyo%2C%20Japan!5e0!3m2!1sru!2sua!4v1792072000000!5m2!1sru!2sua'
    },
    {
        id: 'maldives-tropical-new-year-december',
        country: 'asia',
        month: 'December',
        date: '11 – 18 DECEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'MALDIVES TROPICAL NEW YEAR',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop',
        price: '$3,800',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64893.3!2d73.5093!3d4.1755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b47f4b9101d2a41%3A0x47ecb6b71f98015c!2sMalé%2C%20Maldives!5e0!3m2!1sru!2sua!4v1792100200000!5m2!1sru!2sua'
    },
    {
        id: 'bali-christmas-holiday-december',
        country: 'asia',
        month: 'December',
        date: '20 – 27 DECEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'BALI CHRISTMAS HOLIDAY',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop',
        price: '$2,200',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010207.2!2d114.7088!3d-8.4552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb10b2d6228!2sBali%2C%20Indonesia!5e0!3m2!1sru!2sua!4v1792076000000!5m2!1sru!2sua'
    },


    // ==========================================
    // CRUISES (36 TOURS)
    // ==========================================

    // --- JANUARY ---
    {
        id: 'caribbean-sunshine-cruise-january',
        country: 'cruises',
        month: 'January',
        date: '05 – 12 JANUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'CARIBBEAN SUNSHINE CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000&auto=format&fit=crop',
        price: '$2,400',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500000.1!2d-76.0!3d21.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ebd3c0a52f4c39f%3A0x10f27b9c9f0c2a0!2sCaribbean!5e0!3m2!1sru!2sua!4v1792100300000!5m2!1sru!2sua'
    },
    {
        id: 'bahamas-island-hopping-voyage-january',
        country: 'cruises',
        month: 'January',
        date: '14 – 21 JANUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'BAHAMAS ISLAND HOPPING VOYAGE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
        price: '$2,200',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112000.1!2d-77.3963!3d25.0343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c006ee62e7f%3A0x7c4bf7f046a80c35!2sNassau%2C%20Bahamas!5e0!3m2!1sru!2sua!4v1792100400000!5m2!1sru!2sua'
    },
    {
        id: 'mexican-riviera-cruise-january',
        country: 'cruises',
        month: 'January',
        date: '22 – 29 JANUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'MEXICAN RIVIERA CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1000&auto=format&fit=crop',
        price: '$2,100',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d149000.1!2d-109.9167!3d22.8905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86af4ae2d33f083b%3A0xc80b8f06e177fe62!2sCabo%20San%20Lucas%2C%20Mexico!5e0!3m2!1sru!2sua!4v1792100500000!5m2!1sru!2sua'
    },

    // --- FEBRUARY ---
    {
        id: 'eastern-caribbean-paradise-february',
        country: 'cruises',
        month: 'February',
        date: '03 – 10 FEBRUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'EASTERN CARIBBEAN PARADISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000&auto=format&fit=crop',
        price: '$2,450',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500000.1!2d-65.0!3d18.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ebd3c0a52f4c39f%3A0x10f27b9c9f0c2a0!2sCaribbean!5e0!3m2!1sru!2sua!4v1792100600000!5m2!1sru!2sua'
    },
    {
        id: 'panama-canal-expedition-cruise-february',
        country: 'cruises',
        month: 'February',
        date: '12 – 19 FEBRUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'PANAMA CANAL EXPEDITION CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1000&auto=format&fit=crop',
        price: '$2,900',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158000.1!2d-79.5199!3d8.9824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fab5f87f2e12345%3A0x40f27b9c9f0c2a0!2sPanama%20Canal!5e0!3m2!1sru!2sua!4v1792100700000!5m2!1sru!2sua'
    },
    {
        id: 'western-caribbean-voyage-february',
        country: 'cruises',
        month: 'February',
        date: '21 – 28 FEBRUARY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'WESTERN CARIBBEAN VOYAGE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
        price: '$2,300',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500000.1!2d-85.0!3d20.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ebd3c0a52f4c39f%3A0x10f27b9c9f0c2a0!2sCaribbean!5e0!3m2!1sru!2sua!4v1792100800000!5m2!1sru!2sua'
    },

    // --- MARCH ---
    {
        id: 'mediterranean-classic-cruise-march',
        country: 'cruises',
        month: 'March',
        date: '04 – 11 MARCH',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'MEDITERRANEAN CLASSIC CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1000&auto=format&fit=crop',
        price: '$2,600',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4000000.1!2d10.0!3d40.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sMediterranean%20Sea!5e0!3m2!1sru!2sua!4v1792100900000!5m2!1sru!2sua'
    },
    {
        id: 'greek-isles-sunset-cruise-march',
        country: 'cruises',
        month: 'March',
        date: '13 – 20 MARCH',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'GREEK ISLES SUNSET CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop',
        price: '$2,750',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51234.5!2d25.4317!3d36.3932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1499ce86adfd9f23%3A0xed017a5b1614e365!2sSantorini%2C%20Greece!5e0!3m2!1sru!2sua!4v1792086500000!5m2!1sru!2sua'
    },
    {
        id: 'dubai-persian-gulf-cruise-march',
        country: 'cruises',
        month: 'March',
        date: '22 – 29 MARCH',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'DUBAI & PERSIAN GULF CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop',
        price: '$2,500',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d361000.1!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde662584a4b9d4!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sru!2sua!4v1792101000000!5m2!1sru!2sua'
    },

    // --- APRIL ---
    {
        id: 'western-mediterranean-voyage-april',
        country: 'cruises',
        month: 'April',
        date: '02 – 09 APRIL',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'WESTERN MEDITERRANEAN VOYAGE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1000&auto=format&fit=crop',
        price: '$2,650',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4000000.1!2d5.0!3d40.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sMediterranean%20Sea!5e0!3m2!1sru!2sua!4v1792101100000!5m2!1sru!2sua'
    },
    {
        id: 'riviera-spain-cruise-april',
        country: 'cruises',
        month: 'April',
        date: '11 – 18 APRIL',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'RIVIERA & SPAIN CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop',
        price: '$2,550',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d149684.2!2d2.1734!3d41.3851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Spain!5e0!3m2!1sru!2sua!4v1792085700000!5m2!1sru!2sua'
    },
    {
        id: 'bermuda-island-cruise-april',
        country: 'cruises',
        month: 'April',
        date: '20 – 27 APRIL',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'BERMUDA ISLAND CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000&auto=format&fit=crop',
        price: '$2,350',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110000.1!2d-64.7834!3d32.3078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b5a0a52f4c39f%3A0x10f27b9c9f0c2a0!2sBermuda!5e0!3m2!1sru!2sua!4v1792101200000!5m2!1sru!2sua'
    },

    // --- MAY ---
    {
        id: 'alaska-glacier-discovery-cruise-may',
        country: 'cruises',
        month: 'May',
        date: '04 – 11 MAY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'ALASKA GLACIER DISCOVERY CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop',
        price: '$3,200',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372111.4!2d-149.4937!3d64.2008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5600f764a50d2495%3A0x5a14d59f5b6134b!2sAlaska%2C%20USA!5e0!3m2!1sru!2sua!4v1792094600000!5m2!1sru!2sua'
    },
    {
        id: 'greek-island-hopping-cruise-may',
        country: 'cruises',
        month: 'May',
        date: '13 – 20 MAY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'GREEK ISLAND HOPPING CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop',
        price: '$2,800',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201234.5!2d23.7275!3d37.9838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x273635457638848d!2sAthens%2C%20Greece!5e0!3m2!1sru!2sua!4v1792085900000!5m2!1sru!2sua'
    },
    {
        id: 'norwegian-fjords-cruise-voyage-may',
        country: 'cruises',
        month: 'May',
        date: '22 – 29 MAY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'NORWEGIAN FJORDS CRUISE VOYAGE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1000&auto=format&fit=crop',
        price: '$3,100',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d341234.5!2d5.3221!3d60.3913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cfea638166d15%3A0xb45839f972b9a7b!2sBergen%2C%20Norway!5e0!3m2!1sru!2sua!4v1792086300000!5m2!1sru!2sua'
    },

    // --- JUNE ---
    {
        id: 'alaskan-inside-passage-cruise-june',
        country: 'cruises',
        month: 'June',
        date: '03 – 10 JUNE',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'ALASKAN INSIDE PASSAGE CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop',
        price: '$3,300',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372111.4!2d-149.4937!3d64.2008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5600f764a50d2495%3A0x5a14d59f5b6134b!2sAlaska%2C%20USA!5e0!3m2!1sru!2sua!4v1792094600000!5m2!1sru!2sua'
    },
    {
        id: 'baltic-capital-cruising-june',
        country: 'cruises',
        month: 'June',
        date: '12 – 19 JUNE',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'BALTIC CAPITAL CRUISING',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop',
        price: '$2,750',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200000.1!2d24.9354!3d60.1699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc796210691%3A0xcd48d63b04c8fb2b!2sHelsinki%2C%20Finland!5e0!3m2!1sru!2sua!4v1792101300000!5m2!1sru!2sua'
    },
    {
        id: 'mediterranean-riviera-voyage-june',
        country: 'cruises',
        month: 'June',
        date: '21 – 28 JUNE',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'MEDITERRANEAN RIVIERA VOYAGE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1000&auto=format&fit=crop',
        price: '$2,850',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4000000.1!2d7.0!3d43.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd0106a852d31%3A0x40819a5fd979a70!2sFrench%20Riviera!5e0!3m2!1sru!2sua!4v1792101400000!5m2!1sru!2sua'
    },

    // --- JULY ---
    {
        id: 'mediterranean-sunset-cruise-july',
        country: 'cruises',
        month: 'July',
        date: '02 – 09 JULY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'MEDITERRANEAN SUNSET CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1000&auto=format&fit=crop',
        price: '$2,900',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4000000.1!2d12.0!3d41.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRome%2C%20Italy!5e0!3m2!1sru!2sua!4v1792101500000!5m2!1sru!2sua'
    },
    {
        id: 'alaskan-wildlife-cruise-july',
        country: 'cruises',
        month: 'July',
        date: '10 – 17 JULY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'ALASKAN WILDLIFE CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop',
        price: '$3,400',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372111.4!2d-149.4937!3d64.2008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5600f764a50d2495%3A0x5a14d59f5b6134b!2sAlaska%2C%20USA!5e0!3m2!1sru!2sua!4v1792094600000!5m2!1sru!2sua'
    },
    {
        id: 'greek-islands-turkey-cruise-july',
        country: 'cruises',
        month: 'July',
        date: '19 – 26 JULY',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'GREEK ISLANDS & TURKEY CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop',
        price: '$2,800',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201234.5!2d23.7275!3d37.9838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x273635457638848d!2sAthens%2C%20Greece!5e0!3m2!1sru!2sua!4v1792085900000!5m2!1sru!2sua'
    },

    // --- AUGUST ---
    {
        id: 'alaskan-glacier-cruise-august',
        country: 'cruises',
        month: 'August',
        date: '03 – 10 AUGUST',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'ALASKAN GLACIER CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop',
        price: '$3,350',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372111.4!2d-149.4937!3d64.2008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5600f764a50d2495%3A0x5a14d59f5b6134b!2sAlaska%2C%20USA!5e0!3m2!1sru!2sua!4v1792094600000!5m2!1sru!2sua'
    },
    {
        id: 'western-mediterranean-cruise-august',
        country: 'cruises',
        month: 'August',
        date: '12 – 19 AUGUST',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'WESTERN MEDITERRANEAN CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1000&auto=format&fit=crop',
        price: '$2,750',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4000000.1!2d8.0!3d42.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sMediterranean%20Sea!5e0!3m2!1sru!2sua!4v1792101600000!5m2!1sru!2sua'
    },
    {
        id: 'hawaiian-islands-voyage-august',
        country: 'cruises',
        month: 'August',
        date: '21 – 28 AUGUST',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'HAWAIIAN ISLANDS VOYAGE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
        price: '$3,100',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6!2d-157.8583!3d21.3069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006ee62e7f9c73%3A0x7c4bf7f046a80c35!2sHonolulu%2C%20HI%2C%20USA!5e0!3m2!1sru!2sua!4v1792094900000!5m2!1sru!2sua'
    },

    // --- SEPTEMBER ---
    {
        id: 'canada-new-england-cruise-september',
        country: 'cruises',
        month: 'September',
        date: '04 – 11 SEPTEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'CANADA & NEW ENGLAND CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
        price: '$2,450',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91234.5!2d-68.2733!3d44.3386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cae8f526b772c39%3A0x1d2c0b62846fa2b0!2sAcadia%20National%20Park!5e0!3m2!1sru!2sua!4v1792095300000!5m2!1sru!2sua'
    },
    {
        id: 'mediterranean-autumn-cruise-september',
        country: 'cruises',
        month: 'September',
        date: '13 – 20 SEPTEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'MEDITERRANEAN AUTUMN CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1000&auto=format&fit=crop',
        price: '$2,500',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4000000.1!2d14.0!3d39.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sMediterranean%20Sea!5e0!3m2!1sru!2sua!4v1792101700000!5m2!1sru!2sua'
    },
    {
        id: 'pacific-coast-wine-cruise-september',
        country: 'cruises',
        month: 'September',
        date: '22 – 29 SEPTEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'PACIFIC COAST WINE CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop',
        price: '$2,300',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100456.2!2d-122.2869!3d38.2975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085064e43b14515%3A0x7d6b38c2c62c3f7!2sNapa%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sru!2sua!4v1792094800000!5m2!1sru!2sua'
    },

    // --- OCTOBER ---
    {
        id: 'new-england-fall-foliage-cruise-october',
        country: 'cruises',
        month: 'October',
        date: '03 – 10 OCTOBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'NEW ENGLAND FALL FOLIAGE CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1507783590521-9d92437d4e3e?q=80&w=1000&auto=format&fit=crop',
        price: '$2,600',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312345.4!2d-72.5000!3d44.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb453982e7e31d7%3A0x6b9d62d2b0e6dfb0!2sVermont%2C%20USA!5e0!3m2!1sru!2sua!4v1792095500000!5m2!1sru!2sua'
    },
    {
        id: 'caribbean-island-voyage-october',
        country: 'cruises',
        month: 'October',
        date: '12 – 19 OCTOBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'CARIBBEAN ISLAND VOYAGE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000&auto=format&fit=crop',
        price: '$2,350',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500000.1!2d-70.0!3d19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ebd3c0a52f4c39f%3A0x10f27b9c9f0c2a0!2sCaribbean!5e0!3m2!1sru!2sua!4v1792101800000!5m2!1sru!2sua'
    },
    {
        id: 'transaction-riviera-cruise-october',
        country: 'cruises',
        month: 'October',
        date: '21 – 28 OCTOBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'TRANSACTION & RIVIERA CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1000&auto=format&fit=crop',
        price: '$2,400',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158000.1!2d-79.5199!3d8.9824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fab5f87f2e12345%3A0x40f27b9c9f0c2a0!2sPanama%20Canal!5e0!3m2!1sru!2sua!4v1792100700000!5m2!1sru!2sua'
    },

    // --- NOVEMBER ---
    {
        id: 'southern-caribbean-cruise-november',
        country: 'cruises',
        month: 'November',
        date: '02 – 09 NOVEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'SOUTHERN CARIBBEAN CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000&auto=format&fit=crop',
        price: '$2,500',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500000.1!2d-61.0!3d14.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ebd3c0a52f4c39f%3A0x10f27b9c9f0c2a0!2sCaribbean!5e0!3m2!1sru!2sua!4v1792101900000!5m2!1sru!2sua'
    },
    {
        id: 'bahamas-sunshine-voyage-november',
        country: 'cruises',
        month: 'November',
        date: '11 – 18 NOVEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'BAHAMAS SUNSHINE VOYAGE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
        price: '$2,150',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112000.1!2d-77.3963!3d25.0343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c006ee62e7f%3A0x7c4bf7f046a80c35!2sNassau%2C%20Bahamas!5e0!3m2!1sru!2sua!4v1792100400000!5m2!1sru!2sua'
    },
    {
        id: 'thanksgiving-caribbean-cruise-november',
        country: 'cruises',
        month: 'November',
        date: '20 – 27 NOVEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'THANKSGIVING CARIBBEAN CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1000&auto=format&fit=crop',
        price: '$2,650',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500000.1!2d-75.0!3d20.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ebd3c0a52f4c39f%3A0x10f27b9c9f0c2a0!2sCaribbean!5e0!3m2!1sru!2sua!4v1792102000000!5m2!1sru!2sua'
    },

    // --- DECEMBER ---
    {
        id: 'caribbean-holiday-cruise-december',
        country: 'cruises',
        month: 'December',
        date: '02 – 09 DECEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'CARIBBEAN HOLIDAY CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000&auto=format&fit=crop',
        price: '$2,700',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500000.1!2d-76.0!3d21.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ebd3c0a52f4c39f%3A0x10f27b9c9f0c2a0!2sCaribbean!5e0!3m2!1sru!2sua!4v1792100300000!5m2!1sru!2sua'
    },
    {
        id: 'mexican-riviera-sun-cruise-december',
        country: 'cruises',
        month: 'December',
        date: '11 – 18 DECEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'MEXICAN RIVIERA SUN CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1000&auto=format&fit=crop',
        price: '$2,450',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d149000.1!2d-109.9167!3d22.8905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86af4ae2d33f083b%3A0xc80b8f06e177fe62!2sCabo%20San%20Lucas%2C%20Mexico!5e0!3m2!1sru!2sua!4v1792100500000!5m2!1sru!2sua'
    },
    {
        id: 'christmas-new-year-caribbean-voyage-december',
        country: 'cruises',
        month: 'December',
        date: '20 – 27 DECEMBER',
        duration: '8 DAYS / 7 NIGHTS',
        name: 'CHRISTMAS & NEW YEAR CARIBBEAN VOYAGE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
        price: '$3,600',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500000.1!2d-70.0!3d19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ebd3c0a52f4c39f%3A0x10f27b9c9f0c2a0!2sCaribbean!5e0!3m2!1sru!2sua!4v1792101800000!5m2!1sru!2sua'
    },


    // ==========================================
    // ANTARCTICA (36 TOURS)
    // ==========================================

    // --- JANUARY ---
    {
        id: 'antarctica-iceberg-safari-january',
        country: 'antarctica',
        month: 'January',
        date: '05 – 15 JANUARY',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'ANTARCTICA ICEBERG SAFARI',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1000&auto=format&fit=crop',
        price: '$5,500',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792064000000!5m2!1sru!2sua'
    },
    {
        id: 'kayaking-in-antarctica-january',
        country: 'antarctica',
        month: 'January',
        date: '10 – 20 JANUARY',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'KAYAKING IN ANTARCTICA',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop',
        price: '$5,800',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792073000000!5m2!1sru!2sua'
    },
    {
        id: 'penguin-colony-expedition-january',
        country: 'antarctica',
        month: 'January',
        date: '22 – 02 FEBRUARY',
        duration: '12 DAYS / 11 NIGHTS',
        name: 'PENGUIN COLONY EXPEDITION',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1000&auto=format&fit=crop',
        price: '$5,900',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792102100000!5m2!1sru!2sua'
    },

    // --- FEBRUARY ---
    {
        id: 'south-pole-ice-cruise-february',
        country: 'antarctica',
        month: 'February',
        date: '04 – 14 FEBRUARY',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'SOUTH POLE ICE CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1000&auto=format&fit=crop',
        price: '$6,200',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792080000000!5m2!1sru!2sua'
    },
    {
        id: 'deep-antarctic-voyage-february',
        country: 'antarctica',
        month: 'February',
        date: '14 – 26 FEBRUARY',
        duration: '13 DAYS / 12 NIGHTS',
        name: 'DEEP ANTARCTIC VOYAGE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop',
        price: '$6,500',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792102200000!5m2!1sru!2sua'
    },
    {
        id: 'whale-watching-in-antarctica-february',
        country: 'antarctica',
        month: 'February',
        date: '20 – 02 MARCH',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'WHALE WATCHING IN ANTARCTICA',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1000&auto=format&fit=crop',
        price: '$6,000',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792102300000!5m2!1sru!2sua'
    },

    // --- MARCH ---
    {
        id: 'last-frontier-antarctica-march',
        country: 'antarctica',
        month: 'March',
        date: '04 – 14 MARCH',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'LAST FRONTIER ANTARCTICA',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop',
        price: '$5,800',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792102400000!5m2!1sru!2sua'
    },
    {
        id: 'polar-ice-glacier-expedition-march',
        country: 'antarctica',
        month: 'March',
        date: '15 – 25 MARCH',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'POLAR ICE & GLACIER EXPEDITION',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1000&auto=format&fit=crop',
        price: '$5,700',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792102500000!5m2!1sru!2sua'
    },
    {
        id: 'antarctic-peninsula-cruise-march',
        country: 'antarctica',
        month: 'March',
        date: '22 – 01 APRIL',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'ANTARCTIC PENINSULA CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop',
        price: '$5,600',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792102600000!5m2!1sru!2sua'
    },

    // --- APRIL ---
    {
        id: 'end-of-season-polar-voyage-april',
        country: 'antarctica',
        month: 'April',
        date: '04 – 14 APRIL',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'END OF SEASON POLAR VOYAGE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1000&auto=format&fit=crop',
        price: '$5,400',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792102700000!5m2!1sru!2sua'
    },
    {
        id: 'white-continent-expedition-april',
        country: 'antarctica',
        month: 'April',
        date: '12 – 22 APRIL',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'WHITE CONTINENT EXPEDITION',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop',
        price: '$5,300',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792102800000!5m2!1sru!2sua'
    },
    {
        id: 'icebreaker-adventure-april',
        country: 'antarctica',
        month: 'April',
        date: '20 – 30 APRIL',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'ICEBREAKER ADVENTURE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1000&auto=format&fit=crop',
        price: '$5,200',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792102900000!5m2!1sru!2sua'
    },

    // --- MAY ---
    {
        id: 'antarctic-winter-beginning-may',
        country: 'antarctica',
        month: 'May',
        date: '03 – 13 MAY',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'ANTARCTIC WINTER BEGINNING',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop',
        price: '$5,500',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792103000000!5m2!1sru!2sua'
    },
    {
        id: 'polar-night-aurora-voyage-may',
        country: 'antarctica',
        month: 'May',
        date: '14 – 24 MAY',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'POLAR NIGHT & AURORA VOYAGE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1000&auto=format&fit=crop',
        price: '$5,800',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792103100000!5m2!1sru!2sua'
    },
    {
        id: 'frozen-ocean-expedition-may',
        country: 'antarctica',
        month: 'May',
        date: '22 – 01 JUNE',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'FROZEN OCEAN EXPEDITION',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop',
        price: '$5,600',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792103200000!5m2!1sru!2sua'
    },

    // --- JUNE ---
    {
        id: 'midwinter-antarctic-cruise-june',
        country: 'antarctica',
        month: 'June',
        date: '03 – 13 JUNE',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'MIDWINTER ANTARCTIC CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1000&auto=format&fit=crop',
        price: '$6,000',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792103300000!5m2!1sru!2sua'
    },
    {
        id: 'ice-snow-polar-safari-june',
        country: 'antarctica',
        month: 'June',
        date: '12 – 22 JUNE',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'ICE & SNOW POLAR SAFARI',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop',
        price: '$5,900',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792103400000!5m2!1sru!2sua'
    },
    {
        id: 'extreme-southern-expedition-june',
        country: 'antarctica',
        month: 'June',
        date: '21 – 01 JULY',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'EXTREME SOUTHERN EXPEDITION',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1000&auto=format&fit=crop',
        price: '$6,100',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792103500000!5m2!1sru!2sua'
    },

    // --- JULY ---
    {
        id: 'deep-polar-winter-cruise-july',
        country: 'antarctica',
        month: 'July',
        date: '02 – 12 JULY',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'DEEP POLAR WINTER CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop',
        price: '$6,200',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792103600000!5m2!1sru!2sua'
    },
    {
        id: 'antarctic-ice-sheet-voyage-july',
        country: 'antarctica',
        month: 'July',
        date: '10 – 20 JULY',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'ANTARCTIC ICE SHEET VOYAGE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1000&auto=format&fit=crop',
        price: '$6,150',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792103700000!5m2!1sru!2sua'
    },
    {
        id: 'frozen-continent-discovery-july',
        country: 'antarctica',
        month: 'July',
        date: '19 – 29 JULY',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'FROZEN CONTINENT DISCOVERY',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop',
        price: '$6,050',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792103800000!5m2!1sru!2sua'
    },

    // --- AUGUST ---
    {
        id: 'southern-ocean-polar-voyage-august',
        country: 'antarctica',
        month: 'August',
        date: '03 – 13 AUGUST',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'SOUTHERN OCEAN POLAR VOYAGE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1000&auto=format&fit=crop',
        price: '$6,000',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792103900000!5m2!1sru!2sua'
    },
    {
        id: 'antarctic-iceberg-expedition-august',
        country: 'antarctica',
        month: 'August',
        date: '12 – 22 AUGUST',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'ANTARCTIC ICEBERG EXPEDITION',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop',
        price: '$5,900',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792104000000!5m2!1sru!2sua'
    },
    {
        id: 'white-desert-ice-cruise-august',
        country: 'antarctica',
        month: 'August',
        date: '21 – 31 AUGUST',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'WHITE DESERT & ICE CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1000&auto=format&fit=crop',
        price: '$5,850',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792104100000!5m2!1sru!2sua'
    },

    // --- SEPTEMBER ---
    {
        id: 'spring-awakening-antarctica-september',
        country: 'antarctica',
        month: 'September',
        date: '04 – 14 SEPTEMBER',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'SPRING AWAKENING ANTARCTICA',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop',
        price: '$5,700',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792104200000!5m2!1sru!2sua'
    },
    {
        id: 'polar-explorers-route-september',
        country: 'antarctica',
        month: 'September',
        date: '13 – 23 SEPTEMBER',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'POLAR EXPLORERS ROUTE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1000&auto=format&fit=crop',
        price: '$5,600',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792104300000!5m2!1sru!2sua'
    },
    {
        id: 'antarctic-peninsula-voyage-september',
        country: 'antarctica',
        month: 'September',
        date: '22 – 02 OCTOBER',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'ANTARCTIC PENINSULA VOYAGE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop',
        price: '$5,500',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792104400000!5m2!1sru!2sua'
    },

    // --- OCTOBER ---
    {
        id: 'early-season-antarctic-cruise-october',
        country: 'antarctica',
        month: 'October',
        date: '04 – 14 OCTOBER',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'EARLY SEASON ANTARCTIC CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1000&auto=format&fit=crop',
        price: '$5,400',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792104500000!5m2!1sru!2sua'
    },
    {
        id: 'icebreaker-polar-adventure-october',
        country: 'antarctica',
        month: 'October',
        date: '13 – 23 OCTOBER',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'ICEBREAKER POLAR ADVENTURE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop',
        price: '$5,350',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792104600000!5m2!1sru!2sua'
    },
    {
        id: 'southern-ocean-expedition-october',
        country: 'antarctica',
        month: 'October',
        date: '22 – 01 NOVEMBER',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'SOUTHERN OCEAN EXPEDITION',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1000&auto=format&fit=crop',
        price: '$5,450',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792104700000!5m2!1sru!2sua'
    },

    // --- NOVEMBER ---
    {
        id: 'penguin-breeding-season-cruise-november',
        country: 'antarctica',
        month: 'November',
        date: '03 – 13 NOVEMBER',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'PENGUIN BREEDING SEASON CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop',
        price: '$5,600',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792104800000!5m2!1sru!2sua'
    },
    {
        id: 'antarctic-peninsula-wildlife-november',
        country: 'antarctica',
        month: 'November',
        date: '12 – 22 NOVEMBER',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'ANTARCTIC PENINSULA WILDLIFE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1000&auto=format&fit=crop',
        price: '$5,750',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792104900000!5m2!1sru!2sua'
    },
    {
        id: 'ice-whales-expedition-november',
        country: 'antarctica',
        month: 'November',
        date: '21 – 01 DECEMBER',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'ICE & WHALES EXPEDITION',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop',
        price: '$5,900',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792105000000!5m2!1sru!2sua'
    },

    // --- DECEMBER ---
    {
        id: 'summer-solstice-antarctic-cruise-december',
        country: 'antarctica',
        month: 'December',
        date: '03 – 13 DECEMBER',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'SUMMER SOLSTICE ANTARCTIC CRUISE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1000&auto=format&fit=crop',
        price: '$6,100',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792105100000!5m2!1sru!2sua'
    },
    {
        id: 'white-continent-holiday-voyage-december',
        country: 'antarctica',
        month: 'December',
        date: '12 - 22 DECEMBER',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'WHITE CONTINENT HOLIDAY VOYAGE',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop',
        price: '$6,300',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792105200000!5m2!1sru!2sua'
    },
    {
        id: 'new-year-at-the-end-of-the-world-december',
        country: 'antarctica',
        month: 'December',
        date: '21 – 31 DECEMBER',
        duration: '11 DAYS / 10 NIGHTS',
        name: 'NEW YEAR AT THE END OF THE WORLD',
        guideName: 'Mary',
        guideIcon: './guides-section/mary.webp',
        img: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1000&auto=format&fit=crop',
        price: '$6,800',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654321.4!2d-65.0!3d-75.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9e7e123456789!2z0JDQvdGC0LDQutC40LrKtNC40LosINCg0LXRgdC_0YPRgNC10L3QuA!5e0!3m2!1sru!2sua!4v1792105300000!5m2!1sru!2sua'
    }
];




document.addEventListener('DOMContentLoaded', () => {
    const direction = document.querySelector('.select-direction__value');
    const month = document.querySelector('.select-month__value');
    const searchBtn = document.querySelector('.choose__btn-item');
    const cardsSection = document.getElementById('cards');


    if (!searchBtn) return;

    // 1. Обработчик клика по кнопке поиска
    searchBtn.addEventListener('click', function (e) {
        const selectCountry = direction ? direction.textContent.trim().toLowerCase() : '';
        const selectMonth = month ? month.textContent.trim().toLowerCase() : '';

        const fliterTours = toursData.filter(function (tour) {
            return tour.country === selectCountry && tour.month.toLowerCase() === selectMonth;
        });

        const cardsHTML = fliterTours.map(function (tour) {

            const tourId = tour.id || tour.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

            return `<div class="cards__country country">
                        <div class="country__fon">
                            <img src="${tour.img}" alt="${tour.name}" class="country__img">
                        </div>
                        <div class="country__description description">
                            <div class="country__item">
                                <div class="description__content">
                                    <h3 class="description__name">${tour.name}</h3>
                                    <span class="description__days">${tour.duration}</span>
                                    <span class="description__date">${tour.date}</span>
                                    <div class="description__guide guide">
                                        <div class="guide__photo">
                                            <img src="${tour.guideIcon}" alt="${tour.guideName}" class="guide__icon">
                                        </div>
                                        <div class="guide__about">
                                            <span class="guide__text">Expert Guide:</span>
                                            <span class="guide__name">${tour.guideName}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="price__block">
                                    <div class="price__block-map map">
                                        <iframe class="map__link" src="${tour.mapSrc}" loading="lazy"></iframe>
                                    </div>
                                    <div class="price__text">
                                        <span class="price__value">Price: from <span class="price__value-really">${tour.price}</span></span>
                                    </div>
                                </div>
                            </div>
                            <div class="country__actions">
                                <a href="./details.html" class="country__btn-link_details tour-details-btn" data-tour-id="${tour.id}">DETAILS</a>
                                <a href="./contact.html#contact" class="country__btn-link_book">BOOK NOW</a>
                            </div>
                        </div>
                    </div>`;
        }).join('');

        if (fliterTours.length > 0) {
            const cardsBlock = document.querySelector('.cards__block');
            if (cardsBlock) {
                cardsBlock.innerHTML = cardsHTML;
            }
            if (cardsSection) {
                cardsSection.classList.add('_active');
            }
        } else {
            if (cardsSection) {
                cardsSection.classList.remove('_active');
            }
            alert('Unfortunately, no tours were found for your request.');
        }
    });

    // 2. ГЛОБАЛЬНЫЙ обработчик клика по кнопке DETAILS
    document.addEventListener('click', (e) => {
        const detailsBtn = e.target.closest('.tour-details-btn');
        if (!detailsBtn) return;

        e.preventDefault();

        const tourId = detailsBtn.getAttribute('data-tour-id');

        if (tourId && tourId !== 'undefined') {
            localStorage.setItem('targetTourId', tourId);
            window.location.href = detailsBtn.getAttribute('href');
        } else {
            alert('A detailed page for this tour has not yet been added.');
        }
    });
});

