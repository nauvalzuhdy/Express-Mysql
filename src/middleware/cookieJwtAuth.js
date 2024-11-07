const jwt = require("jsonwebtoken");

exports.cookieJwtAuth = (req, res, next) => {
    const user = req.cookies.token;
    try {
        //theimportant part
        const user = jwt.verify(token, process.env.MY_SECRET);
        req.user = user;
        next();
    } catch (err) {
        res.clearCookie("token");
        return res.redirect("/");
    }
};


