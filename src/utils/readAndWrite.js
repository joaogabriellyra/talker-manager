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

const changeTalker = async (id, { name, age, talk }) => {
    const data = await readContent();
    data[id - 1] = {
        name,
        age,
        id: Number(id),
        talk,
    };
    await fs.writeFile(filename, JSON.stringify(data));
    return data[id - 1];
};

const deleteTalker = async (id) => {
    const data = await readContent();
    const newData = data.filter((_, index) => index !== id - 1);
    console.log(newData);
    await fs.writeFile(filename, JSON.stringify(newData));
};

const getTalkerByName = async (name) => {
    const data = await readContent();
    const newData = data.filter((talker) => talker.name.includes(name));
    return newData;
};

module.exports = {
    readContent,
    getTalkerById,
    writeTalker,
    changeTalker,
    deleteTalker,
    getTalkerByName,
};
