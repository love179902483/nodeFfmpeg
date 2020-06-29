var ffmpeg = require('fluent-ffmpeg');
var path = require('path');
ffmpeg.setFfmpegPath(path.join(__dirname, '/ffmpeg/bin/ffmpeg.exe') );
ffmpeg.setFfprobePath(path.join(__dirname, '/ffmpeg/bin/ffprobe.exe') );

const outputImgPath = path.join(__dirname, 'output.png');
const mp4Path = path.join(__dirname, 'test.mp4');
const smallPath = path.join(__dirname, 'small.mp4');
// ffmpeg({source: mp4Path})
//     .withSize('500x100')
//     .takeScreenshots({
//         count:1,
//         timemarks: ['10%'],
//         filename: 'test.png',
//         size: '500x?'
//     })
//     .on('error', function(err) {
//         console.log('An error occurred: ' + err.message);
//     })
//     .on('end', function() {
//         console.log('Processing finished !');
//     })

ffmpeg({source: mp4Path})
    .size('300x?')
    .aspect('4:3')
    .autopad('white')
    .output(smallPath)
    .on('end',()=>{
        console.log('完成了')
    })
    .run()
    