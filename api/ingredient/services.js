const {Ingredient} = require('./model')

exports.getAll = async()=>Ingredient.find({})

exports.getId = async({id})=>Ingredient.findOne({_id:id})

exports.new = async({name,quantity})=>{
    let ingredient = new Ingredient({
        name
    })
    return await ingredient.save()
}