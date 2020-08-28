

navigator.requestMIDIAccess()
.then(midiAccess=>{onSuccess(midiAccess)})
.catch(err=>{console.log(err)})




function onSuccess(midi) {

        for(input of midi.inputs.values()){
            input.onmidimessage = getNote
        }      
}

function getNote(message){
    var msg = message.data[0]
    var note = message.data[1]
    var n = document.getElementById('note')
    var f = document.getElementById('freq')

    if (msg>=144&&msg<=144+16){
        n.innerHTML = note
        f.innerHTML = (440*2**((note-69)/12)).toFixed(2)
    }
}