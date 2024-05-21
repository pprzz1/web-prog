
(function (ph){
try{
var A = self['' || 'AdriverCounterJS'],
	a = A(ph);
a.reply = {
ph:ph,
rnd:'384237',
bt:62,
sid:225258,
pz:0,
sz:'zahod',
bn:0,
sliceid:0,
netid:0,
ntype:0,
tns:0,
pass:'',
adid:0,
bid:2864425,
geoid:40,
cgihref:'//ad.adriver.ru/cgi-bin/click.cgi?sid=225258&ad=0&bid=2864425&bt=62&bn=0&pz=0&xpid=DS2YQWDxD0np-wmDPvnvBt6nfgXqvHS1N-64h7SH1F1LZjRsAfNPOLyVPfWKBU1piREyuOBBk0o33ZQ&ref=https:%2f%2fostin.com%2f&custom=',
target:'_blank',
width:'0',
height:'0',
alt:'AdRiver',
mirror:A.httplize('//masterh7.adriver.ru'), 
comp0:'0/script.js',
custom:{},
cid:'',
uid:0,
xpid:'DS2YQWDxD0np-wmDPvnvBt6nfgXqvHS1N-64h7SH1F1LZjRsAfNPOLyVPfWKBU1piREyuOBBk0o33ZQ'
}
var r = a.reply;

r.comppath = r.mirror + '/images/0002864/0002864425/' + (/^0\//.test(r.comp0) ? '0/' : '');
r.comp0 = r.comp0.replace(/^0\//,'');
if (r.comp0 == "script.js" && r.adid){
	A.defaultMirror = r.mirror; 
	A.loadScript(r.comppath + r.comp0 + '?v' + ph) 
} else if ("function" === typeof (A.loadComplete)) {
   A.loadComplete(a.reply);
}
}catch(e){} 
}('1'));
