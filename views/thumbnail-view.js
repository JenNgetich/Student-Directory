ThumbnailView = Backbone.View.extend({
  tagName: 'div',
  className: 'thumbnail-view',

  events: {
    'click .icon': 'details',
    'hover .icon': 'hover'
  },

  initialize: function(){
    console.log('view initialized')

    this.listenTo(aprClass,'add', function(student){
      console.log('Got a Student');
      new ThumbnailView({
        model: student
      });
    });

    this.render();

    $('body').append(this.$el)
    console.log('view appended')
  },

  render: function(){
    this.$el.html(thumbnailTemplate(this.model.attributes));
  },

  hover: function () {
    console.log('hovering')
    $('.icon').css('border','2px solid black%');
  }
});
