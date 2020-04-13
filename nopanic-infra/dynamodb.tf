resource "aws_dynamodb_table" "deployments" {
  name           = "Deployments"
  billing_mode   = "PROVISIONED"
  read_capacity  = 3
  write_capacity = 3
  hash_key       = "id"
  range_key      = "timestamp"

  attribute {
    name = "id"
    type = "S"
  }

  attribute {
    name = "environment"
    type = "S"
  }

  attribute {
    name = "timestamp"
    type = "N"
  }

  attribute {
    name = "application"
    type = "S"
  }

  global_secondary_index {
    name            = "ApplicationIndex"
    hash_key        = "application"
    range_key       = "timestamp"
    write_capacity  = 2
    read_capacity   = 2
    projection_type = "ALL"
  }

  global_secondary_index {
    name            = "EnvironmentIndex"
    hash_key        = "environment"
    write_capacity  = 2
    read_capacity   = 2
    projection_type = "ALL"
  }

}
