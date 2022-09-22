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

const writeTalker = async (file) => {
    const data = await readContent();
    const { name, age, talk } = file;
    const talkerToBeInserted = {
        name,
        age, 
        id: data.length + 1,
        talk,
    };
    await data.push(talkerToBeInserted);
    await fs.writeFile(filename, JSON.stringify(data));
    return talkerToBeInserted;
};

module.exports = {
    readContent,
    getTalkerById,
    writeTalker,
};
