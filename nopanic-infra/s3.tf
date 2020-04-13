resource "aws_s3_bucket" "nopanic-front" {
  bucket = "nopanic-front"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}