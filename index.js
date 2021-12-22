let $wrapper = document.querySelector('.wrapper');
let $card = document.querySelector('.card');
let $inpt = document.querySelector('.inpt');
let $image = document.createElement('img');
$image.classList.add('image');
$card.appendChild($image);

let links = ['https://1001golos.ru/uploads/ratings/1582000/1581804/pic2.jpg'];
var i = 0;

function getImage(i, links) {
	$image.src = links[i];
}

$inpt.addEventListener('change', function(e) {
	let link = e.target.value;
	links.push(link);
	e.target.value = '';
})

setInterval(function(){
	getImage(i, links);
	i++;
	if(i >= links.length) {
		i = 0;
	}
}, 2000);






