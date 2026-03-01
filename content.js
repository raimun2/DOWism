function applyViernistaOrder() {
    const headers = document.querySelectorAll('[role="columnheader"]');
    if(headers.length >= 7) {
        headers.forEach(header => {
            const text = header.textContent.toLowerCase();
            if (text.includes('fri') || text.includes('vie')) header.style.order = 1;
            else if (text.includes('sat') || text.includes('sáb')) header.style.order = 2;
            else if (text.includes('sun') || text.includes('dom')) header.style.order = 3;
            else if (text.includes('mon') || text.includes('lun')) header.style.order = 4;
            else if (text.includes('tue') || text.includes('mar')) header.style.order = 5;
            else if (text.includes('wed') || text.includes('mié')) header.style.order = 6;
            else if (text.includes('thu') || text.includes('jue')) header.style.order = 7;

            if (header.parentElement) {
                header.parentElement.style.display = 'flex';
                header.parentElement.style.width = '100%';
            }
        });
    }
}
setInterval(applyViernistaOrder, 2000);
