var app = new Vue({
  el: '#app',
  data: {
    message: 'Click on me',
    messageError: 'Something went wrong!'
  },
  delay: 1000,
  mounted: function () {
    var tl = new TimelineMax();

    tl.from(document.getElementById('message'), 1, {
      ease: Power3.easeOut,
      opacity: 0
    }, 0)
  },
  beforeUpdate: function () {
    var tl = new TimelineMax();

    tl.to(document.getElementById('message'), 1, {
      ease: Power3.easeOut,
      opacity: 0
    }, 0)
  },
  updated: function () {
    var tl = new TimelineMax();

    tl.to(document.getElementById('message'), 1, {
      ease: Power3.easeOut,
      opacity: 1,
      color: 'red'
    }, 1)
  }
})