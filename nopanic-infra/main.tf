provider "aws" {
  version = "~> 2.0"
  region  = var.region
}

terraform {
  backend "s3" {
    encrypt = true
    bucket  = "nopanic-terraform"
    key     = "nopanic/"
    region  = "eu-west-1"
  }
}
