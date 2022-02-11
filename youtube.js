const fs = require('fs-extra');
const youtubedl = require("youtube-dl-exec");
// const youtubedl = require("@distube/youtube-dl");

const downloadVideo = (video) => {
  return youtubedl(video, {
    dumpSingleJson: true,
    noWarnings: true,
    noCallHome: true,
    noCheckCertificate: true,
    preferFreeFormats: true,
    youtubeSkipDashManifest: true,
    referer: video,
  })
    .then((res) => {
        console.log(res);
        fs.outputFileSync('youtube-out.json', JSON.stringify(res));
    })
    .catch((err) => {
        console.log(err);
        fs.writeFileSync('youtube-err.json', JSON.stringify(err));
    });
};

downloadVideo('https://www.youtube.com/watch?v=VMskuNmQBqE');

// const subprocess = youtubedl.raw('https://www.youtube.com/watch?v=VMskuNmQBqE', { dumpSingleJson: true })
// console.log(`Running subprocess as ${subprocess.pid}`)
// subprocess.stdout.pipe(fs.createWriteStream('stdout.txt'))
// subprocess.stderr.pipe(fs.createWriteStream('stderr.txt'))
// setTimeout(subprocess.cancel, 30000)


// https://npm.io/package/@distube/youtube-dl
// https://npm.io/search/keyword:youtube-downloader
// https://www.npmjs.com/package/youtube-dl-exec
// https://javascript.plainenglish.io/how-to-create-a-youtube-downloader-with-node-js-and-react-a86d7586fcc8
// https://dev.to/pprathameshmore/youtube-downloader-with-node-js-and-react-js-48jl


// https://soshace.com/building-a-simple-cli-youtube-video-downloader-in-nodejs/
// https://www.npmjs.com/package/ora
// https://github.com/tj/commander.js
