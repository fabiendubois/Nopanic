resource "aws_api_gateway_resource" "applications" {
  rest_api_id = aws_api_gateway_rest_api.nopanic.id
  parent_id   = aws_api_gateway_rest_api.nopanic.root_resource_id
  path_part   = "applications"
}

resource "aws_api_gateway_method" "get_all_applications" {
  rest_api_id   = aws_api_gateway_rest_api.nopanic.id
  resource_id   = aws_api_gateway_resource.applications.id
  http_method   = "GET"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "applications" {
  rest_api_id = aws_api_gateway_rest_api.nopanic.id
  resource_id = aws_api_gateway_resource.applications.id
  http_method = aws_api_gateway_method.get_all_applications.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.nopanic-backend.invoke_arn
}
