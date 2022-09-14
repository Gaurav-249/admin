function M()
{
var un=document.getElementById('User').value;
var pw=document.getElementById('Pass').value;
if(un=="admin"||pw=="8858")
{
	location.assign('index.html');
}
else
{
	document.write('<b>failed</b>');
}

}