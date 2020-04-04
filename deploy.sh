docker build -t drew2222222/react-signup-form:latest -t drew2222222/react-signup-form:$SHA -f ./Dockerfile ./

docker push drew2222222/react-signup-form:latest

docker push drew2222222/react-signup-form:$SHA

kubectl apply -f k8s
kubectl set image deployments/client-deployment client=drew2222222/react-signup-form:$SHA
