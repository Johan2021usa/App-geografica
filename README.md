# PRUEBA TECNICA REALTIX

Esta prueba fue subida a GITHUB para detallar el proceso de analisis y desarrollo del software solicitado, por favor descargar el repositirio y verificar la informacion de cada punto. 

- Link del repositorio: https://github.com/Johan2021usa/Realtix-prueba-tecnica.git

- Desarrollador: Jairo Johan Lasso Chaucanes

# 1. Analisis de datos geograficos
El primer punto de la prueba sobre se realizó utilizando ARCGIS 10.5, los datos en formato shape de los consultorios de pediatria se descargaron de la fuente señalada (IDECA) y las capas adicionales de las localidades del distrito capital de Bogota de la fuente: Datos Abiertos Bogota. Adicionalmente se agregó un base map y un data frame sobre el limite de Bogota. 

1.1 Al importar los shape en ArcGis se pudo visualizar de manera general que los consultorios de pediatria se localizan mayoritariamente en el area urbana. 

![alt text](images/image.png)

1.2 Para conocer la distribucion de los consultorios con mayor precision, se utilizó la herramienta "Spatial Join" de ARCGIS la cual nos permite representar cuantos consultorios existen por cada Localidad del DC de Bogota, este proceso genera una layer con poligonos y en su tabla de contenido realiza un join con el numero de consultorios por cada localidad.

Como resultado, el analisis indica que: 
- Enn el rango de 34 a 47 consultorios de pediatria, las localidades de Usaquen (47) y Suba (47) son las que mayor cantidad tienen. 

- Luego luego le siguen las localidades de Kennedy (28), Barrios Unidos (29) y Chapinero (33), en el rango de 24 a 33consultorios.

- En el tercer rango (13-23) tenemos a Fontibon (17), Puente Aranda (18), Engativa (21) yTuesaquillo (23).

- En el cuardo rango (3-12), tenemos a Bosa(4), Los Martires (4), Santa Fe (5), Tinjuelito (5), Ciudad Bolivar (7), Antonio Nariño (7) y San Cristobal (9)

- Por ultimo las localidades que tienen menor numero de consultorios entre el rango (0-2) son Sumapaz (0), Candelaria (1) y Usme (2).

![alt text](images/Analisis%20de%20datos%20geograficos.jpg)

![alt text](images/tabla_no_consultorios.png)

1.3 Las variables que podrian influir en la distribucion de los consultorios pueden ser las siguientes:
- Numero de habitantes por Rango de edad (Niños, Adolecentes, Jovenes, Adultos, Ancianos)
- Numero de habitantes por (Barrio, localidad)
- Accesibilidad
- Condicion economica

# 2.SQL/Bases de datos geograficas


