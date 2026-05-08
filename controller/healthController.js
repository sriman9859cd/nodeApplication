

//API for healthCheck
export const healthCheck = async (req, res) => {
    res.status(200).json({
        status: "ok"
    })
}


