const getEquivalent = (note) => {
    let keys = {
        "C#": "Db",
        "D#": "Eb",
        "F#": "Gb",
        "G#": "Ab",
        "A#": "Bb"
    };

    for(let key in  keys) {
        if(note === key) return keys[key];
        else if(note === keys[key]) return key;
    }
};

console.log(getEquivalent("Ab"));