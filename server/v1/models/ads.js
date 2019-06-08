import moment from 'moment';

class Ads {
    constructor() {
        this.ads = [];
    }

    create(data) {
        const newAd = {
            id: this.ads.length + 1,
            owner: data.owner || '',
            email: data.email || '',
            createdOn: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
            manufacturer: data.manufacturer || '',
            model: data.model || '',
            price: 4.567,
            state: data.state || '',
            status: data.status || ''
        };
        this.ads.push(newAd);
        return newAd;
    }

    getAllAds() {
        return this.ads;
    }

    getSpecific(id) {
        const specific = this.ads.find(advert => advert.id === id);
        return specific;
    }
}
export default new Ads();
