let axios = require("axios")

let getMeme = async function (req, res) {

    try {
        let memeId=req.query.template_id
        let text0=req.query.text0
        let text1=req.query.text1
        let userName=req.query.username
        let password=req.query.password
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&username=${userName}&password=${password}`
        }
        let result = await axios(options);
        console.log(result)
        res.status(200).send({ msg: result.data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message, status :false })
    }
}
module.exports.getMeme=getMeme