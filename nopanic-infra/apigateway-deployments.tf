resource "aws_api_gateway_resource" "deployments" {
  rest_api_id = aws_api_gateway_rest_api.nopanic.id
  parent_id   = aws_api_gateway_rest_api.nopanic.root_resource_id
  path_part   = "deployments"
}

resource "aws_api_gateway_method" "get_all_deployments" {
  rest_api_id   = aws_api_gateway_rest_api.nopanic.id
  resource_id   = aws_api_gateway_resource.deployments.id
  http_method   = "GET"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "get_all_deployments" {
  rest_api_id = aws_api_gateway_rest_api.nopanic.id
  resource_id = aws_api_gateway_resource.deployments.id
  http_method = aws_api_gateway_method.get_all_deployments.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.nopanic-backend.invoke_arn
}

resource "aws_api_gateway_method" "post_deployments" {
  rest_api_id   = aws_api_gateway_rest_api.nopanic.id
  resource_id   = aws_api_gateway_resource.deployments.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "post_deployments" {
  rest_api_id = aws_api_gateway_rest_api.nopanic.id
  resource_id = aws_api_gateway_resource.deployments.id
  http_method = aws_api_gateway_method.post_deployments.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.nopanic-backend.invoke_arn
}
