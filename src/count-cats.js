export default function countCats( matrix ) {
let cats=0
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            if(matrix[i][j] === "^^"){
                cats++
            }
        }
    }
    return cats
}
