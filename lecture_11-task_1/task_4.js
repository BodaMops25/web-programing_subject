let array=[ 
	" Спочатку JavaScript був створений, щоб зробити веб-сторінки живими ", 
	" Різні двигуни мають різні «кодові імена».",
	" Коли JavaScript створювався, він мав інше ім'я – «LiveScript» ",
	" Повна інтеграція з HTML/CSS "
]

array.forEach(item => item.indexOf('JavaScript') !== -1 ? console.log(item) : undefined)
