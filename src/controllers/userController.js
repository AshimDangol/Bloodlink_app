const asyncHandler = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
const userService = require('../services/userService');

exports.list = asyncHandler(async (req, res) => {
	const users = await userService.listUsers();
	res.json(users);
});

exports.getById = asyncHandler(async (req, res) => {
	const user = await userService.getUserById(req.params.id);
	if (!user) return res.status(404).json({ message: 'User not found' });
	res.json(user);
});

exports.create = asyncHandler(async (req, res) => {
	const user = await userService.createUser(req.body);
	res.status(201).json(user);
});

exports.update = asyncHandler(async (req, res) => {
	const updated = await userService.updateUser(req.params.id, req.body);
	if (!updated) return res.status(404).json({ message: 'User not found' });
	res.json(updated);
});

exports.remove = asyncHandler(async (req, res) => {
	const result = await userService.deleteUser(req.params.id);
	res.json(result);
});


