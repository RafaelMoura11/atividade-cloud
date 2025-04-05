variable "project_name" {
  description = "Nome do projeto/Resource Group"
  type        = string
  default     = "atividade-cloud"
}

variable "location" {
  description = "Localização do recurso na Azure"
  type        = string
  default     = "brazilsouth"
}

variable "db_username" {
  description = "Usuário administrador do MySQL"
  type        = string
  default     = "rafaeladmin"
}

variable "db_password" {
  description = "Senha do usuário administrador do MySQL"
  type        = string
  default     = "Rafael123@"
  sensitive   = true
}