# infra/main.tf

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "main" {
  name     = "atividade-cloud"
  location = "brazilsouth"
}

resource "azurerm_resource_group" "rg" {
  name     = var.project_name
  location = var.location
}

resource "azurerm_mysql_flexible_server" "db" {
  name                   = "atividade-cloud"
  resource_group_name    = azurerm_resource_group.rg.name
  location               = azurerm_resource_group.rg.location
  administrator_login    = var.db_username
  administrator_password = var.db_password
  version                = "8.0.21"
  sku_name               = "B_Standard_B1ms"

  storage {
    size_gb = 20
  }
}

resource "azurerm_app_service_plan" "plan" {
  name                = "atividade-cloud-plan"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  kind                = "Linux"

  sku {
    tier = "Basic"
    size = "B1"
  }

  reserved = true # Necessário para Linux
}

resource "azurerm_app_service" "app" {
  name                = var.project_name
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  app_service_plan_id = azurerm_app_service_plan.plan.id

  site_config {
    always_on = true
  }

  app_settings = {
    "DATABASE_HOST"     = azurerm_mysql_flexible_server.db.fqdn
    "DATABASE_USERNAME" = "${var.db_username}@${var.project_name}"
    "DATABASE_PASSWORD" = var.db_password
    "DATABASE_NAME"     = "atividade_db"
  }
}



