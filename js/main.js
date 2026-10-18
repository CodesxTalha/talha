(function () {
    // Navbar burger menu
    var burger = document.getElementById('burger');
    var menu = document.getElementById('menu');

    if (burger && menu) {
        burger.addEventListener('click', function () {
            var open = burger.getAttribute('aria-expanded') !== 'true';
            burger.setAttribute('aria-expanded', open);
            menu.classList.toggle('open', open);
        });

        menu.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') {
                burger.setAttribute('aria-expanded', 'false');
                menu.classList.remove('open');
            }
        });
    }

    // Contact Modal
    var overlay = document.getElementById('overlay');
    var form = document.getElementById('form');
    var trigger = document.getElementById('trigger');
    var sendBtn = document.getElementById('sendBtn');
    var closeBtn = document.getElementById('close');

    if (overlay && form && trigger) {
        function openModal() {
            overlay.classList.add('open');
            overlay.setAttribute('aria-hidden', 'false');
            setTimeout(function () {
                if (form.elements.name) form.elements.name.focus();
            }, 200);
        }

        function closeModal() {
            overlay.classList.remove('open');
            overlay.setAttribute('aria-hidden', 'true');
            trigger.blur();
        }

        trigger.addEventListener('click', openModal);
        trigger.addEventListener('focus', openModal);
        if (sendBtn) sendBtn.addEventListener('click', openModal);
        if (closeBtn) closeBtn.addEventListener('click', closeModal);

        overlay.addEventListener('mousedown', function (e) {
            if (e.target === overlay) closeModal();
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeModal();
        });

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var f = form.elements;
            var body = 'Hi, I’m ' + f.name.value + ' (' + f.email.value + ').\n\n' + f.message.value;
            window.location.href = 'mailto:talhaxcodes@proton.me?subject=' + encodeURIComponent('Message from ' + f.name.value) + '&body=' + encodeURIComponent(body);
            form.reset();
            closeModal();
        });
    }

    // Dynamic Footer Domain
    var dom = document.getElementById('domain');
    var host = location.hostname.replace(/^www\./, '');
    if (dom && /^([a-z0-9-]+\.)+[a-z]{2,}$/i.test(host)) {
        dom.textContent = host;
    }
})();