let { MessageRoutes } = require("./components/message/message.routes");
/**
 * Init Express REST routes
 *
 * @param {Express} app
 * @returns {void}
 */
function initiateRouter(app) {
    const prefix = "/api/v1";

    app.get("/", (req, res) => {
        res.sendStatus(200);
    });
    app.get(prefix, (req, res) => res.send("PING"));

    app.use(`${prefix}/messages`, new MessageRoutes().router);
}
module.exports = {
    initiateRouter,
};
