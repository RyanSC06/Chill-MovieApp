const params = new URLSearchParams(window.location.search);
if (params.get('register') === 'success') {
    window.onload = function() {
        alert('Registrasi berhasil!');
        history.replaceState(null, '', 'beranda.html');
    };
}
if (params.get('login') === 'success') {
    window.onload = function() {
        alert('Selamat datang kembali!');
        history.replaceState(null, '', 'beranda.html');
    };
}


const slider = document.querySelectorAll('.film-slider');
const leftBtnAll = document.querySelectorAll('.slide-btn.left');
const rightBtnAll = document.querySelectorAll('.slide-btn.right');

slider.forEach((slider, index) => {
    const leftBtn = leftBtnAll[index];
    const rightBtn =  rightBtnAll[index];

    leftBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -300, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
        slider.scrollBy({ left: 300, behavior: 'smooth' });
    });
});



const volume = document.getElementById('volume');
const icon = volume.querySelector('i');

volume.addEventListener('click', function() {
    if (icon.classList.contains('fa-volume-up')) {
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-volume-mute');
    } else {
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume-up');
    }
});