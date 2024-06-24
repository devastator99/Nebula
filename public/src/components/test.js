import axios from "axios";

const api = `https://api.dicebear.com/9.x/adventurer/svg?seed=`;


const randomNumber = Math.floor(Math.random() * 101);

const image = await axios.get(`${api}${randomNumber}`);

console.log

