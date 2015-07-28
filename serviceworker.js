'use strict';

importScripts('serviceworker-cache-polyfill.js');

console.log('Service Worker: File Start');

// example usage:
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('demo-cache').then(function(cache) {
            return cache.put('/', new Response("From the cache!"));
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || new Response("Nothing in the cache for this request");
        })
    );
});

console.log('Service Worker: File End');