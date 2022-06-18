
let axios = require("axios")

let getSortcitiestemp=async function(req, res){
    try{ 
        let cities = ['bengaluru','Mumbai','kolkata','chennai','London','Moscow']
        let Objarray = []

        for(i=0 ; i<cities.length; i++)
        {
            let obj = {city: cities[i]}
            let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=1002beaac8eac33af1c729304af41ee1`)
            console.log(res.data.main.temp)

            obj.temp = res.data.main.temp
            Objarray.push(obj)
        }
        let sorted=Objarray.sort( function(a,b){ return a.temp - b.temp})  //d
        res.status(200).send({ status :true,data: sorted})

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



module.exports.getSortcitiestemp=getSortcitiestemp
// let memes = async (req, res)
// {
//     let image = {
//         method: "post",
//         url: "https://api.imgflip.com/caption_image"
//     }
// }
// res.send(data: result.data)
