# Define the Configuration
docpadConfig = {
    collections:
        jobs: ->
            @getCollection("html").findAllLive({isJob:true})
}

# Export the Configuration
module.exports = docpadConfig