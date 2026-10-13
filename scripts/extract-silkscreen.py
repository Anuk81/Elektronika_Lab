"""Extract original revision H silkscreen, keeping source positions and strokes."""
from pathlib import Path
import math,json
ns={'__file__':str(Path(__file__).with_name('audit-cad.py').resolve())}
exec(Path(__file__).with_name('audit-cad.py').read_text().split('report={}')[0],ns)
sexp,child,children=[ns[x] for x in ('sexp','child','children')]
root=Path(__file__).resolve().parents[1]/'dist'
doc=sexp((root/'reference/A64-OlinuXino_Rev_H.kicad_pcb').read_text())
items=[]
def extract(n,parent=None):
 layer=child(n,'layer',['layer',''])[1]
 if layer not in ['F.SilkS','B.SilkS']:return
 at=child(parent or [],'at',['at',0,0,0]);ox,oy=map(float,at[1:3]);a=math.radians(float(at[3]) if len(at)>3 else 0)
 def pt(v):
  x,y=map(float,v[1:3]);return [round(ox+x*math.cos(a)+y*math.sin(a),5),round(-oy+x*math.sin(a)-y*math.cos(a),5)]
 out={'layer':1 if layer=='F.SilkS' else 16,'width':float(child(n,'width',['width',.15])[1])}
 kind=n[0].split('_')[-1]
 if kind=='text':
  if 'hide' in n:return
  where=child(n,'at');effects=child(n,'effects',[]);font=child(effects,'font',[]);size=child(font,'size',['size',1,1]);justify=child(effects,'justify',[])
  out.update(type='text',text=n[2] if parent else n[1],at=pt(where),angle=float(where[3]) if len(where)>3 and where[3]!='unlocked' else 0,size=list(map(float,size[1:3])),mirror='mirror' in justify,align='left' if 'left' in justify else 'right' if 'right' in justify else 'center')
 elif kind=='line':out.update(type='path',points=[pt(child(n,'start')),pt(child(n,'end'))])
 elif kind=='circle':
  c=pt(child(n,'center'));p=pt(child(n,'end'));out.update(type='circle',at=c,r=math.dist(c,p))
 elif kind=='arc':
  c=list(map(float,child(n,'start')[1:3]));p=list(map(float,child(n,'end')[1:3]));angle=float(child(n,'angle')[1]);r=math.dist(c,p);start=math.atan2(p[1]-c[1],p[0]-c[0]);steps=max(4,math.ceil(abs(angle)/5));out.update(type='path',points=[pt(['xy',c[0]+r*math.cos(start+math.radians(angle)*i/steps),c[1]+r*math.sin(start+math.radians(angle)*i/steps)]) for i in range(steps+1)])
 elif kind=='poly':out.update(type='polygon',points=[pt(p) for p in children(child(n,'pts',[]),'xy')])
 else:return
 items.append(out)
for n in doc:
 if isinstance(n,list) and n[0].startswith('gr_'):extract(n)
for m in children(doc,'module'):
 for n in m:
  if isinstance(n,list) and n[0].startswith('fp_'):extract(n,m)
(root/'data/a64-silkscreen.mjs').write_text('export default '+json.dumps(items,separators=(',',':'),ensure_ascii=False)+';\n')
print('Silkscreen primitives:',len(items),'top:',sum(x['layer']==1 for x in items),'bottom:',sum(x['layer']==16 for x in items))
