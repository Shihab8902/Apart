const houseRoutes = require("./houseRoutes");
const authentication = require("./authentication");
const bookingRoutes = require("./bookingRoutes");


const useRoutes = (app) => {
    app.use(houseRoutes);
    app.use(authentication);
    app.use(bookingRoutes);
}


module.exports = useRoutes;