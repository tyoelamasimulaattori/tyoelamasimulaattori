var page = require('page');

var indexView = document.getElementById('index-view'),
    discView = document.getElementById('disc-view');

var views = [indexView, discView];

function showView(view) {
  view.classList.add('modal--visible');

  views.forEach(function(v) {
    if(view !== v) {
      v.classList.remove('modal--visible');
    }
  });
}

page('/', function() {
  showView(indexView);
});

page('/disc', function() {
  showView(discView);
});

page();
