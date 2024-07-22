const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Endpoint to get the list of files
app.get('/files', (req, res) => {
    const filesDir = path.join(__dirname, 'files');

    fs.readdir(filesDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to read files' });
        }
        res.status(200).json(files);
    });
});

// Endpoint to get the content of a specific file
app.get('/file/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'files', filename);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return res.status(404).send('File not found');
            } else {
                return res.status(500).send('Error reading file');
            }
        }
        res.status(200).send(data);
    });
});

// Handle undefined routes
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
