console.log('sachin');

let songIndex = 1;
let audioEliment = new Audio("/song/1.mp3")
let masterPlay = document.getElementById('masterPlay')
let progressBar = document.getElementById('progressBar')
progressBar.value = 0
let playList =Array.from(document.getElementsByClassName('playList'))


songs = [
    {songNmae:"Song No 1" ,filePath:"/song/1.mp3" ,coverPath:"/image/S1.jpg"},
    {songNmae:"Song No 2" ,filePath:"/song/2.mp3" ,coverPath:"/image/S2.jpg"},
    {songNmae:"Song No 3" ,filePath:"/song/3.mp3" ,coverPath:"/image/S3.jpg"},
    {songNmae:"Song No 4" ,filePath:"/song/4.mp3" ,coverPath:"/image/S4.jpg"},
    {songNmae:"Song No 5" ,filePath:"/song/5.mp3" ,coverPath:"/image/S5.jpg"},
    {songNmae:"Song No 6" ,filePath:"/song/6.mp3" ,coverPath:"/image/S6.jpg"},
    {songNmae:"Song No 7" ,filePath:"/song/7.mp3" ,coverPath:"/image/S7.jpg"},
]

playList.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath
    element.getElementsByClassName('songName')[0].innerText = songs[i].songNmae

})

masterPlay.addEventListener('click',masterPlayFunction)
    
function masterPlayFunction(){
    if (audioEliment.paused || audioEliment.currentTime<=0){
        audioEliment.play()
        document.getElementById('gif').style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    }
    else{
        audioEliment.pause()
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        document.getElementById('gif').style.opacity = 0;
    }
}
audioEliment.addEventListener('timeupdate',()=>{
    progressBar.value = parseInt(audioEliment.currentTime/audioEliment.duration*100)
})
progressBar.addEventListener('change',()=>{
    audioEliment.currentTime =(progressBar.value*audioEliment.duration)/100
})

function makeAllPlay(){
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.remove("fa-circle-pause")
            element.classList.add("fa-circle-play")
    })
}

Array.from(document.getElementsByClassName('playListPlay')).forEach((element,index)=>{
    element.addEventListener('click',(e)=>{
        songIndex = parseInt(e.target.id)
        makeAllPlay()
        element.classList.remove("fa-circle-play")
        element.classList.add("fa-circle-pause")
        audioEliment.src = `/song/${songIndex}.mp3`
        audioEliment.play()
        document.getElementById('gif').style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        document.getElementById('masterSongName').innerText = songs[songIndex-1].songNmae
        
    })
})

document.getElementById('previous').addEventListener('click',previous)
function previous(){
    if(songIndex>1){
    audioEliment.src = `/song/${songIndex -= 1}.mp3`
        audioEliment.play()
    }
    else{
        audioEliment.src = `/song/${songIndex}.mp3`
        audioEliment.play()
    }
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
    document.getElementById('masterSongName').innerText = songs[songIndex-1].songNmae
}
document.getElementById('next').addEventListener('click',next)
function next(){
    if(songIndex<7){
        audioEliment.src = `/song/${songIndex += 1}.mp3`
            audioEliment.play()
        }
        else{
            audioEliment.src = `/song/${songIndex = 1}.mp3`
            audioEliment.play()
        }
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
    document.getElementById('masterSongName').innerText = songs[songIndex-1].songNmae
}

Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.classList.remove("fa-circle-pause")
    element.classList.add("fa-circle-play")
})