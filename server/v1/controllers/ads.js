import Ads from '../models/ads';

const AdvertHandler = {
    create(req, res) {
        const ad = Ads.create(req.body);
        return res.status(201).json({
            status: 201,
            Data: ad
        });
    },
    getAll(req, res) {
        const ads = Ads.getAllAds();
        return res.status(200).json({
            status: 200,
            Data: ads
        });
    },
    viewSpecific(req, res) {
        const specific = Ads.getSpecific(parseInt(req.params.id, 10));
        return res.status(200).json({
            status: 200,
            Data: specific
        });
    }
};

export default AdvertHandler;
