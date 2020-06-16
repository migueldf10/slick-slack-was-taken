const { user, conversation, message } = require("./models");

// async function messagesWithUsers() {
// 	const users = await user.findAll({
// 		include: [message],
// 	});

// 	return users.map((user) => user.get({ plain: true }));
// }

// messagesWithUsers().then((messages) => console.log(messages));


async function printUsers() {
	const users = await user.findAll()
	console.log(users)
}

async function printMessages() {
	const messages = await message.findAll()
	console.log(messages)
}

printMessages()