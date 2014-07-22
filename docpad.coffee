# Define the Configuration
docpadConfig = {

    collections:
        jobs: ->
            @getCollection("html").findAllLive({isJob:true})

	templateData:
		site:
			url: "http://www.allthingstalk.com"

	environments:
		development:
			templateData:
				site:
					url: "http://localhost:9778"
}

# Export the Configuration
module.exports = docpadConfig