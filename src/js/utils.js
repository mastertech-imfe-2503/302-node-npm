export const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const add = (a, b) => {
    return a + b;
};

export default add;