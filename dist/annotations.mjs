export class Notebook {
 constructor(storage){this.storage=storage;this.board='';this.data={nets:{},segments:{},points:[],readings:[]};this.history=[];}
 key(){return 'circuitlab-notes-v2-'+this.board;}
 load(board){this.board=board;this.history=[];try{const x=JSON.parse(this.storage.getItem(this.key())||'null');this.data=x&&x.nets&&x.segments&&Array.isArray(x.points)?x:{nets:{},segments:{},points:[],readings:[]};}catch{this.data={nets:{},segments:{},points:[],readings:[]};}return this.data;}
 save(){try{this.storage.setItem(this.key(),JSON.stringify(this.data));return true;}catch{return false;}}
 before(){this.history.push(JSON.stringify(this.data));if(this.history.length>50)this.history.shift();}
 markNet(net,color){this.before();this.data.nets[net]===color?delete this.data.nets[net]:this.data.nets[net]=color;this.save();}
 markSegment(id,color){this.before();this.data.segments[id]===color?delete this.data.segments[id]:this.data.segments[id]=color;this.save();}
 point(id,note=''){this.before();this.data.points.push({id,note});this.save();}
 remove(type,key){this.before();if(type==='points'||type==='readings')this.data[type].splice(Number(key),1);else delete this.data[type][key];this.save();}
 reading(value){this.before();this.data.readings.push(value);if(this.data.readings.length>100)this.data.readings.shift();this.save();}
 undo(){const x=this.history.pop();if(x){this.data=JSON.parse(x);this.save();return true;}return false;}
 clear(){this.before();this.data={nets:{},segments:{},points:[],readings:[]};this.save();}
 routes(){try{return JSON.parse(this.storage.getItem(this.key()+'-routes')||'[]');}catch{return [];}}
 storeRoute(name){const list=this.routes();list.push({name,created:new Date().toISOString(),data:JSON.parse(JSON.stringify(this.data))});try{this.storage.setItem(this.key()+'-routes',JSON.stringify(list));return true;}catch{return false;}}
 restore(index){let x=this.routes()[index];if(x){this.before();this.data=JSON.parse(JSON.stringify(x.data));this.save();return true;}return false;}
}
