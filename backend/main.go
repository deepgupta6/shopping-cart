package main

import (
	"shopping-cart/backend/database"
	"shopping-cart/backend/routes"
)

func main() {
	database.InitDB()
	r := routes.SetupRouter()

	r.Run(":8080")
}
