import Node from "node.js";

class Board {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.start = null;
        this.target = null;

        this.boardArray = [];
        this.nodes = {};
        this.nodesAnimate = [];

        this.nodesPathAnimate = [];

        //Box animate height change depending on weight
        this.wallsAnimate = [];



    }
}



Board.initialize = function() {
    this.createGrid();
    //add event listeners!
}

Board.createGrid = function() {
    //2d grid (sketch handles 3d render, board.js handles nodes)
    //Change box height depending on edge weight

}

let width = 10;
let height = 10;
let newBoard = new Board(height, width);
newBoard.initialize();
