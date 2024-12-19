let artists = []; // Temporary in-memory storage

// Get all artists
exports.getAllArtists = (req, res) => {
    res.status(200).json({
        success: true,
        data: artists
    });
};

// Add a new artist
exports.createArtist = (req, res) => {
    const { name, age, style } = req.body;

    if (!name || !age || !style) {
        return res.status(400).json({
            success: false,
            message: 'All fields (name, age, style) are required!'
        });
    }

    const newArtist = {
        id: artists.length + 1,
        name,
        age,
        style
    };

    artists.push(newArtist);

    res.status(201).json({
        success: true,
        data: newArtist
    });
};

// Get an artist by ID
exports.getArtistById = (req, res) => {
    const artist = artists.find(a => a.id == req.params.id);

    if (!artist) {
        return res.status(404).json({
            success: false,
            message: 'Artist not found!'
        });
    }

    res.status(200).json({
        success: true,
        data: artist
    });
};

// Update an artist by ID
exports.updateArtist = (req, res) => {
    const artist = artists.find(a => a.id == req.params.id);

    if (!artist) {
        return res.status(404).json({
            success: false,
            message: 'Artist not found!'
        });
    }

    const { name, age, style } = req.body;

    artist.name = name || artist.name;
    artist.age = age || artist.age;
    artist.style = style || artist.style;

    res.status(200).json({
        success: true,
        data: artist
    });
};

// Delete an artist by ID
exports.deleteArtist = (req, res) => {
    const index = artists.findIndex(a => a.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: 'Artist not found!'
        });
    }

    artists.splice(index, 1);

    res.status(200).json({
        success: true,
        message: 'Artist deleted successfully!'
    });
};
