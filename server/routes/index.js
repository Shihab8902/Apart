const houseRoutes = require("./houseRoutes");
const authentication = require("./authentication");


const useRoutes = (app) => {
    app.use(houseRoutes);
    app.use(authentication);
}


module.exports = useRoutes;