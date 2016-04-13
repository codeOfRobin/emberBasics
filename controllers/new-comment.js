Blogger.NewCommentController = Ember.Controller.extend({
    needs: ['post'],
    actions:
    {
        save:function()
        {
            var newComment = this.store.createRecord('comment',{
                text:this.get('text')
            })
            newComment.save();
            var post = this.get('controllers.post.model')
            post.get('comments').pushObject(newComment)
            this.transitionToRoute('posts')
        }
    }
})
