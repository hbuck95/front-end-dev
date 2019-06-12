const aCondition = true;

const createPromise = new Promise(
    function (resolve, reject) {
        if (aCondition) {
            const user = {
                name: 'Bert',
                email: 'bert@gmail.com'
            };
            resolve(user);
        } else {
            const reason = new Error('Rejected');
            reject(reason);
        }
    }
);

const consumePromise = function () {
    createPromise
        .then((user) => {
            console.log(user);
        })
        .catch(function (error) {
            console.log(error.message);
        });
};
