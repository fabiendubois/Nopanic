resource "aws_iam_role" "nopanic" {
  name = "nopanic"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "nopanic-AWSLambdaFullAccess" {
  role       = aws_iam_role.nopanic.name
  policy_arn = "arn:aws:iam::aws:policy/AWSLambdaFullAccess"
}

resource "aws_iam_role_policy_attachment" "nopanic-AmazonDynamoDBFullAccess" {
  role       = aws_iam_role.nopanic.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess"
}

resource "aws_iam_role_policy_attachment" "nopanic-CloudWatchLogsFullAccess" {
  role       = aws_iam_role.nopanic.name
  policy_arn = "arn:aws:iam::aws:policy/CloudWatchLogsFullAccess"
}

resource "aws_iam_role_policy_attachment" "nopanic-AmazonAPIGatewayInvokeFullAccess" {
  role       = aws_iam_role.nopanic.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonAPIGatewayInvokeFullAccess"
}
