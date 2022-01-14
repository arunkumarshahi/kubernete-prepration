# create volume in docker desktop

`docker volume create test-mongo-2`

# inspect volume in docker desktop

`docker inspect test-mongo-2`

# physical location of volume

\\wsl$\docker-desktop-data\version-pack-data\community\docker\volumes\test-mongo-2_data

# to delete the container

`kubectl delete -f pvc-test.yaml`
` kubectl apply -f pvc-test.yaml`

# to access the file imside the container

`kubectl exec -it --namespace=default pod/task-pv-pod -- bash`

look the mount path as mentioned in pvc-test.yaml

- mountPath: "/usr/share/nginx/html"

# install vi editor in container

`apt-get update && apt-get install -y vim `

# to access the nginx from pod using port forwarding

`kubectl port-forward pod/task-pv-pod 90:80`

## important link --> https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/
