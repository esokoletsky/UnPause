


module.exports = function(app) {
/////////// Get Endpoints ///////////////////
    app.get('/', function (req, res) {
        res.render('index.html', {user:false});
    });

    app.get('/users', (req, res) => {
        User 
            .find()
            .then(users => {
                res.status(200).json({users: user.map(user = user.serialize())}
                );
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'something went terribly wrong' });
            });

    });

    app.get('/users/:id', (req, res) => {
        User
            .findById(req.params.id)
            .then(user => res.status(201).json(user.serialize()))
            .catch(err => {
                console.error(err);
                res.status(501).json({ error: 'something went terribly wrong'});
            });
    });





};