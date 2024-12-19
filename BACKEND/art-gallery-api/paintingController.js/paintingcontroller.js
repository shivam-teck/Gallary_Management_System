let paintings = []; // Temporary in-memory array to store paintings

// GET all paintings
exports.getAllPaintings = (req, res) => {
    res.status(200).json({
        success: true,
        data: paintings
    });
};

// POST: Add a new painting
exports.createPainting = (req, res) => {
    const { title, artistId, year, style, price } = req.body;
    if (!title || !artistId || !year || !style || !price) {
        return res.status(400).json({
            success: false,
            message: "All fields are required!"
        });
    }

    const newPainting = {
        id: paintings.length + 1,
        title,
        artistId,
        year,
        style,
        price
    };
    paintings.push(newPainting);

    res.status(201).json({
        success: true,
        data: newPainting
    });
};
