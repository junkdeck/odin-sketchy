var gridSize = 8;

function setBoxSize(gridSize){
    //returns the size of either side of a grid box, depending on the input size of the grid.
    return parseFloat($('.drawboard').css('height'))/gridSize;
}

function createGrid(gridSize, boxSize){
    var horGridCounter = 0;
    var verGridCounter = 0;
    while(verGridCounter < gridSize ){
        while(horGridCounter < gridSize){
            var curSquare = "<div class='grid-square flex-center' data-active='0'></div>"
            $(curSquare).appendTo(".drawboard").css({'width':boxSize,'height':boxSize});
            horGridCounter++;
        }
        horGridCounter = 0;
        verGridCounter++;
    }
}

var boxSize = setBoxSize(gridSize);
createGrid(gridSize, boxSize);

$('.clear-btn').on('click',function(){
    gridSize = prompt();
    $('.drawboard').empty();
    boxSize = setBoxSize(gridSize);
    createGrid(gridSize,boxSize);
});

$('.grid-square').on('mouseenter',function(){

    console.log("dinker");

    var randR = Math.floor(Math.random() * (255 - 0)) + 0;
    var randG = Math.floor(Math.random() * (255 - 0)) + 0;
    var randB = Math.floor(Math.random() * (255 - 0)) + 0;
    if($(this).data('active') === 0){
        $(this).css('background','rgb('+randR+','+randG+','+randB+')');
        $(this).data('active',1);
        $("<div class='grid-overlay'></div>").appendTo($(this))
    }else if($(this).data('active') === 1){
        $(this).children(".grid-overlay").css('opacity',"+=.1");
    }
});
