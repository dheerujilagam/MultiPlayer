// function load(){
//     window.location.reload();
// }

// function setBoard() {
//     for (let r = 0; r < 8; r++) {
//         for (let c = 0; c < 8; c++) {
//             let newDiv = document.createElement('div');
//             newDiv.id = i + '-' + j;
//             newDiv.classList.add('box');
//             newDiv.addEventListener('click', select);
//             if (i == 0 || i == 1) newDiv.classList.add('white');
//             if (i == 6 || i == 7) newDiv.classList.add('black');
//             document.getElementById('board').appendChild(newDiv);
//         }
//     }
// }




let turn = 1;
window.onload = function() {
    createChessBoard();
    insertImage();
    addEventListeners();
}

function createChessBoard() {
    let chessboard = document.getElementById("chessboard");
    let isWhite = true;
    for (let col = 0; col < 8; col++) {
        for (let row = 0; row < 8; row++) {
            let cell = document.createElement('div');
            cell.textContent = '';
            cell.id = col.toString() + "_" + row.toString();
            cell.classList.add(isWhite ? 'white' : 'black');
            cell.style.cursor = 'pointer';
            cell.addEventListener("click", addEventListeners);
            chessboard.appendChild(cell);
            isWhite = !isWhite;
        }
        isWhite = !isWhite;
    }
}

function insertImage() {
    let whites = ['Wrook', 'Wknight', 'Wbishop', 'Wqueen', 'Wking', 'Wbishop', 'Wknight', 'Wrook'];
    let blacks = ['Brook', 'Bknight', 'Bbishop', 'Bqueen', 'Bking', 'Bbishop', 'Bknight', 'Brook'];
    for (let col = 0; col < 8; col++) {
        for (let row = 0; row < 8; row++) {
            let img = document.createElement('img');
            if (col == 0) {
                img.src = blacks[row] + ".png";
            } else if (col == 1) {
                img.src = 'Bpawn.png';
            } else if (col == 6) {
                img.src = 'Wpawn.png';
            } else if (col == 7) {
                img.src = whites[row] + ".png";
            } else {
                img.src = '';
            }
            img.classList.add('chessPiece');
            let cell = document.getElementById(col.toString() + '_' + row.toString());
            cell.appendChild(img);
        }
    }
}

