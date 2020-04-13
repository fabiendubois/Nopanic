resource "aws_api_gateway_rest_api" "nopanic" {
  name = "nopanic"

  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

resource "aws_lambda_permission" "lambda_permission" {
  statement_id  = "AllowNopaApigatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = "nopanic-backend"
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.nopanic.execution_arn}/*/*/*"
}

resource "aws_api_gateway_deployment" "nopanic" {
  depends_on = [
    aws_api_gateway_integration.get_all_deployments,
    aws_api_gateway_integration.post_deployments,
    aws_api_gateway_integration.applications,
    aws_api_gateway_integration.environments,
  ]

  rest_api_id = aws_api_gateway_rest_api.nopanic.id
}

resource "aws_api_gateway_stage" "nopanic" {
  stage_name           = "dev"
  rest_api_id          = aws_api_gateway_rest_api.nopanic.id
  deployment_id        = aws_api_gateway_deployment.nopanic.id
  xray_tracing_enabled = true
}
