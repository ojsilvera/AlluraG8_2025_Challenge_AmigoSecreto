# AlluraG8_2025_Challenge_AmigoSecreto

Repositorio correspondiente al desarrollo de la actividad de apropiacion de conocimiento, Challenge Amigo Secreto, la cual
busca que los estudiantes apliquen los conocimientos adquiridos durante la fase de aprendizaje de logica de programacion
con JavaScript.

- El trello del desarrollo del poryecto y cada una de sus fases

  [trello del proyecto](https://trello.com/b/A61aGBYJ/trello-challenge-amigo-secreto-esp)

- Proyecto desplegado en github pages

  [Despliegue](https://ojsilvera.github.io/AlluraG8_2025_Challenge_AmigoSecreto/)

- Descripcion mas detallada del challenge o proyecto, entregados por alura

Nombre del proyecto: Amigo secreto

En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego
realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán
en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma
aleatoria, mostrando el resultado en pantalla.

Fucionalidades:

Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al
hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se
mostrará en la página.

-- ToDo

- [ok] Inicializar el readme del proyecto, indicando el ToDo con la lista de las acciones a llevar a acabo inicialmente.
- [ok] Crear el sistema de archivos del proyecto
  - [ok] Crear un documento html de nombre index.html, el cual contiene el sistema de etiquetas que son la estructura de
         la interfase
  - [ok] Craer la carpeta de assets, que contendrá las carpetas de:
    - [ok] Imagenes contendra las imagenes del proyecto, con nombre: img
    - [ok] JavaScript contendra los archivos js necesarios para la logica, con nombre: js
      - [ok] Agregar un archivo app.js, que contendra la logica de programacion
    - [ok] CSS contendra las hojas de estilos necesarias, con nombre: css
      - [ok] Agregar dos archivos css, uno sera style.css y el otro sera el reset.css
      - [ok] style.css contiene los estilos de la aplicacion
      - [ok] reset.css contiene los estilos base y limpios antes de inciar la carga del index.html
- [ok] Maquetar el html de acuerdo al diseño sugerido.
  - [ok] Nombrar las clases y Ids con la metodologia BEM en el html, para los estilos y los llamados de la logica de
        programacion en js.
- [ok] Ingresar y listar los amigos disponibles ppara el sorteo
  - [OK] Crear una funcion que capture los nombre digitados en la caja de texto con ID: amigos
  - [ok] Mostrar dinamicamente el nombre de cada amigo conforme se introduce con un elementi li, dentro del elemento ul
         con ID: listaAmigos
  - [ok] Al digitar y mostrar el nuevo amigo, limpiar la caja de texto, asi preparamos el nuevo ingreso
  - [ok] Validar que el campo de ingreso de nombre no se mande vacio.
- [ok] Mostrar el amigo elejido para ser el amigo secreto, en el parrafo con ID: amigoSecreto.
- [ok] Adicionar boton para realizar nuevo sorteo
  - [ok] debe limpiar los campos de caja de texto con ID: amigos
  - [ok] limpiar ls lista ul con ID: listaAmigos
  - [ok] debe limpiar el campo p que muestra tanto el nombre dle amigo secreto como el mensaje de error con ID: amigoSecreto
  - [ok] limpiar las variabels utilizadas, nombres = []; totalAmigos = 0;
