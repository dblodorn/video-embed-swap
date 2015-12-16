/*!
 * Video Embed Swap - V.1.0
 * Dain Blodorn / db13.us
 * Automatically converts youtube & vimeo url to embed code.
 * License: MIT
 *
 * | Markup:
 * | <div id="video-url">{{video_url}}</div>
 * | <div id="video-player"></div>
 *
 */

( function( window ) {

'use strict';

// Check if on page with an embed
var video = document.getElementById('video-url');

if (typeof(video) !== 'undefined' && video !== null) {

  // Variables
  var videoUrl =              video.innerHTML,
  
  // Embed Elements
      videoEmbedContainer =   document.getElementById('video-player'),
      videoPlayerCss =        'width:100%;position:relative;padding-bottom:56.25%;height:0;',
      iframeCss =             'position:absolute;top:0;left:0;width:100%;height:100%;',

  // Embed code
      youtubeEmbed =          '<iframe src="https://www.youtube.com/embed/',
      vimeoEmbed =            '<iframe src="https://player.vimeo.com/video/',
      youtubeEmbedEnd =       '?autoplay=1&rel=0&showinfo=0&fs=1&modestbranding=0&controls=2" frameborder="0" allowfullscreen style="'+iframeCss+'"></iframe>',
      vimeoEmbedEnd =         '?autoplay=1&title=0&byline=0&portrait=0&badge=0" frameborder="0" style="'+iframeCss+'"></iframe>';

  // Set Video Player CSS
  video.style.display = 'none';
  videoEmbedContainer.style.cssText = videoPlayerCss;

  // Youtube Swap
  if (videoUrl.indexOf("youtube") !==-1) {
    var youtubeIdLong = videoUrl.split('watch?v=')[1];
    videoEmbedContainer.innerHTML = (youtubeEmbed+youtubeIdLong+youtubeEmbedEnd);
  } 
  // Youtube Shortlink Swap
  else if (videoUrl.indexOf('youtu.be') !==-1) {
    var youtubeIdShort = videoUrl.split('youtu.be/')[1];
    videoEmbedContainer.innerHTML = (youtubeEmbed+youtubeIdShort+youtubeEmbedEnd);
  } 
  // Vimeo Swap
  else if (videoUrl.indexOf("vimeo") !==-1) {
    var vimeoId = videoUrl.split('vimeo.com/')[1];
    videoEmbedContainer.innerHTML = (vimeoEmbed+vimeoId+vimeoEmbedEnd);
  }
}

})( window );
