window.onload=function(){
	var cishu=document.getElementById('cishu');
	var ROW=15;
	var el=document.getElementById('sence');
	var bl,
	NUM=Math.floor((480-ROW)/ROW)+'px';
	var sence=document.getElementById('sence');
	var pu,pu2;
	for(var i=0;i<ROW;i++){
	pu=document.createElement('div');
	pu.style.position='absolute';
	pu.style.top=(480/ROW)/2+(480/ROW)*i+'px';
	pu.style.width='480px';
	pu.style.height='1px';
	pu.style.background='white';
	sence.appendChild(pu);

	pu2=document.createElement('div');
	pu2.style.position='absolute';
	pu2.style.left=(480/ROW)/2+(480/ROW)*i+'px';
	pu2.style.width='1px';
	pu2.style.height='480px';
	pu2.style.background='white';
	sence.appendChild(pu2);
}

	pu3=document.createElement('div');
	pu3.style.width='480px';
	pu3.style.height='480px';
	pu3.style.background='black';
	pu3.style.opacity=0.8;
	pu3.style.position='absolute';
	pu3.innerHTML='恭喜！胜利';
	pu3.style.textAlign='center';
	pu3.style.lineHeight='480px';
	pu3.style.fontSize='60px';
	pu3.style.color='white';
	pu3.style.cursor='pointer';



	pu4=document.createElement('div');
	pu4.style.position='absolute';
	pu4.style.bottom='40px';
	pu4.style.left='100px';
	pu4.style.width='250px';
	pu4.style.height='50px';
	pu4.style.background='white';
	pu4.style.border='2px solid black';
	pu4.style.borderRadius='10px';
	pu4.style.zIndex=88;
	pu4.style.lineHeight='50px';
	pu4.style.fontSize='40px';
	pu4.style.color='black';
	pu4.innerHTML='再来一局';
	pu4.style.cursor='pointer';

		pu4.onclick=function(){
		location.reload();
	}

	for(var i=0;i<ROW;i++){
		for(var j=0;j<ROW;j++){
			bl=document.createElement('div');
			bl.setAttribute('class','block');
			bl.setAttribute('id',i+'_'+j);
			bl.style.width=NUM;
			bl.style.height=NUM;
			bl.style.webkitTransform='scale(0.9)';
			pu3.style.zIndex=78;
			pu4.style.zIndex=88;
			el.appendChild(bl);
		}
	}
	var blocks=document.getElementsByClassName('block');
	var yunxu=true;

	var dict1={};
	var dict2={};
	var panduan=function(id,dic){
		var x=Number(id.split('_')[0]);
		console.log(x)
		var y=Number(id.split('_')[1]);
		var hang=1;
		var lie=1;
		var sloft=1;
		var ssloft=1;
		var tx,ty;
		tx=x;ty=y;
		while(dic[tx+'_'+(ty+1)]){hang++;ty++}
		tx=x,ty=y;
		while(dic[tx+'_'+(ty-1)]){hang++;ty--}
		if(hang>=5)return true;
		tx=x;ty=y;
		while(dic[(tx+1)+'_'+ty]){lie++;tx++}
		tx=x,ty=y;
		while(dic[(tx-1)+'_'+ty]){lie++;tx--}
		if(lie>=5)return true;
		tx=x;ty=y;
		while(dic[(tx+1)+'_'+(ty+1)]){ssloft++;tx++;ty++}
		tx=x,ty=y;
		while(dic[(tx-1)+'_'+(ty-1)]){ssloft++;tx--;ty--}
		if(ssloft>=5)return true;
		tx=x;ty=y;
		while(dic[(tx+1)+'_'+(ty-1)]){sloft++;tx++;ty--}
		tx=x,ty=y;
		while(dic[(tx-1)+'_'+(ty+1)]){sloft++;tx--;ty++}
		if(sloft>=5)return true;
	}
	var jj=0;
	for(var i=0;i<blocks.length;i++){
		blocks[i].onclick=function(){
			if(this.hasAttribute('hasColor')){return;}

			if(yunxu){

				this.style.background='url(./img/white.png)';
				
				
				dict1[this.getAttribute('id')]=true;
				var id=this.getAttribute('id');
				console.log(id)
				yunxu=false;
				if(panduan(id,dict1)){sence.appendChild(pu3);sence.appendChild(pu4);}
			}else{
				jj++;
				cishu.innerHTML=' '+jj+' ';
				this.style.background='url(./img/black.png)';
				dict2[this.getAttribute('id')]=true;
				var id=this.getAttribute('id');
				yunxu=true;
				if(panduan(id,dict2)){sence.appendChild(pu3);sence.appendChild(pu4);}
			}
			this.setAttribute('hasColor','true');
		}
	}
	var shezhi=document.getElementById('shezhi');
	var help=document.getElementById('help');
	var kaishi=document.getElementById('kaishi');
	var iii=document.getElementById('iii');

	var banzhu=document.getElementById('banzhu');

	var sence=document.getElementById('sence');

kaishi.onclick=function(){
	iii.style.display='none';
}
	shezhi.onclick=function(){
		window.location.reload();
	}
	var dui=true;
	help.onclick=function(){
		if(dui){
		banzhu.style.display='block';
		dui=false;
	}else{
		banzhu.style.display='none';
		dui=true;
	}


	}
	document.onmousedown=function(e){
	e.preventDefault();
}
}