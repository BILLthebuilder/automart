const flagAd = document.getElementsByTagName('button');

for (let i = 0; i < flagAd.length; i++) {
    flagAd[i].addEventListener('click', e => {
        e.preventDefault();
        alert('ad successfully flagged');
        return;
    });
};
