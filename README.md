Este repositorio contiene el código de mi solución al **tercer desafío** llamado Lista de Animales el cual no es evaluado del módulo 4: **Programación avanzada en JavaScript** de la beca Desarrollo de aplicaciones **Full Stack Javascript Trainee V2.0** dictada por Desafío Latam.

Los requisitos del desafío son los siguientes:

![Requisitos Hoja 1 y 2](./assets/img/screenshots/requisitos_uno_dos.jpg)
![Requisitos Hoja 3 y 4](./assets/img/screenshots/requisitos_tres_cuatro.jpg)

El proyecto mostrando lo requerido lo muestro en la siguiente imagen:

![ScreenShot Imagen Proyecto Funcional](./assets/img/screenshots/proyecto_funcional.png)

# Requerimientos cumplidos

### 1. Crear las clases en ES6 respetando la Herencia indicada en el diagrama de clases

He creado en el archivo llamado **modulos.js** las siguientes clases:

-Clase **Propietario**

-Clase **Animal** que extiende de la Clase **Propietario**

-Clase **Mascota** que extiende de la clase **Animal**

-Clase **Consulta** que extiende de la clase **Mascota**

### 2. Crear los métodos get y set para la clase de mascota

He creado ambos métodos como muestro en la imagen siguiente:

![Métodos get y set para la clase de mascota](./assets/img/screenshots/metodos_get_set_clase_mascota.png)

### 3. Crear un método get para la clase Animal de la propiedad tipo para retornar el mensaje “El tipo de animal es un: ${this.tipo}”.

He creado el método get para la clase Animal como muestro en la imagen siguiente:

![Método get para la clase Animal](./assets/img/screenshots/metodo_get_clase_animal.png)

### 4.Crear el método “datosPropietario” en la clase correspondiente y que pueda ser accedido desde las clases inferiores.

He implementado el método datosPropietario en la clase Propietario el cual muestra el mensaje solicitado:

![Método datosPropietario en la clase Propietario](./assets/img/screenshots/metodo_datos_propietario.png)

### 5.Captar los elementos del formulario con JavaScript e identificar el tipo de animal para realizar la instancia dependiendo del tipo de animal seleccionado. Es decir, si el usuario selecciona Gato, la instancia a crear para la clase Mascota debe tener el nombre de “Gato”, si selecciona Perro, la instancia de Mascota deberá llamarse “Perro”.

He creado una función dedicada a realizar lo anterior llamada **crearObjetoConsulta** la cual muestro a continuación:

![Función crearObjetoConsulta](./assets/img/screenshots/creacion_objeto_consulta.png)

### 6.Mostrar a modo de lista los mensajes resultantes para el método “datosPropietario” cuando el usuario haga un clic sobre el botón Agregar, accediendo a los métodos get de las clases Animal y Mascota, concatenando todo en un solo mensaje,

He creado una función dedicada a realizar lo pedido llamada **mostrarDataEnHTML** la cual necesita como argumento un objeto de la clase Consulta. A continuación muestro dicho función:

![Función mostrarDataEnHTML](./assets/img/screenshots/funcion_mostrarDataEnHTML.png)
