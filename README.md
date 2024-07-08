#
# <p align=center> SEMINARIO ANGULAR 2024
## <p align=center> ENTREGA TPE:
### AUTOR:


| NOMBRE | Sede | e-mail  | Github | Stackblitz |
| :------------: |:---------------: |:---------------:| :-------------------: | :-------------------: |
| Arias Gustavo  | Tres Arroyos     | ariasgustavo3a@gmail.com | https://github.com/elgusty3a | https://stackblitz.com/~/github.com/elgusty3a/AngularSeminario2024 |


#
# <p align=center> F1App
### Sitio web dedicado a la F1, información y venta de tickets para las carreras.
#### Objetivos:
  - Desarrollar un sitio web bajo el framework Angular.
  - Ofrecer una interfaz amigable.
  - Crear y conectar componentes.
  - Emplear estructuras de control en las plantillas HTML para controlar el flujo de la renderización.
  - Consumir datos desde una API.
  - implementar servicios.



## Herramientas para el consumo de la API

- Para las pruebas con la API se utilizaron las paginas https://apimocha.com y 'https://beeceptor.com las cuales son gratuitas y por ello tienen un limite de consultas por dia. si no funciona una se puede utilizar la otra.
- los links para hacer las conssultas GET son los siguientes:

const URLPILOTOS = 'https://apimocha.com/f1appdata/pilotos';
const URLCIRCUITS = 'https://apimocha.com/f1appdata/circuits';
const URLESCUDERIAS = 'https://apimocha.com/f1appdata/escuderias';

o bien

const URLCIRCUITS = 'https://f1app.free.beeceptor.com/circuitos';
const URLPILOTOS = 'https://f1app.free.beeceptor.com/pilotos';
const URLESCUDERIAS = 'https://f1app.free.beeceptor.com/escuderias';

## En caso de fallar las URL de las API
  - Existe en el código una maqueta (MOCK) que se puede utiliar para testear la aplicación.
  - Se utiliza comentando y descomentando ciertas lineas de código
  - Al principio de ciertos archivos se encuentran a modo de comentario como realizarlo

| Endpoint             | Método  | Servicio         | Función                 |
|:-------------------: |:-------:| :---------------:| :----------------------:|
| circuitos            | GET     | F1AppDataService | getF1DataCircuits       |
| pilotos              | GET     | F1AppDataService | getF1DataPilotos        |
| escuderias           | GET     | F1AppDataService | getF1DataEscuderias     |



