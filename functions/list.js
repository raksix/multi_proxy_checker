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

module.exports = {
    getWork,
    getNotWork,
    setWork,
    setNotWork
};
