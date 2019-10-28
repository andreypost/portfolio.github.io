function widthGreenLine(elems) {
	if (!elems) return
	for (let elem of elems) {
		let line = elem.querySelector('.growLine')
		let pers = elem.previousElementSibling.querySelector('.rateLine').innerHTML
		line.style.width = pers + '%'
	}
}
widthGreenLine(document.querySelectorAll('.baseLine'))
document.querySelector('.milleseconds').innerHTML = Date.now() - new Date(2016)
document.querySelector('.year').innerHTML = new Date().getFullYear()
function Slider(options) {
	let elem = options.elem
	let prev = options.prev
	let next = options.next
	let count = 0
	function slide() {
		for (let i = 0; i < elem.length; i++) {
			elem[i].classList.add('hidden')
		}
		elem[count].classList.remove('hidden')
	}
	slide()
	prev.onclick = function () {
		count <= 0 ? count = elem.length - 1 : count--
		slide()
	}
	next.onclick = function () {
		count >= elem.length - 1 ? count = 0 : count++
		slide()
	}
}
new Slider({
	elem: document.querySelectorAll('.slider > div'),
	prev: document.querySelector('.prev'),
	next: document.querySelector('.next')
})
window.onscroll = function () {
	arrowUp.hidden = document.documentElement.clientHeight / 2 > document.documentElement.scrollTop
}
arrowUp.onclick = function (e) {
	let start = Date.now()
	let timer = setTimeout(function func() {
		let diff = start - Date.now()
		window.scrollBy(0, diff)
		timer = setTimeout(func, 25)
		if (window.pageYOffset < 1) clearTimeout(timer)
	}, 25)
	/*			let timer = setInterval(function() {
					let diff = start - Date.now()
					window.scrollBy(0, diff)
					if (window.pageYOffset < 1) clearInterval(timer)
				},25)*/
}
// btnSubmit.onclick = function (e) {
// 	// e.preventDefault()
// 	let width = document.documentElement.clientWidth
// 	let right = parseInt(getComputedStyle(arrowUp).right)
// 	showCover(width, right)
// 	let form = document.createElement('div')
// 	form.id = 'modalId'
// 	form.insertAdjacentHTML('beforeend', '<button id="ok">Thanks!</button>')
// 	document.body.append(form)
// 	ok.onclick = function () {
// 		hideCover(width, right)
// 	}
// 	document.onkeydown = function (e) {
// 		if (e.key == 'Escape') {
// 			hideCover(width, right)
// 		}
// 	}
// }
function showCover(width, right) {
	coverId.hidden = false
	document.body.style.overflow = 'hidden'
	document.body.style.paddingRight = document.documentElement.clientWidth - width + 'px'
	arrowUp.style.right = right + document.documentElement.clientWidth - width + 'px'
}
function hideCover(width, right) {
	coverId.hidden = true
	document.getElementById('modalId').remove()
	document.body.style.overflowY = ''
	document.body.style.paddingRight = 0 + 'px'
	arrowUp.style.right = right + 'px'
	document.onkeydown = null
}

