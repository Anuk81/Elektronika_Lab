"""Derive package envelopes and account for every footprint in bundled source CAD."""
import json, re, math, xml.etree.ElementTree as ET
from pathlib import Path
root=Path(__file__).resolve().parents[1]/'dist'
boards=json.loads((root/'data/boards.json').read_text())
sources={'mosfet':'SparkFun_MOSFET_Power_Control_Kit.brd','logic':'Logic_Level_Bidirectional.brd','ardumoto':'SparkFun_Ardumoto.brd','audio-i2s':'SparkFun_I2S_Audio_Breakout.brd','lipo-charger':'SparkFun_Lipo_Charger_Basic-microUSB.brd','computer':'A64-OlinuXino_Rev_H.kicad_pcb'}
def bounds(points):
 if not points:return None
 xs,ys=zip(*points);return [round(min(xs),4),round(min(ys),4),round(max(xs),4),round(max(ys),4)]
def sexp(s):
 stack=[];out=[]
 for token in re.finditer(r'"(?:\\.|[^"\\])*"|[()]|[^\s()]+',s):
  t=token.group()
  if t=='(':n=[]; (stack[-1] if stack else out).append(n);stack.append(n)
  elif t==')':stack.pop()
  else:stack[-1].append(t.strip('"'))
 return out[0]
def children(n,key):return [a for a in n if isinstance(a,list) and a[0]==key]
def child(n,key,default=None):return next(iter(children(n,key)),default)
report={}
for b in boards:
 if b['id'] not in sources:continue
 path=root/'reference'/sources[b['id']];source={};holes=[]
 if path.suffix=='.brd':
  doc=ET.parse(path);packages={(lib.get('name'),p.get('name')):p for lib in doc.findall('.//libraries/library') for p in lib.findall('./packages/package')}
  for el in doc.findall('.//board/elements/element'):
   pkg=packages[(el.get('library'),el.get('package'))];pts=[]
   for layer in ['51','21']:
    pts=[]
    for p in pkg:
     if p.get('layer')!=layer:continue
     if p.tag in ('wire','rectangle'):pts += [(float(p.get('x1')),float(p.get('y1'))),(float(p.get('x2')),float(p.get('y2')))]
     if p.tag=='circle':
      x,y,r=map(float,[p.get('x'),p.get('y'),p.get('radius')]);pts += [(x-r,y-r),(x+r,y+r)]
    if pts:break
   source[el.get('name')]={'package':el.get('package'),'envelope':bounds(pts),'electrical':bool(pkg.findall('pad')+pkg.findall('smd'))}
   a=math.radians(float(re.sub('[^0-9.-]','',el.get('rot','R0'))));mir=-1 if 'M' in el.get('rot','') else 1
   for hole in pkg.findall('hole'):
    x,y=mir*float(hole.get('x')),float(hole.get('y'));holes.append([float(el.get('x'))+x*math.cos(a)-y*math.sin(a),float(el.get('y'))+x*math.sin(a)+y*math.cos(a),float(hole.get('drill'))/2])
  for h in doc.findall('.//board/plain/hole'):holes.append([float(h.get('x')),float(h.get('y')),float(h.get('drill'))/2])
 else:
  doc=sexp(path.read_text());b['thickness']=float(child(child(doc,'general'),'thickness')[1])
  for m in children(doc,'module'):
   ref=next((t[2] for t in children(m,'fp_text') if t[1]=='reference'),None);pts=[]
   for layer in ['F.Fab','B.Fab','F.SilkS','B.SilkS']:
    pts=[]
    for line in children(m,'fp_line'):
     if child(line,'layer')[1]==layer:pts += [list(map(float,child(line,k)[1:3])) for k in ['start','end']]
    if pts:break
   # KiCad's local y axis points downward; board importer converts world y.
   source[ref]={'package':m[1],'envelope':bounds([(x,-y) for x,y in pts]),'electrical':bool(children(m,'pad')) and 'Mounting_hole' not in m[1]}
 existing={e['name'] for e in b['elements']};missing=[ref for ref,v in source.items() if v['electrical'] and ref not in existing]
 for e in b['elements']:
  s=source.get(e['name']);env=s and s['envelope']
  if env and env[2]>env[0] and env[3]>env[1]:e['cadEnvelope']=env
  p=e['package'].upper();e['assembly']='not-fitted' if bool(re.match(r'^NA(?:\(|$)',e.get('value',''))) else 'footprint-only' if any(t in p for t in ['FIDUCIAL','TESTPAD','MOUNTING_HOLE','JUMPER','SMT-JUMPER','BT_ANTENNA']) or p=='TP_SMD' or p.startswith('SJ') else 'fitted'
 if holes:b['holes']=list({tuple(round(v,4) for v in h) for h in b.get('holes',[])+holes})
 b['cadAudit']={'source':path.name,'sourceFootprints':len(source),'importedFootprints':len(existing),'fitted':sum(e['assembly']=='fitted' for e in b['elements']),'bottomFitted':sum(e['assembly']=='fitted' and e.get('mirror',False) for e in b['elements']),'notFitted':sum(e['assembly']=='not-fitted' for e in b['elements']),'footprintOnly':sum(e['assembly']=='footprint-only' for e in b['elements']),'missingElectrical':missing,'omittedArtwork':[ref for ref,v in source.items() if not v['electrical'] and ref not in existing]}
 report[b['id']]=b['cadAudit']
metadata={b['id']:{'holes':b.get('holes',[]),'cadAudit':b['cadAudit'],'elements':{e['name']:{k:e[k] for k in ['cadEnvelope','assembly'] if k in e} for e in b['elements']}} for b in boards if 'cadAudit' in b}
(root/'cad-metadata.mjs').write_text('const metadata='+json.dumps(metadata,separators=(',',':'),ensure_ascii=False)+';\nexport function enrichBoards(boards){for(const b of boards){const m=metadata[b.id];if(!m)continue;b.holes=m.holes;b.cadAudit=m.cadAudit;for(const e of b.elements)Object.assign(e,m.elements[e.name]||{});}return boards;}\n')
(root/'data/cad-audit.json').write_text(json.dumps(report,indent=2,ensure_ascii=False))
print(json.dumps(report,indent=2))
