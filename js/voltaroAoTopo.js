function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function () {
    var btnVoltarAoTopo = document.getElementById('btnVoltarAoTopo');
    if (window.scrollY > 100) {
        btnVoltarAoTopo.style.display = 'block';
    } else {
        btnVoltarAoTopo.style.display = 'none';
    }
});

btnVoltarAoTopo.addEventListener('click', scrollToTop);
