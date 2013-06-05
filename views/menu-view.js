MenuView = Backbone.View.extend({
  tagName: 'div',
  className: 'menu-view',

  events: {
    'click .table-button': 'table',
    'click .thumbnail-button': 'thumbnail'
  },

  initialize: function(){
    menuTemplate = _.template($('#menu-template').html())
    thumbnailTemplate = _.template($('#thumbnail-template').html())
    tableTemplate = _.template($('#table-template').html())
    studentTemplate = _.template($('#student-template').html())

    this.render();
    $('body').prepend(this.$el);

    aprClass.each(function(student){  
      new TableView ({
        model: student
      });
    });

  },

  render: function(){
    this.$el.html(menuTemplate());
  },

  table: function() {
    $('table').show()
    $('.thumbnail-view').html('')
    $('.table-view').html('')

    aprClass.each(function(student){  
      new TableView ({
        model: student
      });
    });
  },

  thumbnail: function(){
    $('table').hide()
    $('.table-view').html('')
    $('.thumbnail-view').html('')

    aprClass.each(function(student){  
      new ThumbnailView ({
        model: student
      });
    });
  }
});

$(document).ready(function(){
    new MenuView();
});


