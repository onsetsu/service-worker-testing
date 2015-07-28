'use strict';

importScripts('serviceworker-cache-polyfill.js');

console.log('Service Worker: File Start');

// example usage:
self.addEventListener('install', function(event) {
    console.log('Service Worker: Install');
});

self.addEventListener('fetch', function(event) {
    console.log('Service Worker: Fetch', event.request);

    event.respondWith(
        fetch(event.request).then(
            function(response) {
                console.log('Service Worker: Response', response);
                return response;
            }
        )
    );
});

console.log('Service Worker: File End');
