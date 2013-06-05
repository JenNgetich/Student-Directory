TableView = Backbone.View.extend({
  tagName: 'tr',
  className: 'table-view',

  events: {
    'click .icon': 'details',
  },

  initialize: function(){
    
    console.log('view initialized')
    

    this.listenTo(aprClass,'add', function(student){
      console.log('Got a Student');
      new TableView({
        model: student
      });
    });

    this.render();

    $('table').append(this.$el)
    console.log('view appended')
  },

  render: function(){
    this.$el.html(tableTemplate(this.model.attributes));
  },

  details: function () {
    $('table').hide()
    $('.table-view').html('')

    this.$el.html(studentTemplate(this.model.attributes))
    new StudentView ({
        model: student
    });
    
  }

});



aprClass.add([
   {
  first: 'Andrew',
  last: 'McIntee',
  github: 'andrwm',
  email: 'andrew@email.com',
  photo: 'https://secure.gravatar.com/avatar/3f628a01946bb72e992e4460b90a0f8b?s=420&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png'
  },

  {
  first: 'Lindsay',
  last: 'McDougall',
  github: 'codesprouter',
  email: 'Lindsay@email.com',
  photo: 'https://secure.gravatar.com/avatar/c0c7bde88d97510751d17072978703da?s=420&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png'
  },

  {
  first: 'Rasheeda',
  last: 'Mickel',
  github: 'gvldesigner',
  email: 'gvldesigner@hotmail.com',
  photo: 'http://glogp.gratitudelog.com/assets/users/11675/large/Obama_Rsm.jpg?1260118063'
  },


  {
  first: 'Enrique',
  last: 'Acevedo',
  github: 'ek1770',
  email: 'enrique.acevedo@gmail.com',
  photo: 'https://secure.gravatar.com/avatar/be253da919fce9659ca693b904ecd096?s=420&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png'
  },

  {
  first: 'Tyler',
  last: 'Sloan',
  email: 'tyler.g.sloan@gmail.com',
  github: 'tylersloan',
  photo: 'https://secure.gravatar.com/avatar/5f62f7b74ac94241581499c0361d21c4?s=420&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png'
  },

  {
  first: 'Daniel',
  last: 'Jeffords',
  email: 'daniel@email.com',
  github: 'djsra',
  photo: 'https://secure.gravatar.com/avatar/da8a5a98804afce7c9598230ac702868?s=420&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png'
  },
  
  {first: 'Jen',
  last: 'Ngetich',
  email: 'jennifer.ngetich@gmail.com',
  github: 'jcoden2',
  photo: 'https://secure.gravatar.com/avatar/5096a67e7d9a7aa6246c2f24807c2ea4?s=420&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png'
  }
])