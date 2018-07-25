class View {
  constructor(game, $el) {
    this.game = game;
    this.setupBoard($el);
    this.bindEvents();
  }
    
  bindEvents() {
    $(".board").on("click", event => {
      const $ul = $(event.currentTarget);
      // debugger
      if ($ul.find("li").is(event.target)) {
        // debugger
        $(event.target).text(this.game.currentPlayer);
        $(event.target).attr("style", "background-color: white");
        this.makeMove($(event.target).attr("id"));
      }
    });
  }

  makeMove(pos) {
    pos = [Math.floor(pos / 3), pos % 3];
    this.game.playMove(pos);
    if (this.game.isOver()) {
      this.gameOver();
    }
  }
  
  gameOver() {
    $(".board").off("click", null);
    let listEls = $("li");
    let el;
    // debugger
    for (let i = 0; i < 9; i++) {
      el = listEls.eq(i);
      $("ul").attr("style", "background-color: white;");
      if ( el.text() === this.game.winner()) {
        el.attr("style", "background-color: green");
      } else {
        el.attr("style", "background-color: white");
        el.attr("style", "color: red");
      }
    }
    
    let newEl = $("<h2></h2>");
    
    if (this.game.winner()) {
      newEl.text(`${this.game.winner()} wins!!!`);
    } else {
      newEl.text("It's a draw...");
    }
    $("ul").after(newEl);
  }

  setupBoard(el) {
    const board = $("<ul class='board'></ul>");
    el.append(board);
    
    for (let i = 0; i < 9; i++) {
      let square = $(`<li id="${i}"class="square"></li>`);
      // square.data("id",`${i}`);
      board.append(square);
    }
  }
}

module.exports = View;
