const fs = require('fs').promises;

const filename = 'src/talker.json';

const readContent = async () => {
    const file = await fs.readFile(filename, 'utf8');
    return JSON.parse(file);
};

const getTalkerById = async (id) => {
    const file = await fs.readFile(filename, 'utf8');
    return JSON.parse(file)[id - 1];
};

module.exports = {
    readContent,
    getTalkerById,
};
