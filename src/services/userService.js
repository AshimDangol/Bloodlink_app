const { User } = require('../models/User');

async function listUsers() {
	return User.find().lean();
}

async function getUserById(userId) {
	return User.findById(userId).lean();
}

async function createUser({ name, email, passwordHash }) {
	const user = await User.create({ name, email, passwordHash });
	return user.toObject();
}

async function updateUser(userId, updates) {
	const updated = await User.findByIdAndUpdate(userId, updates, { new: true }).lean();
	return updated;
}

async function deleteUser(userId) {
	await User.findByIdAndDelete(userId);
	return { deleted: true };
}

module.exports = { listUsers, getUserById, createUser, updateUser, deleteUser };


