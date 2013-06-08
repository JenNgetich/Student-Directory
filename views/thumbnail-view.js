//  ___  _ _  _ _  _   _  ___ _  _   _   _  _     _ _  _  ___  _ _ _ 
// |_ _|| U || | || \_/ || o ) \| | / \ | || |   | | || || __|| | | |
//  | | |   || U || \_/ || o \ \\ || o || || |_  | V || || _| | V V |
//  |_| |_n_||___||_| |_||___/_|\_||_n_||_||___|  \_/ |_||___| \_n_/ 


// Define Thumbnail View Constructor
 ThumbnailView = Backbone.View.extend({

  // Wrap the View in a div w/ class thumbnail-view
  tagName: 'div',
  className: 'thumbnail-view',


   // Listen for a click on the icon
  events: {
    'click .icon': 'details',
  },


   // Render & Append the view when it is instantiated
  initialize: function(){

    //Show Appropriate Link to alternate view
    $('.table-button').show();
    $('.thumbnail-button').hide();

    this.render();
    $('.class-th').prepend(this.$el)

  // If a student is added make a new view
    this.listenTo(aprClass,'add', function(student){
      new ThumbnailView({
        model: student
      });
    });
  },


  // When rendering, Pass in the Student Template
  render: function(){
    this.$el.html(thumbnailTemplate(this.model.attributes));
  },


  // Clear Page and Instatiate Student view when icon is clicked 
  details: function() {
    console.log('you clicked the icon')
    $('.class-th').html('')
    $('.menu-view').html('')

    //Instatiate view with model that was clicked
    new StudentViewTh({
      model: this.model
    });
  }

});
