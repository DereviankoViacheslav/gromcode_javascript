function requestUserData(userId, callback) {
    setTimeout(() => {
        // if (userId === 'broken') {
        //     callback(null, 'Failed to load user data');
        //     return;
        // } else {
            callback({
                name: 'John',
                age: 17,
                userId,
                email: 'userid777@example.com',
            });
        // }
    }, Math.floor(Math.random() * 3 + 1) * 1000);
};

export { requestUserData };
