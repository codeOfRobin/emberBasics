Blogger.ContactController = Ember.Controller.extend({
    messageSent:false,
    actions : {
        sendMessage: function()
        {
            prompt("Type in your message now")
            this.set('messageSent',true)
            this.set('confirmationNo',Math.round(Math.random()*10000))
        }
    }
})