function addEventListeners() {
    let chessboardEle = document.querySelectorAll('.chessboard>div')
    chessboardEle.forEach(chess => {
        chess.addEventListener('click',()=>{
            if(chess.children){
                let src = (chess.children[0].src).split('/').pop()
                // console.log(src)
                let row = chess.id[0], col = chess.id[2];
                if(src == 'Bpawn.png'){
                    BpawnKill(row,col,chessboardEle,chess);
                    Bpawn(row,col,chessboardEle,chess);
                }
                else if(src == 'Wpawn.png'){
                    Wpawn(row,col,chessboardEle,chess);
                }
            }
        })
    })
}
function BpawnKill(row,col,chessboardEle,chess){
    let id1 = `${parseInt(row)+1}_${parseInt(col)+1}`
    let id2 = `${parseInt(row)+1}_${parseInt(col)-1}`
    let id3 = `${parseInt(row)+1}_${parseInt(col)}`
    chessboardEle.forEach((ele)=>{
        if(ele.id == id1 || ele.id == id2 ){
            let src = (ele.children[0].src).split('/').pop()
            if(src != ''){
                ele.classList.add('route')
                ele.addEventListener('click',()=>{
                    let src = (chess.children[0].src).split('/').pop()
                    ele.innerHTML = `<img src="${src}" class="chessPiece" />`
                    chess.innerHTML = ''
                    ele.classList.add('moved')
                    removeRoute(chessboardEle)
                })
            }
       }else{
            if(ele.classList.contains('route')){
                ele.classList.remove('route')
            }
       }
    })
}
function Wpawn(row,col,chessboardEle,chess) {
    let id1 = `${parseInt(row)-1}_${col}`;
    let id2 = `${parseInt(row)-2}_${col}`;
    chessboardEle.forEach((ele)=>{
        if(!chess.classList.contains('moved')){
            if(ele.id == id1 || ele.id == id2){
                ele.classList.add('route')
                ele.addEventListener('click',()=>{
                    let src = (chess.children[0].src).split('/').pop()
                    ele.innerHTML = `<img src="${src}" class="chessPiece" />`
                    chess.innerHTML = ''
                    ele.classList.add('moved')
                    removeRoute(chessboardEle)
                })
            }
            else{
                if(ele.classList.contains('route')){
                    ele.classList.remove('route')
                }
            }
        }
        else{
           if(ele.id == id1 ){
                let src = (ele.children[0].src).split('/').pop()
                if(src == ''){
                    ele.classList.add('route')
                    ele.addEventListener('click',()=>{
                        let src = (chess.children[0].src).split('/').pop()
                        ele.innerHTML = `<img src="${src}" class="chessPiece" />`
                        chess.innerHTML = ''
                        ele.classList.add('moved')
                        removeRoute(chessboardEle)
                    })
                }
           } 
        }
    })
}
function Bpawn(row,col,chessboardEle,chess) {
    let id1 = `${parseInt(row)+1}_${col}`;
    let id2 = `${parseInt(row)+2}_${col}`;
    chessboardEle.forEach((ele)=>{
        if(!chess.classList.contains('moved')){
            if(ele.id == id1 || ele.id == id2){
                
                ele.classList.add('route')
                ele.addEventListener('click',()=>{
                    let src = (chess.children[0].src).split('/').pop()
                    ele.innerHTML = `<img src="${src}" class="chessPiece" />`
                    chess.innerHTML = ''
                    ele.classList.add('moved')
                    removeRoute(chessboardEle)
                })
            }
            else{
                if(ele.classList.contains('route')){
                    ele.classList.remove('route')
                }
            }
        }
        else{
           if(ele.id == id1 ){
                let src = (ele.children[0].src).split('/').pop()
                if(src == ''){
                    ele.classList.add('route')
                    ele.addEventListener('click',()=>{
                        let src = (chess.children[0].src).split('/').pop()
                        ele.innerHTML = `<img src="${src}" class="chessPiece" />`
                        chess.innerHTML = ''
                        ele.classList.add('moved')
                        removeRoute(chessboardEle)
                    })
                }
           } 
        }
    })
}
const removeRoute = (chessboardEle) => {
    chessboardEle.forEach((ele)=>{
        if(ele.classList.contains('route')){
            ele.classList.remove('route')
        }
    })
}
let Bpawn = document.querySelectorAll("div>img[src='Bpawn.png']");
    Bpawn.forEach((ele) => {
        ele.addEventListener('click',()=>{
            chessboardEle.forEach((chele)=>{
                if(chele.classList.contains('route'))
                    chele.classList.remove('route')
            })
            let id = ele.parentElement.id
            console.log(id)
            let row = id[0];
            let col = id[2];
            chessboardEle.forEach((chele)=>{
                if(chele.id == (parseInt(row)+1)+'_'+col){
                    chele.classList.add('route')
                    chele.addEventListener('click',()=>{
                        chele.appendChild(ele)
                        chele.classList.add('movedPawn')
                        chessboardEle.forEach((chEle)=>{
                            if(chEle.classList.contains('route'))
                                chEle.classList.remove('route')
                        })
                    })
                }
                if(!chele.classList.contains('movedPawn') && chele.id == (parseInt(row)+2)+'_'+col){
                    chele.classList.add('route')
                    chele.addEventListener('click',()=>{
                        chele.appendChild(ele)
                        chele.classList.add('movedPawn')
                        chessboardEle.forEach((chEle)=>{
                            if(chEle.classList.contains('route'))
                                chEle.classList.remove('route')
                        })
                    })
                }
            })
        })
    })