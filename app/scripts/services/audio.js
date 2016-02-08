'use strict';

/**
 * @ngdoc service
 * @name bahndingApp.audio
 * @description
 * # audio
 * Factory in the bahndingApp.
 */
angular.module('bahndingApp')
  .factory('audio', function ($document) {
    // Service logic
    var audioElement = $document[0].createElement('audio');

    // Public API here
    return {
        audioElement: audioElement,

        play: function(filename) {
            audioElement.src = filename;
            audioElement.play();     //  <-- Thats all you need
        }
    };
  });
