//  __  ___  _ _  __  ___  _  _  ___   _ _  _  ___  _ _ _ 
// / _||_ _|| | ||  \| __|| \| ||_ _| | | || || __|| | | |
// \_ \ | | | U || o ) _| | \\ | | |  | V || || _| | V V |
// |__/ |_| |___||__/|___||_|\_| |_|   \_/ |_||___| \_n_/ 
                                                       
// (From Thumbnail View)


// Make a View Constructor
StudentViewTh = Backbone.View.extend({
  

  // Wrap the view in a div called studentview
  tagName: 'div',
  className: 'student-view',


  // Listen for a click on the back button
  events: {
    'click .back': 'back',
  },


  // Render & Append the view when it is instantiated
  initialize: function(){
    this.render();
    $('.student').append(this.$el)
  },


  // Pass in the Student Template
  render: function(){
    this.$el.html(studentTemplate(this.model.attributes));
  },


  // If Back is Clicked, clear Student View 
  back: function () {
    $('.student').html('')
    $('.menu').html('')

    // Instantiate Menu View, call Thumbnail function to Instatiate View
    var backMenu = new MenuView();
    backMenu.thumbnail()
  }
  
});