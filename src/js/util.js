export function hasLoaded(callback) {
  if (document.getElementsByClassName('region-main').length) {
    return callback();
  }
  setTimeout(hasLoaded.bind(null, callback), 50);
}
