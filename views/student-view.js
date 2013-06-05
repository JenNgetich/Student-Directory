StudentView = Backbone.View.extend({
  tagName: 'div',
  className: 'student-view',

  events: {
    'click .back': 'back',
  },

  initialize: function(){
    
    console.log('student view initialized')
    

    // this.listenTo(aprClass,'add', function(student){
    //   console.log('Got a Student');
    //   new TableView({
    //     model: student
    //   });
    // });

    this.render();

    $('body').append(this.$el)
    console.log('view appended')
  },

  render: function(){
    this.$el.html(studentTemplate(this.model.attributes));
  },

  back: function () {
    $('.student-view').html('')

    $('.thumbnail-view').html(thumbnailTemplate())
     }

});