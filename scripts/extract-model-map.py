import json,re
from pathlib import Path
s=Path('scripts/audit-cad.py').read_text();exec(s[:s.index('report={}')])
doc=sexp((root/'reference/A64-OlinuXino_Rev_H.kicad_pcb').read_text());result={}
for m in children(doc,'module'):
 ref=next((t[2] for t in children(m,'fp_text') if t[1]=='reference'),None);model=child(m,'model')
 if not model:continue
 def vec(key,default):
  p=child(model,key)
  return list(map(float,child(p,'xyz')[1:])) if p else default
 scale=vec('scale',[1,1,1]);at=child(m,'at');result[ref]={'file':model[1].split('/')[-1],'offset':vec('offset',vec('at',[0,0,0])),'scale':scale,'rotate':vec('rotate',[0,0,0]),'angle':float(at[3]) if len(at)>3 else 0,'bottom':child(m,'layer')[1]=='B.Cu','scaled':scale!=[1,1,1]}
Path('dist/models/placements.json').write_text(json.dumps(result,separators=(',',':')))
print(len(result),'references with source models;',sum(v['scaled'] for v in result.values()),'scaled')
