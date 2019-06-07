import Ads from '../models/ads';

const AdvertHandler = {
    create(req, res) {
        const ad = Ads.create(req.body);
        return res.status(201).json({
            status: 201,
            Data: ad
        });
    }
};

export default AdvertHandler;
