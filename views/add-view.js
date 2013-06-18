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
    this.$el.html(addTemplate());
  },

  save: function(){
    $('.add-button').show()

    if (this.$el.find('.photo-input').val() == ''){
      this.$el.find('.photo-input').val('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQdUtHnZ2NbfZBQI6RGcaA6LZDEJ-VQ0cJoropCetw9JlZ2PyKS')
    }

    if (this.$el.find('.first-input').val() == ''){
      this.$el.find('.first-input').val('Unknown')
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
  },

  cancel: function(){
    $('.add-new').html('')
    $('.add-button').show()
    $('.table').html('')
    $('.class-th').html('')
    $('.menu-view').html('')

    new MenuView();
  }
  

  
})