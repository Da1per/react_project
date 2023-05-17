import { createSlice } from '@reduxjs/toolkit'
console.log('dfgdfg')
const initialState = {
    arrMus: [
        {   
            id:0,   
            name_Track: "Orex47-Judas(original mix)",
            creator: "Orex47",
            years:"2023",
            src: "/react_project/static/media/Orex47-Judas(original mix).d2d930ea0a5360262cf5.mp3",
            img: "./images/IMG_20160623_142001_3CS.jpg",
            genres: "Progressive House",
            duration_fix: "4:09"
        },
        {   
            id:1,
            name_Track: "Orex47-Alisher Sas",
            creator: "Orex47",
            years:"2023",
            src: "/react_project/static/media/Orex47-Alisher Sas.4b9becfb499ae3ace19c.mp3",
            img: "./images/IMG_20160623_142001_3CS.jpg",
            genres: "Ridim trap",
            duration_fix: "1:01"
        },
        {   
            id:2,
            name_Track: "Orex47- Get riz",
            creator: "Orex47",
            years:"2023",
            src: "/react_project/static/media/Orex47- Get riz.8b1dff297bb43bf7d2fa.mp3",
            img: "./images/IMG_20160623_142001_3CS.jpg",
            genres: "Pop Rock",
            duration_fix: "1:45"
        },
        {   
            id:3,
            name_Track: "Orex47- Root fl",
            creator: "Orex47",
            years:"2023",
            src: "/react_project/static/media/Orex47- Root fl.85b81230607bc1d0aa27.mp3",
            img: "./images/IMG_20160623_142001_3CS.jpg",
            genres: "Neurofanck",
            duration_fix: "1:41"
        },
        {   
            id:4,
            name_Track: "Orex47-Blow back",
            creator: "Orex47",
            years:"2023",
            src: "/react_project/static/media/Orex47-Blow back.cb7e1bedd30d73e5cd0e.mp3",
            img: "./images/IMG_20160623_142001_3CS.jpg",
            genres: "EDM",
            duration_fix: "1:16"
        },
        {   
            id:5,
            name_Track: "Orex47-Comming",
            creator: "Orex47",
            years:"2023",
            src: "/react_project/static/media/Orex47-Comming.a72e72450ab832e019cb.mp3",
            img: "./images/IMG_20160623_142001_3CS.jpg",
            genres: "Slap House",
            duration_fix: "1:29"
        },
        {   
            id:6,
            name_Track: "Orex47-Cyber pool",
            creator: "Orex47",
            years:"2023",
            src: "/react_project/static/media/Orex47-Cyber pool.287dd47afb3e47a0bd44.mp3",
            img: "./images/IMG_20160623_142001_3CS.jpg",
            genres: "G-House",
            duration_fix: "1:10"
        },
        {   
            id:7,
            name_Track: "Orex47-Dark",
            creator: "Orex47",
            years:"2023",
            src:  "/react_project/static/media/Orex47-Dark.82f71c437f12857ad967.mp3",
            img: "./images/IMG_20160623_142001_3CS.jpg",
            genres: "Techno",
            duration_fix: "0:54"
        },
        {   
            id:8,
            name_Track: "Orex47-Down",
            creator: "Orex47",
            years:"2023",
            src: "/react_project/static/media/Orex47-Down.5beb799471bc9765f9bf.mp3",
            img: "./images/IMG_20160623_142001_3CS.jpg",
            genres: "Future House",
            duration_fix: "2:03"
        },
        {   
            id:9,
            name_Track: "Orex47-Goddil",
            creator: "Orex47",
            years:"2023",
            src: "/react_project/static/media/Orex47-Goddil.3ee7e3e93d62e599b816.mp3",
            img: "./images/IMG_20160623_142001_3CS.jpg",
            genres: "Trap",
            duration_fix: "1:11"
        },
        {   
            id:10,
            name_Track: "Orex47-Space ship",
            creator: "Orex47",
            years:"2023",
            src: "/react_project/static/media/Orex47-Space ship.36a9d6675e7d8dbe9a2e.mp3",
            img: "./images/IMG_20160623_142001_3CS.jpg",
            genres: "Electronic",
            duration_fix: "1:36"
        },
        {   
            id:11,
            name_Track: "sound1",
            creator: "Orex47",
            years:"2023",
            src: "/react_project/static/media/sound1.c445dfdcd2417a0e7491.wav",
            img: "./images/IMG_20160623_142001_3CS.jpg",
            genres: "DnB",
            duration_fix: "0:11"
        }
    ],
    idMus:null,
    afterIdMus:null,  
    curMus:null,
    isPlayMus:false,
    playerHiden:true
    
}
const musicSlice = createSlice ({
    name: 'musics',
    initialState,
    reducers:{
        toInicel(state,action){
            const musVal = action.payload
            state.curMus = state.arrMus[musVal].src
        },
        toPlayMusFromList(state, action){
            const musVal = action.payload
            state.idMus = musVal[0]
            state.curMus = state.arrMus[musVal[0]].src
            state.isPlayMus = musVal[1]
            state.playerHiden = false
        },
        toDelMus(state, action){
            state.idMus = null
            state.curMus = null
            state.afterIdMus =null
            state.isPlayMus = false
            state.playerHiden = true
        },
        toPlayMus(state, action){
            const play = action.payload
            state.isPlayMus = play
        },
        toSwithchMus(state, action){
            const play = action.payload
            state.afterIdMus = play
        },
        toForceSwithchMus(state, action){
            const play = action.payload
            state.idMus = play
        }
    }
})
export const {
    toInicel,
    toSwithchMus,
    toPlayMus,
    toDelMus,
    toPlayMusFromList,
    toForceSwithchMus
  } = musicSlice.actions
export default musicSlice.reducer
