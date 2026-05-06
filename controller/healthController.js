export const healthCheck = (req, res) => {
    res.status(200).json({
        message:"hello",
        status: "ok"
    })
    console.log(req);
}