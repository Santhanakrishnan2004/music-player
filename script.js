// // DOM Elements
// const audio = document.getElementById("audio")
// const playBtn = document.getElementById("play")
// const prevBtn = document.getElementById("prev")
// const nextBtn = document.getElementById("next")
// const progress = document.getElementById("progress")
// const progressContainer = document.querySelector(".progress-bar")
// const currentTimeEl = document.getElementById("current-time")
// const durationEl = document.getElementById("duration")
// const volumeSlider = document.getElementById("volume")
// const songTitle = document.getElementById("song-title")
// const songArtist = document.getElementById("song-artist")
// const albumArt = document.getElementById("album-art")
// const playlist = document.getElementById("playlist")
// const fileInput = document.getElementById("file-input")
// const playlistStatus = document.getElementById("playlist-status")

// // State
// let songs = []
// let currentSongIndex = 0
// let isPlaying = false

// // Initialize the app
// function init() {
//   // Set initial volume
//   audio.volume = volumeSlider.value

//   // Set up file input listener
//   fileInput.addEventListener("change", handleFileSelect)

//   // Set up audio event listeners
//   audio.addEventListener("timeupdate", updateProgress)
//   audio.addEventListener("ended", nextSong)

//   // Set up control button listeners
//   playBtn.addEventListener("click", togglePlay)
//   prevBtn.addEventListener("click", prevSong)
//   nextBtn.addEventListener("click", nextSong)

//   // Set up progress bar listener
//   progressContainer.addEventListener("click", setProgress)

//   // Set up volume slider listener
//   volumeSlider.addEventListener("input", () => {
//     audio.volume = volumeSlider.value
//   })
// }

// // Handle file selection
// function handleFileSelect(event) {
//   const files = event.target.files

//   if (files.length === 0) return

//   // Clear existing songs
//   songs = []

//   // Process each selected file
//   Array.from(files).forEach((file, index) => {
//     if (file.type === "audio/mpeg" || file.name.endsWith(".mp3")) {
//       // Create object URL for the file
//       const songUrl = URL.createObjectURL(file)

//       // Extract filename without extension to use as title
//       const fileName = file.name
//       const title = fileName.replace(/\.[^/.]+$/, "") // Remove file extension

//       // Add song to the list
//       songs.push({
//         title: title,
//         artist: "Unknown Artist",
//         path: songUrl,
//         cover: "icons/music-placeholder.png",
//         duration: 0,
//         file: file,
//       })
//     }
//   })

//   // Update UI
//   if (songs.length > 0) {
//     updatePlaylist()
//     currentSongIndex = 0
//     loadSong(songs[currentSongIndex])
//     playlistStatus.style.display = "none"
//   } else {
//     playlistStatus.textContent = "No valid MP3 files selected"
//     playlistStatus.style.display = "block"
//   }
// }

// // Load song details
// function loadSong(song) {
//   songTitle.textContent = song.title
//   songArtist.textContent = song.artist
//   albumArt.src = song.cover
//   audio.src = song.path

//   // Update duration once the audio metadata is loaded
//   audio.addEventListener(
//     "loadedmetadata",
//     () => {
//       song.duration = audio.duration
//       durationEl.textContent = formatTime(audio.duration)
//       updatePlaylistActiveItem()
//     },
//     { once: true },
//   )
// }

// // Update the playlist UI
// function updatePlaylist() {
//   playlist.innerHTML = ""

//   songs.forEach((song, index) => {
//     const li = document.createElement("li")
//     li.dataset.index = index
//     li.className = index === currentSongIndex ? "active" : ""

//     const songIndex = document.createElement("span")
//     songIndex.className = "song-index"
//     songIndex.textContent = (index + 1).toString().padStart(2, "0")

//     const songInfo = document.createElement("span")
//     songInfo.className = "song-info"
//     songInfo.textContent = song.title

//     const songDuration = document.createElement("span")
//     songDuration.className = "song-duration"
//     songDuration.textContent = formatTime(song.duration)

//     li.appendChild(songIndex)
//     li.appendChild(songInfo)
//     li.appendChild(songDuration)

//     li.addEventListener("click", () => {
//       currentSongIndex = index
//       loadSong(songs[currentSongIndex])
//       playSong()
//     })

//     playlist.appendChild(li)
//   })
// }

// // Update the active item in the playlist
// function updatePlaylistActiveItem() {
//   const items = playlist.querySelectorAll("li")
//   items.forEach((item, index) => {
//     if (index === currentSongIndex) {
//       item.classList.add("active")
//     } else {
//       item.classList.remove("active")
//     }
//   })
// }

// // Toggle play/pause
// function togglePlay() {
//   if (isPlaying) {
//     pauseSong()
//   } else {
//     playSong()
//   }
// }

