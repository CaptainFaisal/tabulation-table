import $ from "jquery";
const page = () => {
  (function ($) {
    $.fn.extend({
      mgPgnation: function (options) {
        let $curNav,
          $magicLine,
          $magicNav,
          $mainNav,
          $nextNav,
          $pgnNav,
          $prevNav,
          $prevNavText,
          $this,
          calPgnWidth,
          magicDraw,
          prevNavWidth,
          prevText,
          showPrevNext,
          updatePrevText;
        $this = $(this);
        if ($this.length) {
          $mainNav = this.children();
          $pgnNav = $this.find(".pgn__item");
          $curNav = $this.find(".current");
          $magicNav = $this.find("div");
          $prevNav = $this.find(".prev");
          $nextNav = $this.find(".next");
          $prevNavText = $prevNav.find(".pgn__prev-txt");
          updatePrevText = function () {
            $prevNavText = $prevNav.find(".pgn__prev-txt");
            return $prevNavText.html("Previous");
          };
          calPgnWidth = function () {
            let pgnWidth, prevWidth, vsbNav, vsbNavs;
            vsbNav = $this.find(".pgn__item div:visible").length + 1;
            vsbNavs = vsbNav + 2;
            prevWidth = 100 / vsbNavs;
            pgnWidth = 100 - prevWidth * 2;
            $prevNav.css("width", prevWidth + "%");
            $nextNav.css("width", prevWidth + "%");
            $pgnNav.css("width", pgnWidth + "%");

            return $pgnNav.find("div, strong").css("width", 100 / vsbNav + "%");
          };

          showPrevNext = function () {
            let prevNavWidth;
            prevNavWidth = $prevNav.innerWidth();
            if (prevNavWidth > 100) {
              $this.addClass("fullprevnext");

              return $prevNavText.html("Previous");
            } else if (prevNavWidth < 101 && prevNavWidth > 60) {
              $this.addClass("fullprevnext");

              return $prevNavText.html("Previous");
            } else {
              return $this.removeClass("fullprevnext");
            }
          };
          magicDraw = function () {
            $magicLine.width($curNav.width());
            if ($curNav.position() !== void 0) {
              $magicLine.css("left", $curNav.position().left);
            }

            $magicLine.data("origLeft", $magicLine.position().left);
            return $magicLine.data("origWidth", $magicLine.width());
          };

          $mainNav.append('<li class="pgn__magic-line">');

          $magicLine = $this.find(".pgn__magic-line");
          prevNavWidth = $prevNav.innerWidth();
          if (prevNavWidth > 100) {
            prevText = "Previous";
          } else {
            prevText = "Prev";
          }
          if (!$prevNav.children().length) {
            $prevNav.addClass("disabled");
            $prevNav.append(
              '<div rel="prev"><i class="pgn__prev-icon icon-angle-left"></i><span class="pgn__prev-txt">' +
                prevText +
                "</span></div>"
            );
          }
          if (!$nextNav.children().length) {
            $nextNav.addClass("disabled");
            $nextNav.append(
              '<div rel="next"><i class="pgn__next-icon icon-angle-right"></i><span class="pgn__next-txt">Next</span></div>'
            );
          }
          calPgnWidth();
          showPrevNext();
          magicDraw();

          $magicNav.hover(
            function () {
              let $el, leftPos, newWidth;
              $el = $(this);
              leftPos = $el.position().left;
              newWidth = $el.width();

              return $magicLine.stop().animate({
                left: leftPos,
                width: newWidth,
              });
            },
            function () {
              return $magicLine.stop().animate({
                left: $magicLine.data("origLeft"),
                width: $magicLine.data("origWidth"),
              });
            }
          );
          return window.addEventListener("resize", function () {
            updatePrevText();
            calPgnWidth();
            showPrevNext();
            return magicDraw();
          });
        }
      },
    });

    return $(".pgn").mgPgnation();
  })($);
};

export default page;
