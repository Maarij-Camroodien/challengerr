function errorHandling(err, req, res, next) {
    if(err) {
        let status = err.status || 500
        res.json({
            satus,
            msg: "An error occutred; please try again later ."
        })
    }
    next()
}
module.exports = errorHandling



