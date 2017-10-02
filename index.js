function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}


function increaseRankBy(n) {
  var lis = document.querySelectorAll('.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n

  }
}

function deepestChild() {
  var lis = document.querySelector('div#grand-node')
  var newLis = document.querySelector('div#grand-node div')
  var startingPoint = document.getElementById('grand-node')


  lis = startingPoint.querySelectorAll('div')

  debugger;
  for (let i = 0; i < lis.length; i++) {

    var currentLis = lis[i]
    newLis = lis[i].querySelector('div')

    if (newLis == undefined) {
      return lis[i]
    }


  }

  }
