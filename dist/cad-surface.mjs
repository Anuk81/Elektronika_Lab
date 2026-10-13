import silk from './data/a64-silkscreen.mjs';
// Original CAD strokes; browser font substitutes KiCad stroke glyphs only.
export function drawCadSilkscreen(ctx,board,layer,sc,point){
 if(board.id!=='computer')return false;
 ctx.save();ctx.strokeStyle=ctx.fillStyle='#ece9dd';ctx.lineCap='round';ctx.lineJoin='round';ctx.shadowBlur=0;
 for(const s of silk){if(s.layer!==layer)continue;ctx.lineWidth=s.width*sc;
  if(s.type==='text'){ctx.save();ctx.translate(...point(...s.at));ctx.rotate(-s.angle*Math.PI/180);if(s.mirror)ctx.scale(-1,1);ctx.font=`${s.size[1]*sc}px Arial`;ctx.textAlign=s.align;ctx.textBaseline='middle';const lines=s.text.replace(/\\n/g,'\n').split('\n');lines.forEach((line,i)=>ctx.fillText(line,0,(i-(lines.length-1)/2)*s.size[1]*sc*1.4));ctx.restore();}
  else if(s.type==='circle'){ctx.beginPath();ctx.arc(...point(...s.at),s.r*sc,0,Math.PI*2);ctx.stroke();}
  else {ctx.beginPath();s.points.forEach((p,i)=>i?ctx.lineTo(...point(...p)):ctx.moveTo(...point(...p)));if(s.type==='polygon'){ctx.closePath();ctx.fill();}else ctx.stroke();}
 }
 ctx.restore();return true;
}
