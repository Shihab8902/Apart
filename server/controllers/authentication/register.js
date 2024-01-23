const bcrypt = require("bcrypt");
const userCollection = require("../../model/userModel");

const register = async (req, res) => {
    try {
        const data = req.body;
        const hashedPassword = await bcrypt.hash(data?.password, 10);

        const user = {
            name: data?.name,
            email: data?.email,
            phone: data?.phone,
            role: data?.role,
            password: hashedPassword
        }

        const isExist = await userCollection.findOne({ email: data?.email });

        if (!isExist) {
            const newUser = userCollection(user);
            const result = await newUser.save();
            return res.status(200).send({
                name: result?.name,
                email: result?.email,
                phone: result?.phone,
                role: result?.role
            });
        }

        res.status(209).send({ message: "User with these credentials is already Exist!" });

    }
    catch (error) {
        console.log(error);
    }
}

module.exports = register;