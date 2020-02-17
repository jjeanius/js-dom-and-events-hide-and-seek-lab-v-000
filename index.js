function getFirstSelector(selector){
  return document.querySelector(selector)
};

function nestedTarget() {
  return document.querySelector('#nested .target')
};

function increaseRankBy(n){
  const rank = document.querySelectorAll('.ranked-list')

for(let i=0, l = rank.length; i < l; i++){
  let children = rank[i].children

for (let j=0, k=children.length; j<k; j++){
  children[j].innerHTML = parseInt(children[j].innerHTML)+ n
    }
  }
}

function deepestChild(){
  let grandNode = document.getElementById('grand-node')
  let deepNode = grandNode.children[0]

  while (deepNode){
    grandNode = deepNode
    deepNode = grandNode.children[0]
  }
  return grandNode
}
