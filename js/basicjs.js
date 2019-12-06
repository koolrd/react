var DOMVar = document.documentURI;
var url = new URL(document.documentURI);
var parameters = DOMVar.split('?');
var parm= url.searchParams.get("UserEmail");
if(parm){
	console.log(parm);
console.log(url);
}
