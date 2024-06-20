package main

import "github.com/gofiber/fiber/v2"

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Test 1243434")
	})

	app.Get("/:link", func(c *fiber.Ctx) error {

		return c.SendString("watch video")
	})

	app.Listen(":8000")
}
