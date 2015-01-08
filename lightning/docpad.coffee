# Define the Configuration
docpadConfig = {

    collections:
        jobs: ->
            @getCollection("html").findAllLive({isJob: true, isPublished: true})

	templateData:
		site:
			url: "http://www.smartliving.io"

	environments:
		development:
			templateData:
				site:
					url: "http://localhost:9778"

		production:
			templateData:
				site:
					url: "http://www.smartliving.io"
}

# Export the Configuration
module.exports = docpadConfig