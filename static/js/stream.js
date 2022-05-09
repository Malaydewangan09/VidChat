const APP_ID = '0c4a378481b942c2802c76ee57e7a844'
const TOKEN =  '0060c4a378481b942c2802c76ee57e7a844IAD4pQ0l0kz8brqv6ZNMKp/MuieXmMZZxvXBf4vZoCWUWWTNKL8AAAAAEAD+UwYDpAd5YgEAAQCiB3li'
const CHANNEL = 'main'            
let UID;

const client = AgoraRTC.createClient({mode:'rtc',codec:'vp8'})

let localTracks = []
let remoteUsers = {}


let joinAndDisplayLocalStream =  async () => {
    UID = await client.join(APP_ID,CHANNEL,TOKEN,null)

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()    
     
    let player = ' < div class="video-container" id="user-container-${UID}">
                        <div class="video-player" id="user-${UID}"></div> 
                        <div class="username-wrapper"><span class="user-name">Dennis Ivanov</span></div>
                    </>'
}