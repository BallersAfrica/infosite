let currentIndex = 0;
const images = [
    {src: 'images/card.jpg', desc: 'We provide cashless solutions for businesses and individuals. Our mission is to help our customers save time and money by providing them with a convenient way to pay for goods and services without having to carry cash or credit cards.', title: 'BA Cards'},
    {src: 'images/HUB2.jpg', desc: 'INNOVATION AND TECHNOLOGY SOLUTIONSOffers cutting-edge IT, Fintech, trade and finance solutions, education, and technical skills. Our mission is to help businesses and individuals leverage the power of technology to drive growth, improve efficiency, and achieve their goals.', title: ' BA HUB'},
    {src: 'images/CONNECT.jpg', desc: 'This department is responsible for setting us up with the best partnerships and acquisitions in different sectors.', title: 'BA CONNECT'},
    {src: 'images/hexX.jpg', desc: 'BA Crypto currency', title: 'BALLER NOVA'},
    {src: 'images/LEAGGUE.jpg', desc: 'A continental 3X3 basketball league held across BA Arenas on the African continent. Showcasing the exciting aspects of the game, increadible talent and skills.', title: 'BA LEAGUE'},
    {src: 'images/PODCAST.jpg', desc: 'BA Podcast Description', title: 'BA PODCAST'},
    {src: 'images/ENT.jpg', desc: 'This is a part of Ballers Africa Media department responsible for creating entertaining yet productive content across our platforms.', title: 'BA Entertainment'},
    {src: 'images/GAMING.jpg', desc: 'Games is a gaming platform that offers a wide variety of games for all ages and skill levels. Our mission is to provide our customers with the best possible gaming experience by offering them a wide variety of games, including arcade games, board games, card games, and more.', title: 'BA GAMING'},
    {src: 'images/ARENA.jpg', desc: 'Video games, HIGH resolution graphic experiences, and other recreational games for individuals, groups, and families. There is something for everyone at BA Arena.', title: 'BA ARENA'},
    {src: 'images/JEWELS.jpg', desc: 'At Fancie-jewels, we take pride in offering top-notch hairstyling, makeup, skincare, and jewelry services, exclusively designed to meet the diverse needs of women.', title: 'FANCIE JEWELS'},
    {src: 'images/HEALTH.jpg', desc: 'We provide a wide variety of health and wellness services to our customers. Our mission is to provide our customers with the best possible health and wellness experience by offering them a wide variety of services, including fitness classes, nutrition counseling, and more.', title: 'BA HEALTH'},
    {src: 'images/TALENT.jpg', desc: 'We provide a platform for talented individuals to showcase their skills and talents to the world. Our mission is to help aspiring artists, musicians, and entertainers reach their full potential by providing them with the necessary resources, support, and opportunities they need to succeed in their careers.', title: 'BA TALENT'},
    {src: 'images/SPORTS.jpg', desc: 'Ballers Africa that focuses on promoting and developing various sports across the continent, Our aim is to provide world-class training, mentorship, and resources to aspiring athletes and coaches, as well as organize and support various sports events and leagues that showcase African talent and potential.', title: 'BA SPORTS'}
];

// Grab elements from the DOM
const incomingImage = document.getElementById('incomingImg');
const mainImage = document.getElementById('mainImg');
const outgoingImage = document.getElementById('outgoingImg');
const descriptionText = document.getElementById('descriptionText');
const brandTitle = document.getElementById('brandTitle');

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateCarousel(index) {
    const nextIndex = (index + 1) % images.length;
    const prevIndex = (index - 1 + images.length) % images.length;
    
    // Update incoming, main, and outgoing images
    incomingImage.src = images[prevIndex].src;
    mainImage.src = images[index].src;
    outgoingImage.src = images[nextIndex].src;

    // Update title and description
    brandTitle.textContent = images[index].title;
    descriptionText.textContent = images[index].desc;
    
    // Show or hide the previous button based on the index
    prevButton.classList.toggle('hidden', index === 0);
}

// Add event listeners for navigation buttons
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel(currentIndex);
});

// Initially load the first set of images
updateCarousel(currentIndex);