// // Play song
// function playSong() {
//   isPlaying = true
//   playBtn.innerHTML = '<i class="fas fa-pause"></i>'
//   audio.play()
// }

// // Pause song
// function pauseSong() {
//   isPlaying = false
//   playBtn.innerHTML = '<i class="fas fa-play"></i>'
//   audio.pause()
// }

// // Previous song
// function prevSong() {
//   if (songs.length === 0) return

//   currentSongIndex--
//   if (currentSongIndex < 0) {
//     currentSongIndex = songs.length - 1
//   }
//   loadSong(songs[currentSongIndex])
//   playSong()
// }

// // Next song
// function nextSong() {
//   if (songs.length === 0) return

//   currentSongIndex++
//   if (currentSongIndex > songs.length - 1) {
//     currentSongIndex = 0
//   }
//   loadSong(songs[currentSongIndex])
//   playSong()
// }

// // Update progress bar
// function updateProgress(e) {
//   const { duration, currentTime } = e.srcElement
//   const progressPercent = (currentTime / duration) * 100
//   progress.style.width = `${progressPercent}%`

//   // Update time displays
//   currentTimeEl.textContent = formatTime(currentTime)
//   durationEl.textContent = formatTime(duration)
// }

// // Set progress bar
// function setProgress(e) {
//   const width = this.clientWidth
//   const clickX = e.offsetX
//   const duration = audio.duration
//   audio.currentTime = (clickX / width) * duration
// }

// // Format time in minutes and seconds
// function formatTime(seconds) {
//   if (isNaN(seconds)) return "0:00"

//   const mins = Math.floor(seconds / 60)
//   const secs = Math.floor(seconds % 60)
//   return `${mins}:${secs.toString().padStart(2, "0")}`
// }

// // Initialize the app
// init()
// DOM Elements
const audio = document.getElementById("audio")
const playBtn = document.getElementById("play")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")
const progress = document.getElementById("progress")
const progressContainer = document.querySelector(".progress-bar")
const currentTimeEl = document.getElementById("current-time")
const durationEl = document.getElementById("duration")
const volumeSlider = document.getElementById("volume")
const songTitle = document.getElementById("song-title")
const songArtist = document.getElementById("song-artist")
const albumArt = document.getElementById("album-art")
const playlist = document.getElementById("playlist")
const playlistStatus = document.getElementById("playlist-status")
const debugOutput = document.getElementById("debug-output")

// State
let songs = []
let currentSongIndex = 0
let isPlaying = false

// Initialize the app
async function init() {
  try {
    // Set initial volume
    audio.volume = volumeSlider.value

    // Show loading status
    playlistStatus.textContent = "Loading songs..."

    // Load songs from the music directory
    await loadSongs()

    // Load the first song if songs are available
    if (songs.length > 0) {
      // Hide the status message
      playlistStatus.style.display = "none"

      // Update the playlist UI
      updatePlaylist()

      // Load the first song
      loadSong(songs[currentSongIndex])

      debugOutput.innerHTML = `Successfully loaded ${songs.length} songs`
    } else {
      playlistStatus.textContent = "No songs found. Add MP3 files to the music folder."
      debugOutput.innerHTML = "No songs found in the music directory"
    }
  } catch (error) {
    console.error("Error initializing app:", error)
    playlistStatus.textContent = `Error: ${error.message}. Check console for details.`
    debugOutput.innerHTML = `Error: ${error.message}`
  }

  // Set up event listeners
  setupEventListeners()
}

// Set up event listeners
function setupEventListeners() {
  // Play/pause button
  playBtn.addEventListener("click", () => {
    if (isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })

  // Previous and next buttons
  prevBtn.addEventListener("click", prevSong)
  nextBtn.addEventListener("click", nextSong)

  // Audio events
  audio.addEventListener("timeupdate", updateProgress)
  audio.addEventListener("ended", nextSong)

  // Progress bar
  progressContainer.addEventListener("click", setProgress)

  // Volume slider
  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value
  })

  // Refresh button
  document.getElementById("refresh-btn").addEventListener("click", refreshSongs)
}

// Refresh songs list
async function refreshSongs() {
  try {
    debugOutput.innerHTML = "Refreshing song list..."
    await loadSongs()

    if (songs.length > 0) {
      updatePlaylist()
      debugOutput.innerHTML = `Refreshed: Found ${songs.length} songs`
      playlistStatus.style.display = "none"
    } else {
      playlistStatus.textContent = "No songs found. Add MP3 files to the music folder."
      playlistStatus.style.display = "block"
      debugOutput.innerHTML = "No songs found after refresh"
    }
  } catch (error) {
    debugOutput.innerHTML = `Error refreshing: ${error.message}`
  }
}

