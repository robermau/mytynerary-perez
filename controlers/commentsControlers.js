const itinerary = require('../models/itinerary');

const CommentaryControlers = {


    addComment: async (req, res) => {
        const {itineraryId,comment} = req.body.comment
        const user = req.user._id
        try {
            const newComment = await itinerary.findOneAndUpdate({_id:itineraryId}, {$push: {comments: {comment: comment, userid: user}}}, {new: true}).populate("comments.userid")
            res.json({ success: true, response:{newComment}, message:"Thanks for leave your comments" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Something we wrong , try in a few minutes" })
        }

    },
    modifyComment: async (req, res) => {
        const { commentId, comment } = req.body.comment // id del comentario y comentario nuevo

        try {
            const newComment = await itinerary.findOneAndUpdate({ 'comments._id': commentId }, { $set: { 'comments.$.comment': comment } }, { new: true })
            // console.log(newComment)
            res.json({ success: true, response: { newComment }, messagge: 'Modified comment' })

        }
        catch (error) {
            console.log(error)
            res.json({ success: true, messagge: 'Algo a salido mal intentalo en unos minutos' })
        }

    },
    deleteComment: async (req, res) => {

        const commentId = req.params.id
        // const user = req.user._id
        try {
            const deleteComment = await itinerary.findOneAndUpdate({ "comments._id": commentId }, { $pull: { comment: { _id: commentId } } }, { new: true })
           console.log(deleteComment)
            res.json({
                success: true,
                response: { deleteComment },
                message: "The comment has been deleted"
            })
        }
        catch (error) {
            console.log(error)
            res.json({
                success: false,
                message: "Please, try again!"
            })
        }
    },



}
module.exports = CommentaryControlers