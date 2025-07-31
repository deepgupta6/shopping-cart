package models

import "gorm.io/gorm"

type Cart struct {
	gorm.Model
	UserID uint
	Items  []Item `gorm:"many2many:cart_items;"`
	Status string
}
