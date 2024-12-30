let work = [];
let notwork = [];

const getWork = () => work;
const getNotWork = () => notwork;

const setWork = (newWork) => {
    work = newWork;
};

const setNotWork = (newNotWork) => {
    notwork = newNotWork;
};

const addWork = (proxy) => {
    work.push(proxy);
};

const addNotWork = (proxy) => {
    notwork.push(proxy);
};

module.exports = {
    getWork,
    getNotWork,
    setWork,
    setNotWork,
    addWork,
    addNotWork
};
