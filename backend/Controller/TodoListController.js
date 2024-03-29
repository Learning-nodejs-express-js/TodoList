const todoListModel=require("../Model/TodoListModel")

const GetTodoList=async(req,res)=>{
    try{
        const tasks=await todoListModel.find({user_id:req.user._id})
        res.status(200).json(tasks)
        
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}



const PostTodoList=async(req,res)=>{
    try{
        const task=await todoListModel.create({...req.body,user_id:req.user._id})
        res.status(200).json(task)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

const DeleteTodoList=async(req,res)=>{
    
    try{
        const task=await todoListModel.deleteOne({_id:req.params.id,user_id:req.user._id})
        res.status(200).json(task)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
    
}

const PatchTodoList=async(req,res)=>{
    try{
        const task=await todoListModel.replaceOne({_id:req.params.id,user_id:req.user._id},{...req.body,user_id:req.user._id})
        res.status(200).json(task)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports={GetTodoList,PostTodoList,DeleteTodoList,PatchTodoList}