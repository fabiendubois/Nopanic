resource "aws_lambda_function" "nopanic-backend" {
  filename      = "../nopanic-back/nopanic-back.zip"
  function_name = "nopanic-backend"
  role          = aws_iam_role.nopanic.arn
  handler       = "src/main.handler"
  runtime       = "nodejs12.x"
  timeout       = 900

  environment {
    variables = {
      DB_NAME = aws_dynamodb_table.deployments.name
    }
  }
}
