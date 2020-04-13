resource "aws_api_gateway_resource" "environments" {
  rest_api_id = aws_api_gateway_rest_api.nopanic.id
  parent_id   = aws_api_gateway_rest_api.nopanic.root_resource_id
  path_part   = "environments"
}

resource "aws_api_gateway_method" "get_all_environments" {
  rest_api_id   = aws_api_gateway_rest_api.nopanic.id
  resource_id   = aws_api_gateway_resource.environments.id
  http_method   = "GET"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "environments" {
  rest_api_id = aws_api_gateway_rest_api.nopanic.id
  resource_id = aws_api_gateway_resource.environments.id
  http_method = aws_api_gateway_method.get_all_environments.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.nopanic-backend.invoke_arn
}
