const errorHandler = (process, onError) => {
    try {
        process();
    } catch (err) {
        onError(err);
    }
}

module.exports = {
    errorHandler,
}