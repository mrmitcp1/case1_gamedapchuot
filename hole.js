
let table = document.querySelector('table')
let originalCursor = table.style.cursor
table.addEventListener('mouseover', function () {
    table.style.cursor = 'url(/images/hammer0.png) , auto'
})
table.addEventListener('mouseout',function () {
    table.style.cursor = originalCursor
})
// let newCursor = 'url(/images/hammer1.png)'
table.addEventListener('click', function () {
    table.style.cursor = 'url(/images/hammer1.png) , auto'
    setTimeout(function () {
            table.style.cursor = 'url(/images/hammer0.png) , auto'
    },500

    )
})
