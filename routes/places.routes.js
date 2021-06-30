const router = require('express').Router();

const MAPS_KEY = process.env.MAPS_API_KEY;

const { idFormat } = require('../middleware');
const Place = require('./../models/place.model');

router.get('/', (req, res) => {
	Place
        .find()
		.then((places) => res.render('places/', { places, MAPS_KEY }))
		.catch((err) => console.error(err));
});

router.get('/new', (req, res) => {
	res.render('places/new-place');		
});

router.post('/new', (req, res) => {

    const { name, type } = req.body;

    const location = {
        type: 'Point',
        coordinates: [req.body.latitude, req.body.longitude]
    };

    if(!name || name.match(/^ +$/)) {
        res.render('places/new-place', { errorMsg: `You must introduce a name for the place` });
        return;
    }

	Place
        .findOne({ name })
		.then((place) => {

            if (place) {
				res.render('places/new-place', { place, errorMsg: `The place ${name} already exists` });
				return;
			}

			else return Place.create({ name, type, location });
		})
        .then(() => res.redirect('/places'))
		.catch((err) => console.log(err));
});

router.get('/:id', idFormat, (req, res) => {

	Place
        .findById(req.params.id)
		.then((place) => {

			if (!place) {
				res.redirect('/places');
				return;
			}

			res.render('places/detailed-place', { place });
		})
		.catch((err) => console.error(err));
});

router.get('/:id/edit', idFormat, (req, res) => {

	Place
        .findById(req.params.id)
        .then((place) => res.render('places/edit-place', { place }))
        .catch((err) => console.error(err));

});

router.post('/:id/edit', idFormat, (req, res) => {

	const { name, type } = req.body;
    const _id = req.params.id;

    const location = {
        type: 'Point',
        coordinates: [req.body.latitude, req.body.longitude]
    };

    if(!name || name.match(/^ +$/)) {
        console.log('Entrando');
        res.render('places/edit-place', { place: {_id, name, type, location}, errorMsg: `You must introduce a name for the place` });
        return;
    }

	Place
        .findOne({ name }) // First we check is name is available
		.then((place) => {
            
            if (place && place._id != req.params.id) {
				res.render('places/edit-place', { place, errorMsg: `The place ${name} already exists` });
				return;
			}

			else return Place.findByIdAndUpdate(req.params.id, { name, type, location });

		})
        .then(() => res.redirect('/places/' + req.params.id))
        .catch((err) => console.log(err));
});

router.post('/:id/delete', idFormat, (req, res) => {
	Place
        .findByIdAndDelete(req.params.id)
		.then(() => res.redirect('/places'))
		.catch((err) => console.error(err));
});

module.exports = router;