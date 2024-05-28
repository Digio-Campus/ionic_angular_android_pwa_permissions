Uso de permisos en android y PWA usando un proyecto ionic en angular.


### PERMISOS ANDROID

Añadimos el plugin de cordova para acceder a los permisos de android:

```
cordova plugin add cordova-plugin-android-permissions
```

#### API

```
var permissions = cordova.plugins.permissions;
permissions.checkPermission(permission, successCallback, errorCallback);
permissions.requestPermission(permission, successCallback, errorCallback);
permissions.requestPermissions(permissions, successCallback, errorCallback);
```

Ejemplos de permisos

```
permissions.ACCESS_COARSE_LOCATION
permissions.CAMERA
permissions.GET_ACCOUNTS
permissions.READ_CONTACTS
permissions.READ_CALENDAR
```

Fuente de informacion: https://www.npmjs.com/package/cordova-plugin-android-permissions

### PERMISOS PWA
Creamos un servicio de uno de los permisos como por ejemplo geolocalización:

```
ionic generate service services/geolocation
```	

en los ficheros:
-	src/app/services  ->  Aquí esta la lógica para usar y pedir permiso de la geolocalizacion

-	src/app/tab1/tab1.page.ts && tab1.page.html  ->  Aquí modificamos el html y le añadimos 2 botones para 
													 probar los permisos a través de dos métodos creados en el fichero ts.