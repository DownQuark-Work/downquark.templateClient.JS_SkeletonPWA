// DEBUG:
//  chrome://inspect/#service-workers
//  chrome://serviceworker-internals

// =--> https://serviceworke.rs/
  // https://serviceworke.rs/api-analytics.html
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker

// https://developers.google.com/web/fundamentals/primers/service-workers
// https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle
// https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/
// https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#serving-suggestions
// https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-falling-back-to-cache

// https://alistapart.com/article/application-cache-is-a-douchebag/
// https://jakearchibald.github.io/isserviceworkerready/resources.html
// https://jakearchibald.com/2016/caching-best-practices/

// https://codelabs.developers.google.com/codelabs/your-first-pwapp/#7

/* DEBUG
- Once a service worker has been unregistered, it may remain listed until its containing browser window is closed.
- If multiple windows to your app are open, a new service worker will not take effect until all windows have been reloaded and updated to the latest service worker.
- Unregistering a service worker does not clear the cache!
- If a service worker exists and a new service worker is registered, the new service worker won't take control until the page is reloaded, unless you take immediate control.
*/

/*
Other use case ideas
Service workers are also intended to be used for such things as:

Background data synchronization.
Responding to resource requests from other origins.
Receiving centralized updates to expensive-to-calculate data such as geolocation or gyroscope, so multiple pages can make use of one set of data.
Client-side compiling and dependency management of CoffeeScript, less, CJS/AMD modules, etc. for development purposes.
Hooks for background services.
Custom templating based on certain URL patterns.
Performance enhancements, for example pre-fetching resources that the user is likely to need in the near future, such as the next few pictures in a photo album.
In the future, service workers will be able to do a number of other useful things for the web platform that will bring it closer towards native app viability. Interestingly, other specifications can and will start to make use of the service worker context, for example:

Background synchronization: Start up a service worker even when no users are at the site, so caches can be updated, etc.
Reacting to push messages: Start up a service worker to send users a message to tell them new content is available.
Reacting to a particular time & date.
Entering a geo-fence.
*/