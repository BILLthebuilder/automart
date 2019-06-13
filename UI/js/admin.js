const deleteAd = document.getElementsByTagName('button');

for (let i = 0; i < deleteAd.length; i++) {
    deleteAd[i].addEventListener('click', e => {
        e.preventDefault();
        alert('ad successfully deleted');
        return;
    });
};
