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

async function printMessagesWithUsersAndConversations() {
	const messages = await message.findAll(
		{
			include: [user, conversation]
		}
	)
	console.log(messages.map(message => message.get({ plain: true })))
}

async function printConversations() {
	const conversations = await conversation.findAll({ include: [user, message] })
	const planeConversations = await conversations.map(conversation => conversation.get({ plain: true }))
	console.log('users', planeConversations.map(conversation => conversation.users))
	console.log('messages', planeConversations.map(conversation => conversation.messages))

}


printConversations()