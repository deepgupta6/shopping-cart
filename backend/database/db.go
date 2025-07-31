package database

import (
	"fmt"
	"log"
	"shopping-cart/backend/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDB() {
	dsn := "host=localhost user=postgres password=deep dbname=shopping_cart port=5432 sslmode=disable"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}
	fmt.Println("Database connection successful")

	db.AutoMigrate(&models.User{}, &models.Item{}, &models.Cart{}, &models.Order{})

	DB = db
}
