const DEBUGLOGS_PATTERN = /(https?:\/\/)?debuglogs\.org\/(?<path>.+)/

chrome.webRequest.onBeforeRequest.addListener(function(details) { 
  return {
    redirectUrl: "https://debuglogs.app/" + extractPath(details.url)
  }
}, { urls: ["*://debuglogs.org/*"] }, ["blocking"]);

function extractPath(url) {
  let result = DEBUGLOGS_PATTERN.exec(url)

  if (result) {
    return result.groups.path;
  } else {
    return ''
  }
}
