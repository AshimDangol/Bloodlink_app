require('dotenv').config();

const express = require('express');
const { spawn } = require('child_process');
const { connectToDatabase } = require('./config/database');
const userRoutes = require('./routers/userRoutes');
const { notFound, errorHandler } = require('./middleware/error');

const app = express();

app.use(express.json());

// Basic health check
app.get('/health', (req, res) => {
	res.status(200).json({ status: 'ok' });
});

// API routes
app.use('/api/users', userRoutes);

// Root route
app.get('/', (req, res) => {
	res.send('Server is running');
});

// Fallthrough middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

async function start() {
	await connectToDatabase();
	app.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}`);

		const shouldOpen = String(process.env.OPEN_BROWSER || 'true').toLowerCase() !== 'false';
		if (shouldOpen) {
			const url = `http://localhost:${PORT}`;
			try {
				// Windows
				if (process.platform === 'win32') {
					spawn('cmd', ['/c', 'start', '', url], { stdio: 'ignore', shell: true, detached: true }).unref();
				// macOS
				} else if (process.platform === 'darwin') {
					spawn('open', [url], { stdio: 'ignore', detached: true }).unref();
				// Linux
				} else {
					spawn('xdg-open', [url], { stdio: 'ignore', detached: true }).unref();
				}
			} catch (err) {
				console.warn('Could not open browser automatically:', err.message);
			}
		}
	});
}

start();


