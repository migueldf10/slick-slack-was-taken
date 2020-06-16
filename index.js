const cors = require("cors");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const Conversation = require("./models").conversation;
const User = require("./models").user;
const Message = require("./models").message;




app.use(cors());
app.use(express.json());

app.post("/users", async (req, res, next) => {
	try {
		const email = req.body.email;
		if (!email || email === " ") {
			res.status(400).send("Must provide an email address");
		} else {
			const user = await User.create(req.body);
			res.json(user);
		}
	} catch (e) {
		next(e);
	}
});

app.put("/users/:userId", async (req, res, next) => {
	try {
		const userId = parseInt(req.params.userId);
		const userToUpdate = await User.findByPk(userId);
		if (!userToUpdate) {
			res.status(404).send("User not found");
		} else {
			const updatedUser = await userToUpdate.update(req.body);
			res.json(updatedUser);
		}
	} catch (e) {
		next(e);
	}
});

app.get("/users/:userId", async (req, res, next) => {
	try {
		const userId = parseInt(req.params.userId);
		const userToReturn = await User.findByPk(userId);
		if (!userToReturn) {
			res.status(404).send("User not found");
		} else {

			res.json(userToReturn);
		}
	} catch (e) {
		next(e);
	}
});

app.delete("/users/:userId", async (req, res, next) => {
	try {
		const userId = parseInt(req.params.userId);
		const userToDelete = await User.findByPk(userId);
		if (!userToDelete) {
			res.status(404).send("User not found");
		} else {
			const deletedUser = await userToDelete.destroy();
			res.json(deletedUser);
		}
	} catch (e) {
		next(e);
	}
});

app.get("/users/:userId/conversations", async (req, res, next) => {
	try {
		const userId = parseInt(req.params.userId);
		const user = await User.findByPk(userId, {
			include: [Conversation],
		});
		if (user) {
			res.send(user);
		} else {
			res.status(404).send("User not found");
		}
	} catch (e) {
		next(e);
	}
});

app.get("/conversations/:conversationId", async (req, res, next) => {
	try {
		const conversationId = parseInt(req.params.conversationId);
		const conversation = await Conversation.findByPk(conversationId, {
			include: [Message, User],
		});
		if (conversation) {
			res.send(conversation);
		} else {
			res.status(404).send("Conversation not found");
		}
	} catch (e) {
		next(e);
	}
});

app.listen(PORT, () => console.log(`Eureka, is Alive!! listening on port http://localhost:${PORT}`))