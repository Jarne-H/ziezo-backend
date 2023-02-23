const { Router } = require("express");
const { MessageController } = require("./message.controller");

class MessageRoutes {
    controller = new MessageController();
    router = Router();

    constructor() {
        this.initRoutes();
    }

    initRoutes() {
        this.router.get("/", this.controller.getMessages);
        this.router.get("/:id", this.controller.getMessageByID);
        this.router.post("/", this.controller.createMessage);
        this.router.put("/:id", this.controller.updateMessage);
        this.router.delete("/:id", this.controller.deleteMessage);
    }
}

module.exports = {
    MessageRoutes,
};
