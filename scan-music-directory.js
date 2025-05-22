// // Alternative Node.js version if you prefer using Node.js instead of PHP
// const express = require("express")
// const fs = require("fs")
// const path = require("path")
// const app = express()
// const port = 3000

// // Serve static files
// app.use(express.static("./"))

// // API endpoint to scan the music directory
// app.get("/scan-music-directory", (req, res) => {
//   const musicDir = path.join(__dirname, "music")

//   // Create music directory if it doesn't exist
//   if (!fs.existsSync(musicDir)) {
//     fs.mkdirSync(musicDir, { recursive: true })
//     return res.json([])
//   }

//   try {
//     // Read all files in the music directory
//     const files = fs.readdirSync(musicDir)

//     // Filter for MP3 files only
//     const musicFiles = files
//       .filter((file) => path.extname(file).toLowerCase() === ".mp3")
//       .map((file) => {
//         const filePath = path.join(musicDir, file)
//         const stats = fs.statSync(filePath)

//         return {
//           name: file,
//           size: stats.size,
//           modified: stats.mtime.getTime(),
//         }
//       })

//     // Sort by modification time (newest first)
//     musicFiles.sort((a, b) => b.modified - a.modified)

//     res.json(musicFiles)
//   } catch (error) {
//     console.error("Error scanning music directory:", error)
//     res.status(500).json({ error: "Failed to scan music directory" })
//   }
// })

// // Start the server
// app.listen(port, () => {
//   console.log(`Music player server running at http://localhost:${port}`)
// })
// Simple Node.js server for testing locally
const express = require("express")
const fs = require("fs")
const path = require("path")
const app = express()
const port = 3000

// Serve static files
app.use(express.static("./"))

// API endpoint to scan the music directory
app.get("/scan-music-directory.php", (req, res) => {
  const musicDir = path.join(__dirname, "music")

  // Create music directory if it doesn't exist
  if (!fs.existsSync(musicDir)) {
    fs.mkdirSync(musicDir, { recursive: true })
    return res.json([])
  }

  try {
    // Read all files in the music directory
    const files = fs.readdirSync(musicDir)

    // Filter for MP3 files only
    const musicFiles = files
      .filter((file) => path.extname(file).toLowerCase() === ".mp3")
      .map((file) => {
        const filePath = path.join(musicDir, file)
        const stats = fs.statSync(filePath)

        return {
          name: file,
          size: stats.size,
          modified: stats.mtime.getTime(),
        }
      })

    // Sort by modification time (newest first)
    musicFiles.sort((a, b) => b.modified - a.modified)

    res.json(musicFiles)
  } catch (error) {
    console.error("Error scanning music directory:", error)
    res.status(500).json({ error: "Failed to scan music directory" })
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Music player server running at http://localhost:${port}`)
})
