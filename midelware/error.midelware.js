module.exports = (err, req, res, next) => {
    console.log(err)
    const hendlerError = {
        error: true,
        url: req.url,
        method: req.method
    }

    if (err.name == 'JshonWebTokenError') {
        return res.status(400).json({ message: 'authoentication failed' })
    }

    if (err.code && err.message) {
        return res.status(400).json({ ...hendlerError, message: err.message })
    }

    return res.status(500).json({ ...hendlerError, message: 'Internet server Error', error: err.errors })
}