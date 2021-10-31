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
# to get details of pod 
```
>kubectl get pod nginx-deployment-66b6c48dd5-pjzdg -o yaml

>kubectl describe pod nginx
```
# to access directory or details inside pod
```
kubectl exec my-nginx -it sh
```
# check liveness probe
```
kubectl describe pod nginx
```
![image](https://user-images.githubusercontent.com/37396796/139572957-6dad9302-71c5-4efd-b12a-c9f1b4016bc0.png)
