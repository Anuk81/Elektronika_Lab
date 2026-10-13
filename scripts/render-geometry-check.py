import moderngl,numpy as np
from PIL import Image
c=moderngl.create_standalone_context(backend='egl');p=c.program(vertex_shader='''#version 330
in vec3 pos;in vec3 normal;in vec3 color;out vec3 col;out vec3 norm;out vec3 wp;uniform mat4 mvp;void main(){gl_Position=mvp*vec4(pos,1);col=color;norm=normal;wp=pos;}''',fragment_shader='''#version 330
in vec3 col;in vec3 norm;in vec3 wp;uniform sampler2D toptex;uniform sampler2D bottex;uniform vec2 dims;out vec4 frag;uniform vec3 light;void main(){float l=.35+.65*max(dot(normalize(norm),light),0);vec3 base=col;if(col.r>.3 && col.g<.03 && abs(abs(norm.z)-1)<.001 && (abs(wp.z)<.001||abs(wp.z+1.6)<.001)){vec2 uv=vec2(wp.x/dims.x+.5,.5-wp.y/dims.y);base=pow(wp.z>-.1?texture(toptex,uv).rgb:texture(bottex,uv).rgb,vec3(2.2));}frag=vec4(pow(base*l,vec3(1./2.2)),1);}''')
import json
p['dims'].value=tuple(json.load(open('/tmp/a64-bounds.json')))
for unit,layer in enumerate([1,16]):
 im=Image.open('/tmp/a64-surface-'+str(layer)+'.png').convert('RGB');tex=c.texture(im.size,3,im.tobytes());tex.use(unit);p['toptex' if unit==0 else 'bottex'].value=unit
v=c.buffer(open('/tmp/a64-geometry.bin','rb').read());vao=c.vertex_array(p,[(v,'3f 3f 3f','pos','normal','color')]);f=c.simple_framebuffer((1400,1000));f.use();c.enable(moderngl.DEPTH_TEST)
for name,eye in [('top',np.array([25,-65,125.])),('bottom',np.array([25,65,-125.]))]:
 target=np.array([0,0,1.]);z=(eye-target);z/=np.linalg.norm(z);x=np.cross([0,1,0],z);x/=np.linalg.norm(x);y=np.cross(z,x);view=np.eye(4);view[:3,:3]=[x,y,z];view[:3,3]=-view[:3,:3]@eye;proj=np.diag([1/60,1/43,-2/400,1]);proj[2,3]=-1
 p['mvp'].write((proj@view).T.astype('f4').tobytes());light=eye/np.linalg.norm(eye);p['light'].value=tuple(light);f.clear(.08,.10,.13,1);vao.render();Image.frombytes('RGB',f.size,f.read(components=3)).transpose(Image.Transpose.FLIP_TOP_BOTTOM).save('/tmp/a64-'+name+'.png')
