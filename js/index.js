var $video = document.querySelector('#videoPandih')
var $play = document.querySelector('#play')
var $pause = document.querySelector('#pause')
var $back = document.querySelector('#backward')
var $for = document.querySelector('#forward')
var $progress = document.querySelector('#progress')

$play.addEventListener('click',handlePlay )
$pause.addEventListener('click',handlePause )
$back.addEventListener('click',handleBack)
$for.addEventListener('click',handleFor)
$video.addEventListener('loadedmetadata',handleLoaded)
$video.addEventListener('timeupdate',handleTimeUpdate)
$progress.addEventListener('input', handleInput)

function handlePlay() {
    $video.play()
    console.log('Le distes click al boton PLay')
    $pause.hidden=false
    $play.hidden=true
}
function handlePause() {
    $video.pause()
    console.log('Le distes click al boton pausa')
    $play.hidden=false
    $pause.hidden=true
}

function handleFor() {
    $video.currentTime += 3
    console.log('Para adelante 10 segundos', $video.currentTime)
}

function handleBack() {
    $video.currentTime -= 3
    console.log('Para atrás 10 segundos ')
}

function handleLoaded(){
    $progress.max = $video.duration
    console.log('Ha cargado mi video',$video.duration)
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime
}

function handleInput(){
    $video.currentTime = $progress.value
    console.log($progress.value)
}

