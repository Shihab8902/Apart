const houseCollection = require("../../model/houseModel");

const getHouses = async (req, res) => {
    try {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const availability = req.query.availability;
        const city = req.query.city;
        const size = req.query.size;
        const bedRooms = req.query.bedRooms;
        const bathrooms = req.query.bathrooms;
        const minRent = req.query.minRent;
        const maxRent = req.query.maxRent;


        //Show only available houses
        if (availability === "true") {
            const result = await houseCollection.find({ availabilityDate: "Currently Available" }).limit(limit).skip(limit * page).sort({ listedOn: -1 });
            return res.status(200).send(result);
        }

        //Show data based on city
        if (city) {
            switch (city) {
                case "any": {
                    const result = await houseCollection.find().limit(limit).skip(limit * page).sort({ listedOn: -1 });
                    return res.status(200).send(result);
                }
                case "dhaka": {
                    const result = await houseCollection.find({ city: new RegExp("dhaka", 'i') }).sort({ listedOn: -1 });
                    return res.status(200).send(result);
                }
                case "chittagong": {
                    const result = await houseCollection.find({ city: new RegExp("chittagong", 'i') }).sort({ listedOn: -1 });
                    return res.status(200).send(result);
                }
                case "sylhet": {
                    const result = await houseCollection.find({ city: new RegExp("sylhet", 'i') }).sort({ listedOn: -1 });
                    return res.status(200).send(result);
                }
                case "chandpur": {
                    const result = await houseCollection.find({ city: new RegExp("chandpur", 'i') }).sort({ listedOn: -1 });
                    return res.status(200).send(result);
                }
            }
        }

        //Show data based on room size
        if (size) {
            switch (size) {
                case "any": {
                    const result = await houseCollection.find().limit(limit).skip(limit * page).sort({ listedOn: -1 });
                    return res.status(200).send(result);
                }
                case "small": {
                    const result = await houseCollection.find({ roomSize: new RegExp("small", 'i') }).limit(limit).skip(limit * page);
                    return res.status(200).send(result);
                }
                case "medium": {
                    const result = await houseCollection.find({ roomSize: new RegExp("medium", 'i') }).limit(limit).skip(limit * page);
                    return res.status(200).send(result);
                }
                case "large": {
                    const result = await houseCollection.find({ roomSize: new RegExp("large", 'i') }).limit(limit).skip(limit * page);
                    return res.status(200).send(result);
                }
                case "extra-large": {
                    const result = await houseCollection.find({ roomSize: new RegExp("extra-large", 'i') }).limit(limit).skip(limit * page);
                    return res.status(200).send(result);
                }
            }
        }

        //Show data based on bedrooms
        if (bedRooms) {
            switch (bedRooms) {
                case "any": {
                    const result = await houseCollection.find().limit(limit).skip(limit * page).sort({ listedOn: -1 });
                    return res.status(200).send(result);
                }
                case "0, 2": {
                    const ranges = bedRooms?.split(",");
                    const result = await houseCollection.find({ bedrooms: { $gte: parseInt(ranges[0]), $lte: parseInt(ranges[1]) } }).limit(limit).skip(limit * page).sort({ listedOn: -1 });
                    return res.status(200).send(result);
                }
                case "3, 5": {
                    const ranges = bedRooms?.split(",");
                    const result = await houseCollection.find({ bedrooms: { $gte: parseInt(ranges[0]), $lte: parseInt(ranges[1]) } }).limit(limit).skip(limit * page).sort({ listedOn: -1 });
                    return res.status(200).send(result);
                }
                case "5": {
                    const result = await houseCollection.find({ bedrooms: { $gte: 5 } }).limit(limit).skip(limit * page).sort({ listedOn: -1 });
                    return res.status(200).send(result);
                }

            }
        }

        //Show data based on bathrooms
        if (bathrooms) {
            switch (bathrooms) {
                case "any": {
                    const result = await houseCollection.find().limit(limit).skip(limit * page).sort({ listedOn: -1 });
                    return res.status(200).send(result);
                }
                case "0, 2": {
                    const ranges = bathrooms?.split(",");
                    const result = await houseCollection.find({ bathrooms: { $gte: parseInt(ranges[0]), $lte: parseInt(ranges[1]) } }).limit(limit).skip(limit * page).sort({ listedOn: -1 });
                    return res.status(200).send(result);
                }
                case "3, 5": {
                    const ranges = bathrooms?.split(",");
                    const result = await houseCollection.find({ bathrooms: { $gte: parseInt(ranges[0]), $lte: parseInt(ranges[1]) } }).limit(limit).skip(limit * page).sort({ listedOn: -1 });
                    return res.status(200).send(result);
                }
                case "5": {
                    const result = await houseCollection.find({ bathrooms: { $gte: 5 } }).limit(limit).skip(limit * page).sort({ listedOn: -1 });
                    return res.status(200).send(result);
                }

            }
        }



        //Show data based on rent
        if (parseInt(minRent) > 400 || parseInt(maxRent) < 12000) {
            const result = await houseCollection.find({ rentPerMonth: { $gte: parseInt(minRent), $lte: parseInt(maxRent) } }).limit(limit).skip(limit * page).sort({ listedOn: -1 });
            return res.status(200).send(result);
        }




        const result = await houseCollection.find().limit(limit).skip(limit * page).sort({ listedOn: -1 })
        res.status(200).send(result);
    }
    catch (error) {
        console.log(error);
    }
}



module.exports = getHouses;