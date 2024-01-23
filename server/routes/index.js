const houseRoutes = require("./houseRoutes");


const useRoutes = (app) => {
    app.use(houseRoutes);
}


module.exports = useRoutes;