setInterval(function () {
  requestAnimationFrame(updateGradient);
}, 23);

//let colors = new Array(
//[89, 97, 100],
//[83, 120, 149],
//[232, 140, 62],
//[106, 145, 129],
//[60, 21, 24],
//[173, 43, 43],
//[151, 153, 19],
//[88, 140, 57],
//[49, 135, 118]);


let step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
let colorIndices = [8, 7, 6, 2];

// transition speed
let gradientSpeed = 0.0075;

function updateGradient() {
  let c0_0 = colors[colorIndices[0]];
  let c0_1 = colors[colorIndices[1]];
  let c1_0 = colors[colorIndices[2]];
  let c1_1 = colors[colorIndices[3]];

  let istep = 1 - step;
  let r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  let g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  let b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  let color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

  let r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  let g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  let b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  let color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

  let gradientEl = document.getElementsByClassName("canvas")[0];

  gradientEl.style.background = "linear-gradient(-45deg, " + color1 + " , " + color2 + ") scroll";

  step += gradientSpeed;
  if (step >= 1) {
    step %= 1;

    // mark currently used colors to be avoided
    var colorIndicesToAvoid = [colorIndices[1], colorIndices[3]];

    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    colorIndices[1] = pickColor(colors, colorIndicesToAvoid);
    colorIndices[3] = pickColor(colors, colorIndicesToAvoid);
  }
}

//pick two new target color indices
//do not pick the same as the current one
function pickColor(colors, colorIndicesToAvoid) {
  let newColorIndex;

  do {
    newColorIndex = Math.floor(1 + Math.random() * (colors.length - 1)) % colors.length;
  } while (newColorIndex in colorIndicesToAvoid); // don't pick a color we're told to avoid

  return newColorIndex;
}

var app = document.querySelector('#app');
var texts = [
    'gràcies!',
    'gràcies!',
    'gràcies!',
    'gràcies!',
    'gràcies!',
    'gràcies!',
    'gràcies!'
];
var styles = ['green', 'yellow', 'red', 'blue'];
var degrees = ['0deg', '5deg', '10deg', '-5deg', '-10deg'];
var sizes = ['lowercase', 'uppercase'];
var getRndInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
var generateTextAnimated = function () {
    var text = texts[getRndInteger(0, texts.length)];
    new TextAnimated(text);
};
var TextAnimated = /** @class */ (function () {
    function TextAnimated(text) {
        this.text = text;
        this.textAnimatedArr = this.getArr(this.text);
        this.render();
    }
    TextAnimated.prototype.createTag = function (tagName, content) {
        var tag = document.createElement(tagName);
        var tagInner = document.createElement(tagName);
        tag.className = "animated bounceIn text-item text-" + this.getSize() + " " + this.getStyle();
        tagInner.textContent = content;
        tagInner.style.transform = "rotate(" + this.getDegree() + ")";
        tag.appendChild(tagInner);
        return tag;
    };
    TextAnimated.prototype.getArr = function (string) {
        return string.split('');
    };
    TextAnimated.prototype.getStyle = function () {
        return styles[getRndInteger(0, styles.length)];
    };
    TextAnimated.prototype.getDegree = function () {
        return degrees[getRndInteger(0, degrees.length)];
    };
    TextAnimated.prototype.getSize = function () {
        return sizes[getRndInteger(0, sizes.length)];
    };
    TextAnimated.prototype.render = function () {
        var _this = this;
        app.innerHTML = '';
        this.textAnimatedArr.map(function (str) { return app.appendChild(_this.createTag('div', str)); });
    };
    return TextAnimated;
}());
generateTextAnimated();
setInterval(function () {
    generateTextAnimated();
}, 1300);
