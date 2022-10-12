const sport = ["football", "basketball","volleyball","tennis","bouncers"]
function sportPick (word, array){
    for (let i = 0; i< array.length; i++){
        if(word ==  array[i]){
            return console.log( array[i],'найден')
        }
    }
}
sportPick('football', sport)