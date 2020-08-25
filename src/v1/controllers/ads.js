import Joi from '@hapi/joi';
import Ads from '../models/ads';
import { adSchema } from '../helpers/validations';

const AdvertHandler = {
    create(req, res) {
        const result = Joi.validate(req.body, adSchema);

        if (result.error) {
            return res.status(400).json({
                error: result.error.details[0].message
            });
        }
        const ad = Ads.create(req.body);
        return res.status(201).json({
            Data: ad
        });
    },
    getAll(req, res) {
        const ads = Ads.getAllAds();
        return res.status(200).json({
            Data: ads
        });
    },
    viewSpecific(req, res) {
        const specific = Ads.getSpecific(parseInt(req.params.id, 10));
        return res.status(200).json({
            Data: specific
        });
    },
    deleteSpecific(req, res) {
        const deleted = Ads.deleteSpecificAd(parseInt(req.params.id, 10));
        return res.status(200).json({
            Data: 'Car Ad successfully deleted',
            deleted
        });
    }
};

export default AdvertHandler;
