let tg = window.Telegram.WebApp;

function menu_scroll(){
	console.log("Еуые");
	if (document.getElementById("boost_noney").style.display == "none"){
		
		document.getElementById("boost_noney").style.display = '';
		document.getElementById("task").style.display = '';
		document.getElementById("invite").style.display = '';
		document.getElementById("top").style.display = '';
		document.getElementById("coin_clear").style.display = '';
		document.getElementById("walet").style.display = '';
	}
	else {
		
		document.getElementById("boost_noney").style.display = 'none';
		document.getElementById("task").style.display = 'none';
		document.getElementById("invite").style.display = 'none';
		document.getElementById("top").style.display = 'none';
		document.getElementById("coin_clear").style.display = 'none';
		document.getElementById("walet").style.display = 'none';
		
	}
	
};
function task_click(){
	window.location.href = "task.html";
};
function exit(){
	window.location.href = "index.html";
};
function invite_click(){
	window.location.href = "frends.html";
};
function Rewerd_Task_click(){

	document.getElementById("reward_div").style.display = 'block';
};
function Rewerd_Task_click_exit(){
	document.getElementById("reward_div").style.display = 'none';
};
tg.expand();











