const userModel = require("../model/userModel");

const user = {}

user.createUser = async(req, res) => {
    try{
       let data = req.body;
       let saveUser = await new userModel(data).save();
       if(!saveUser){
        res.status(200).send({
            success : false,
            message : "Error while saving user"
        })
       }
       else{
        res.status(200).send({
            success : true,
            message : "User Data Saved",
            data : saveUser
        })
       }
    }
    catch(err){
        res.status(400).send({
            success : false,
            message : "Something went wrong"
        })
    }
}

user.deleteUser = async(req, res) => {
    try{
        let data = req.query._id;
        let deleteUser = await userModel.findOneAndRemove(data)
        if(!deleteUser){
         res.status(200).send({
             message : "Error while deleting user"
         })
        }
        else{
         res.status(200).send({
             message : "User Deleted Successfully",
             data : deleteUser
         })
        }
    }
    catch(err){
        res.status(400).send({
            message : "Somethng went wrong"
        })
    }
}

user.getSingleUser = async(req, res) => {
    try{
        let data = req.query._id;
        let fetchUser = await userModel.findById(req.query._id);
        if(!fetchUser){
         res.status(200).send({
            success : true,
             message : "Error while saving user"
         })
        }
        else{
         res.status(200).send({
            success : true,
             message : "User Fetched Successfully",
             data : fetchUser
         })
        }
    }
    catch(err){
        res.status(400).send({
            success : false,
            message : "Something went wrong"
        })
    }
}

user.getAllUser = async(req, res) => {
    try{
        let fetchAllUser = await userModel.find();
        if(!fetchAllUser){
         res.status(200).send({
             success : true,
             message : "Error while fetching user"
         })
        }
        else{
         res.status(200).send({
             success : true,
             message : "All User Fetched Successfully",
             data : fetchAllUser
         })
        }
    }
    catch(err){
        res.status(400).send({
            success : false,
            message : "Something Went Wrong"
        })
    }
}

user.updateUser = async(req, res) => {
    try{
        let data = req.query._id;
        let criteria = req.body;
        let options = {upsert : true, new : true}
        let userUpdated = await userModel.findOneAndUpdate(data,criteria,options)
        if(!userUpdated){
         res.status(200).send({
             success : true,
             message : "Error while updated user"
         })
        }
        else{
         res.status(200).send({
            success : true,
             message : "User updated Successfully",
             data : userUpdated
         })
        }
    }
    catch(err){
        res.status(400).send({
            success : false,
            message : "Something went wrong"
        })
    }
}


module.exports = user;