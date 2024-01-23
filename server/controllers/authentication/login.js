const bcrypt = require("bcrypt");
const userCollection = require("../../model/userModel");

const login = async (req, res) => {
    try {
        const data = req.body;
        const filter = { email: data.email };
        const requestedUser = await userCollection.findOne(filter);
        if (!requestedUser) {
            return res.status(200).send({ message: " No user was located with the provided credentials!" });
        }

        const isMatched = await bcrypt.compare(data.password, requestedUser?.password)

        if (isMatched) {
            const user = {
                name: requestedUser?.name,
                email: requestedUser?.email,
                phone: requestedUser?.phone,
                role: requestedUser?.role
            }
            return res.status(200).send(user);
        }

        res.status(200).send({ message: "Invalid login credentials!" });


    }
    catch (error) {
        console.log(error);
    }
}

module.exports = login;