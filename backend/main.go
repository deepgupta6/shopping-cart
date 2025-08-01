package main

import (
	"log"
	"os"
	"shopping-cart/backend/database"
	"shopping-cart/backend/routes"
)

func main() {
	database.InitDB()
	r := routes.SetupRouter()

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" // fallback for local dev
	}
	log.Println("Running on port:", port)
	r.Run(":" + port)
}
