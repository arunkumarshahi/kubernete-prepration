# kubernete-prepration

create pod directly - imparative way 
``` 
kubectl run my-nginx --image=nginx:alpine 
kubectl get pods
kubectl port-forward  my-nginx 8081:80
kubectl delete pod  my-nginx

```
# perform dry run to validate yaml

```
kubectl create -f nginx.yaml --dry-run=client  --validate=true

```
# to create/ update pod 
```
>kubectl apply -f nginx.yaml --save-config
```
