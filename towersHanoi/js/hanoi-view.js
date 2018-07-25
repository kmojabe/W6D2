class View {
  constructor(game, $e) {
    this.game = game;
    this.setupTowers($e);
    this.bindEvents();
  }
  
  setupTowers(dom) {
    let tower1 = $("<ul class='tower-1'></ul>");
    let tower2 = $("<ul class='tower-2'></ul>");
    let tower3 = $("<ul class='tower-3'></ul>");
    tower1.append($("<li class='not-even-thicc'></li>"));
    tower1.append($("<li class='thicc'></li>"));
    tower1.append($("<li class='thickest'></li>"));
    tower2.append($("<li class='empty'></li>"));
    tower2.append($("<li class='empty'></li>"));
    tower2.append($("<li class='empty'></li>"));
    tower3.append($("<li class='empty'></li>"));
    tower3.append($("<li class='empty'></li>"));
    tower3.append($("<li class='empty'></li>"));
    dom.append(tower1);
    dom.append(tower2);
    dom.append(tower3);
  }
  
  bindEvents() {
    $("ul").on("click", event => {
      const $ul = $(event.currentTarget);
      // debugger
      // debugger
      let lis = $(event.currentTarget).find("li"); {
        for (let i = 0; i < 3; i++) {
          let li = lis.eq(i);
          if (li.attr("class") !== "empty") {
            $(event.target).attr("style", "background-color: red");
            break;
          }
        }
        // this.makeMove($(event.target).attr("id"));
      }
    });
  }
  
  
}

module.exports = View;