// ==UserScript==
// @name			Odoo Image Enlarger
// @name:tr			Odoo Görsel Büyütücü
// @namespace		https://github.com/sipsak
// @version			1.1
// @description		If the URLs loaded in Odoo ERP include the field "field=image_128", replace it with "field=image_1920"
// @description:tr	Odoo'da yüklenen URL'lerde "field=image_128" diye bir alan geçiyorsa bunu "field=image_1920" olarak değiştirir
// @author			Burak Şipşak
// @match			https://bskhvac.odoo.com/*
// @grant			none
// @icon			https://raw.githubusercontent.com/sipsak/odoo-image-enlarger/refs/heads/main/icon.png
// @updateURL		https://raw.githubusercontent.com/sipsak/odoo-image-enlarger/refs/heads/main/Odoo-Image-Enlarger.js
// @downloadURL		https://raw.githubusercontent.com/sipsak/odoo-image-enlarger/refs/heads/main/Odoo-Image-Enlarger.js
// ==/UserScript==

(function() {
    'use strict';

    // Görsel URL'sini güncelleme fonksiyonu
    function updateImageSrc() {
        const images = document.querySelectorAll('img.img.img-fluid');
        images.forEach(img => {
            if (img.src.includes("field=image_128")) {
                const newSrc = img.src.replace("field=image_128", "field=image_1920");
                console.log(`URL değiştirildi: ${img.src} -> ${newSrc}`);
                img.src = newSrc; // URL'yi güncelle
            }
        });
    }

    // Sayfa tamamen yüklendiğinde bir kez çalıştır
    window.addEventListener('load', () => {
        console.log("Sayfa yüklendi, URL değiştiriliyor...");
        updateImageSrc();
    });

    // Dinamik değişiklikleri izlemek için MutationObserver
    const observer = new MutationObserver(() => {
        console.log("DOM değişikliği algılandı, URL değişikliği uygulanıyor...");
        updateImageSrc();
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
