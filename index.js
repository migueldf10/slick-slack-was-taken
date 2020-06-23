const cors = require("cors");
const express = require("express");
const router = express.Router()
const app = express();
const PORT = process.env.PORT || 4000;
const Conversation = require("./models").conversation;
const User = require("./models").user;
const Message = require("./models").message;
const Conversation_user = require("./models").conversation_user
const jsonParser = express.json();
const corsMiddleware = cors();


app.use(corsMiddleware);
app.use(jsonParser);

app.post("/users", async (req, res, next) => {
	try {
		console.log(req.body)
		const email = req.body.email;
		if (!email || email === " ") {
			res.status(400).send("Must provide an email address");
		} else {
			const user = await User.create(req.body);
			res.json(user);
		}
	} catch (error) {
		console.log(error)
		next(error);
	}
});
app.get("/users", async (req, res, next) => {
	try {
		console.log(req.body)
		const users = await User.findAll();
		res.json(users);

	} catch (error) {
		console.log(error)
		next(error);
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
app.post("/conversations", async (req, res, next) => {
	try {
		console.log(req.body)
		if (req.body && req.body.title) {
			const conversationTitle = req.body.title
			const usersInConversation = req.body.participants
			const conversation = await Conversation.create({ title: conversationTitle });
			usersInConversation.map(async (user) =>
				await Conversation_user.create({ userId: user.id, conversationId: conversation.id }))
			res.send({ conversation, usersInConversation })
		} else {
			res.status(400).send("Make sure you have a valid name and valid users");
		}
	} catch (e) {
		console.log(e)
		next(e);
	}
});

app.listen(PORT, () => console.log(`Eureka, is Alive!! listening on port http://localhost:${PORT}`))