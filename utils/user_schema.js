

const Joi = require('joi')

const userSchema = Joi.object({ 
    name: Joi.string().required(),
    gender: Joi.string()
})

// function validataTask(task){
//     return Joi.valid(task,taskSchema)
// }

module.exports = userSchema

