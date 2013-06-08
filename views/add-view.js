// For adding and updating students
// Define Update View Constructor
AddView = Backbone.View.extend({

  //Wrap view in div w/ class update-view
  tagName: 'div',
  className: 'update-view',

  events: {
    'click .save': 'save',
    'click .cancel': 'cancel'
  },

  initialize: function(){

    this.render();
    $('.add-new').append(this.$el);
  },

  render: function(){
    this.$el.html(updateTemplate());
  },

  save: function(){
    $('.add-button').show()

    if (this.$el.find('.photo-input').val() == ''){
      this.$el.find('.photo-input').val('http://designyoutrust.com/wp-content/uploads7/designfetishnophotofacebook1.jpg')
    }

    aprClass.add([{
      first: this.$el.find('.first-input').val(),
      last: this.$el.find('.last-input').val(),
      github: this.$el.find('.github-input').val(),
      email: this.$el.find('.email-input').val(),
      photo: this.$el.find('.photo-input').val(),
    }])
    
    $('.add-new').html('')
    $('.add-button').show()
    $('.table').html('')
    $('.class-th').html('')
    $('.menu-view').html('')

    alert('Added new student')

    new MenuView();
  }
  

  
})