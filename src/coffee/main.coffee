chrome.extension.sendMessage {}, (response) ->
  readyStateCheckInterval = setInterval(->
      if document.readyState is "complete"
        clearInterval readyStateCheckInterval
        init()
  , 10)

init = ->
  console.log "Hello."