// Load songs from the music directory
async function loadSongs() {
  try {
    // Fetch the list of music files from the server with cache busting
    const timestamp = new Date().getTime()
    const response = await fetch(`scan-music-directory.php?t=${timestamp}`)

    if (!response.ok) {
      throw new Error(`Server error: ${response.status} ${response.statusText}`)
    }

    const responseText = await response.text()

    try {
      // Try to parse the response as JSON
      const musicFiles = JSON.parse(responseText)

      if (!Array.isArray(musicFiles)) {
        throw new Error("Server did not return an array")
      }

      // Process each music file
      songs = musicFiles.map((file, index) => {
        // Extract filename without extension to use as title
        const filename = file.name
        const title = filename.replace(/\.[^/.]+$/, "") // Remove file extension

        return {
          title: title,
          artist: "Unknown Artist",
          path: `music/${encodeURIComponent(filename)}`, // Encode the filename to handle spaces and special characters
          cover: "icons/music-placeholder.png",
          duration: 0, // Will be updated when audio loads
          index: index,
        }
      })

      return songs
    } catch (jsonError) {
      // If JSON parsing fails, show the raw response
      debugOutput.innerHTML = `Invalid JSON response: ${responseText.substring(0, 100)}...`
      throw new Error("Failed to parse server response as JSON")
    }
  } catch (error) {
    console.error("Error loading songs:", error)
    debugOutput.innerHTML = `Error: ${error.message}`
    songs = [] // Reset songs array on error
    throw error
  }
}

// Load song details
function loadSong(song) {
  songTitle.textContent = song.title
  songArtist.textContent = song.artist
  albumArt.src = song.cover
  audio.src = song.path

  // Update duration once the audio metadata is loaded
  audio.addEventListener(
    "loadedmetadata",
    () => {
      song.duration = audio.duration
      durationEl.textContent = formatTime(audio.duration)
      updatePlaylist()
    },
    { once: true },
  )

  // Handle audio loading errors
  audio.addEventListener(
    "error",
    (e) => {
      console.error("Error loading audio:", e)
      debugOutput.innerHTML = `Error loading audio: ${e.message || "Unknown error"}`
    },
    { once: true },
  )

  // Update the playlist to highlight the current song
  updatePlaylistActiveItem()
}

// Update the playlist UI
function updatePlaylist() {
  playlist.innerHTML = ""

  songs.forEach((song, index) => {
    const li = document.createElement("li")
    li.dataset.index = index
    li.className = index === currentSongIndex ? "active" : ""

    const songIndex = document.createElement("span")
    songIndex.className = "song-index"
    songIndex.textContent = (index + 1).toString().padStart(2, "0")

    const songInfo = document.createElement("span")
    songInfo.className = "song-info"
    songInfo.textContent = song.title

    const songDuration = document.createElement("span")
    songDuration.className = "song-duration"
    songDuration.textContent = formatTime(song.duration)

    li.appendChild(songIndex)
    li.appendChild(songInfo)
    li.appendChild(songDuration)

    li.addEventListener("click", () => {
      currentSongIndex = index
      loadSong(songs[currentSongIndex])
      playSong()
    })

    playlist.appendChild(li)
  })
}

// Update the active item in the playlist
function updatePlaylistActiveItem() {
  const items = playlist.querySelectorAll("li")
  items.forEach((item, index) => {
    if (index === currentSongIndex) {
      item.classList.add("active")
    } else {
      item.classList.remove("active")
    }
  })
}

// Play song
function playSong() {
  const playPromise = audio.play()

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        isPlaying = true
        playBtn.innerHTML = '<i class="fas fa-pause"></i>'
      })
      .catch((error) => {
        console.error("Error playing audio:", error)
        debugOutput.innerHTML = `Error playing: ${error.message}`
        isPlaying = false
        playBtn.innerHTML = '<i class="fas fa-play"></i>'
      })
  }
}

// Pause song
function pauseSong() {
  isPlaying = false
  playBtn.innerHTML = '<i class="fas fa-play"></i>'
  audio.pause()
}

// Previous song
function prevSong() {
  currentSongIndex--
  if (currentSongIndex < 0) {
    currentSongIndex = songs.length - 1
  }
  loadSong(songs[currentSongIndex])
  playSong()
}

// Next song
function nextSong() {
  currentSongIndex++
  if (currentSongIndex > songs.length - 1) {
    currentSongIndex = 0
  }
  loadSong(songs[currentSongIndex])
  playSong()
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement
  const progressPercent = (currentTime / duration) * 100
  progress.style.width = `${progressPercent}%`

  // Update time displays
  currentTimeEl.textContent = formatTime(currentTime)
  durationEl.textContent = formatTime(duration)
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration
  audio.currentTime = (clickX / width) * duration
}

// Format time in minutes and seconds
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00"

  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, "0")}`
}

// Initialize the app
init()
