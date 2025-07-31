package controllers

import (
	"net/http"
	"shopping-cart/backend/database"
	"shopping-cart/backend/models"

	"github.com/gin-gonic/gin"
)

func CreateCart(c *gin.Context) {
	user, _ := c.Get("user")

	var cart models.Cart
	if err := c.ShouldBindJSON(&cart); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	cart.UserID = user.(models.User).ID
	database.DB.Create(&cart)

	c.JSON(http.StatusOK, cart)
}

func GetCarts(c *gin.Context) {
	var carts []models.Cart
	database.DB.Find(&carts)
	c.JSON(http.StatusOK, carts)
}
