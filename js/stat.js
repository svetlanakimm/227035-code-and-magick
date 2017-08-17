'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);

  var max = -1;
  var histogramHeight = 150;
  var step = histogramHeight / max;
  var barWidth = 40;
  var indentX = 50;
  var indentY = 20;
  var initialX = 150;
  var initialY = 100;

  for (var j = 0; j < times.length; j++) {
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random() * 0.5 + 0.5) + ')';
    }
    ctx.fillRect(initialX + (barWidth + indentX) * j, initialY + (histogramHeight - times[j] * step), barWidth, times[j] * step);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(Math.round(times[j]), initialX + (barWidth + indentX) * j, initialY + (histogramHeight - times[j] * step - indentY));
    ctx.fillText(names[j], initialX + (barWidth + indentX) * j, initialY + histogramHeight + indentY);
  }
};
