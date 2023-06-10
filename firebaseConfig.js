
    // Initialize Firebase
    var firebaseConfig = {
      apiKey: "AIzaSyAtnvURUGMPryY7KJWc6i2YVKbSs5r6EhM",
  authDomain: "trackrecords-3a228.firebaseapp.com",
  projectId: "trackrecords-3a228",
  storageBucket: "trackrecords-3a228.appspot.com",
  messagingSenderId: "267445828891",
  appId: "1:267445828891:web:db04bbca72d8efd85227be",
  measurementId: "G-ZXG9GRGNVE"
    };
    
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();
const storageRef = storage.ref();

function uploadAudioFile(file) {
  const audioRef = storageRef.child(`audio/${file.name}`);
  return audioRef.put(file);
}

function saveTrackInfo(trackData) {
  const database = firebase.database();
  const trackRef = database.ref('tracks').push();
  return trackRef.set(trackData)
    .then(() => trackRef.key);
}

function saveTextElements(genre, key, rhythm, color, intensity, instrument, chords) {
  const trackData = {
    audioUrl: "",
    genre: genre,
    key: key,
    rhythm: rhythm,
    color: color,
    intensity: intensity,
    instrument: instrument,
    chords: chords,
    links: links
  };

  return saveTrackInfo(trackData);
}



function fetchTrackData() {
  const database = firebase.database();
  const trackRef = database.ref('tracks');

  return trackRef.once('value')
    .then(snapshot => snapshot.val())
    .catch(error => {
      console.error('Error fetching track data:', error);
      throw error;
    });
}

