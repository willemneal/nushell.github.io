(window.webpackJsonp=window.webpackJsonp||[]).push([[500],{1332:function(e,a,s){"use strict";s.r(a);var o=s(35),n=Object(o.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"shells-en-shells"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shells-en-shells"}},[e._v("#")]),e._v(" Shells en shells")]),e._v(" "),s("h2",{attrs:{id:"trabajando-con-multiples-directorios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#trabajando-con-multiples-directorios"}},[e._v("#")]),e._v(" Trabajando con múltiples directorios")]),e._v(" "),s("p",[e._v('Mientras es común trabajar en un directorio puede ser beneficioso trabajar en múltiples lugares al mismo tiempo. Para esto Nu ofrece el concepto de "shells". Tal como implica, son una manera de tener activo múltiples shells en uno permitiendote rápidamente saltar entre directorios de trabajo y más.')]),e._v(" "),s("p",[e._v("Para empezar entremos a un directorio:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/home/jonathan/Source/nushell(master)> enter ../lark\n/home/jonathan/Source/lark(master)> ls\n----+----------------+-----------+----------+---------+---------------+---------------\n #  | name           | type      | readonly | size    | accessed      | modified\n----+----------------+-----------+----------+---------+---------------+---------------\n 0  | Cargo.toml     | File      |          | 2.2 KB  | 6 months ago  | 6 months ago\n 1  | target         | Directory |          | 4.1 KB  | 10 months ago | 6 months ago\n 2  | notes          | Directory |          | 4.1 KB  | 10 months ago | 6 months ago\n")])])]),s("p",[e._v("Entrar es similar a cambiar directorios (como vimos previamente con el comando "),s("code",[e._v("cd")]),e._v("). Esto permite saltar al directorio para trabajar dentro del mismo. En lugar de cambiar de directorio, ahora estamos en dos directorios. Para ver esto con más claridad podemos usar el comando "),s("code",[e._v("shells")]),e._v(" que enumera los directorios actualmente activos:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/home/jonathan/Source/lark(master)> shells\n---+---+------------+-------------------------------\n # |   | name       | path\n---+---+------------+-------------------------------\n 0 |   | filesystem | /home/jonathan/Source/nushell\n 1 | X | filesystem | /home/jonathan/Source/lark\n---+---+------------+-------------------------------\n")])])]),s("p",[e._v("El comando "),s("code",[e._v("shells")]),e._v(' nos muestra que hay dos shells activos: nuestro directorio fuente original "nushell" y ahora este nuevo directorio "lark".')]),e._v(" "),s("p",[e._v("Podemos saltar entre estas shells con los accesos directos "),s("code",[e._v("n")]),e._v(" y "),s("code",[e._v("p")]),e._v(', cortos de siguiente "next" y previo "previous":')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/home/jonathan/Source/lark(master)> n\n/home/jonathan/Source/nushell(master)> p\n/home/jonathan/Source/lark(master)>\n")])])]),s("p",[e._v("Podemos notar el directorio cambiando pero también siempre podremos regresar al directorio previo en el cual estábamos trabajando. Esto nos permite trabajar en múltiples directorio en la misma sesión.")]),e._v(" "),s("h2",{attrs:{id:"saliendo-del-shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#saliendo-del-shell"}},[e._v("#")]),e._v(" Saliendo del shell")]),e._v(" "),s("p",[e._v("Puedes salir de una shell que hayas entrado (usando "),s("code",[e._v("enter")]),e._v(") a través del comando "),s("code",[e._v("exit")]),e._v(". Si esta es la última shell, Nu se cerrará.")]),e._v(" "),s("p",[e._v("Siempre puedes cerrar Nu incluso si tienes múltiples shells activas usando el comando "),s("code",[e._v("exit")]),e._v(" pasando la bandera "),s("code",[e._v("--now")]),e._v(" de la siguiente forma "),s("code",[e._v("exit --now")])]),e._v(" "),s("h2",{attrs:{id:"mas-alla-de-los-directorios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mas-alla-de-los-directorios"}},[e._v("#")]),e._v(" Más allá de los directorios")]),e._v(" "),s("p",[e._v("Nu también puede crear shells de otras cosas aparte de las rutas del sistema de archivos. Digamos por ejemplo que estás trabajando con un gran conjunto de datos y no deseas perderte dentro del mismo.")]),e._v(" "),s("p",[e._v("Para ver cómo funciona haremos el siguiente ejercicio. Actualmente en Nu tenemos enumerados los "),s("RouterLink",{attrs:{to:"/es/book/plugins.html"}},[e._v("complementos")]),e._v(' desarrollados (plugins) en "Cargo.toml" digamos que también acabamos de crear un nuevo complemento en el directorio src/plugins llamado "doc.rs" y nos interesa saber que se encuentre enumerado también en "Cargo.toml" para que se instale al compilar Nu.')],1),e._v(" "),s("p",[e._v('Entraremos al archivo "Cargo.toml" del código fuente de Nu:')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/Users/andresrobalino/Code/nushell(master)> enter Cargo.toml\n/> ls\n------------+--------------+------------------+----------+----------\n bin        | dependencies | dev-dependencies | lib      | package\n------------+--------------+------------------+----------+----------\n [11 items] | [object]     | [object]         | [object] | [object]\n------------+--------------+------------------+----------+----------\n")])])]),s("p",[e._v("Por el momento solo hemos entrado al archivo y podemos observar en la tabla devuelta por "),s("code",[e._v("ls")]),e._v(" lo que hay. Si prestas atención hemos entrado a un archivo con formato que reconoce Nu (.toml). Nu también nos proyecta el contenido del archivo en forma de sistema de archivos para explorarlo como si estuvieramos dentro de un sistema de archivos.")]),e._v(" "),s("p",[e._v("Antes de continuar revisemos las shells activas:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/> shells\n---+---+-------------------------------------------------+------------------------------------\n # |   | name                                            | path\n---+---+-------------------------------------------------+------------------------------------\n 0 |   | filesystem                                      | /Users/andresrobalino/Code/nushell\n 1 | X | {/Users/andresrobalino/Code/nushell/Cargo.toml} | /\n---+---+-------------------------------------------------+------------------------------------\n\n")])])]),s("p",[e._v('Observamos que hay dos activas indicándonos que nos encontramos dentro de "Cargo.toml" en la ruta predeterminada "/". Revisemos el listado de nuevo:')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/> ls\n------------+--------------+------------------+----------+----------\n bin        | dependencies | dev-dependencies | lib      | package\n------------+--------------+------------------+----------+----------\n [11 items] | [object]     | [object]         | [object] | [object]\n------------+--------------+------------------+----------+----------\n")])])]),s("p",[e._v('Puede que los complementos se encuentren en "bin", vamos ahí:')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> cd bin\n/bin> ls\n----+----------------------+---------------------------\n #  | name                 | path\n----+----------------------+---------------------------\n 0  | nu_plugin_inc        | src/plugins/inc.rs\n 1  | nu_plugin_sum        | src/plugins/sum.rs\n 2  | nu_plugin_add        | src/plugins/add.rs\n 3  | nu_plugin_edit       | src/plugins/edit.rs\n 4  | nu_plugin_str        | src/plugins/str.rs\n 5  | nu_plugin_skip       | src/plugins/skip.rs\n 6  | nu_plugin_sys        | src/plugins/sys.rs\n 7  | nu_plugin_tree       | src/plugins/tree.rs\n 8  | nu_plugin_binaryview | src/plugins/binaryview.rs\n 9  | nu_plugin_textview   | src/plugins/textview.rs\n 10 | nu                   | src/main.rs\n----+----------------------+---------------------------\n")])])]),s("p",[e._v("Notar que siempre podemos saltar de vuelta al directorio en el que estuvimos trabajando usando "),s("code",[e._v("p")]),e._v(" (para previo).")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/bin> p\n")])])]),s("p",[e._v("Verifiquemos las shells:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/Users/andresrobalino/Code/nushell(master)> shells\n---+---+-------------------------------------------------+------------------------------------\n # |   | name                                            | path\n---+---+-------------------------------------------------+------------------------------------\n 0 | X | filesystem                                      | /Users/andresrobalino/Code/nushell\n 1 |   | {/Users/andresrobalino/Code/nushell/Cargo.toml} | /bin\n---+---+-------------------------------------------------+------------------------------------\n\n")])])]),s("p",[e._v('Nos encontramos ahora en la shell donde estuvimos antes de entrar al archivo "Cargo.toml", vamos al directorio donde se encuentra el código fuente de los complementos (plugins):')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/Users/andresrobalino/Code/nushell(master)> cd src/plugins/\n/Users/andresrobalino/Code/nushell/src/plugins(master)> ls\n----+---------------+------+----------+---------+------------+------------\n #  | name          | type | readonly | size    | accessed   | modified\n----+---------------+------+----------+---------+------------+------------\n 0  | doc.rs        | File |          | 3.0 KB  | a week ago | a week ago\n 1  | sum.rs        | File |          | 3.0 KB  | a week ago | a week ago\n 2  | inc.rs        | File |          | 11.8 KB | a week ago | a week ago\n 3  | sys.rs        | File |          | 9.2 KB  | 2 days ago | 2 days ago\n 4  | edit.rs       | File |          | 2.7 KB  | a week ago | a week ago\n 5  | str.rs        | File |          | 21.4 KB | 5 days ago | 5 days ago\n 6  | secret.rs     | File |          | 1.8 KB  | 2 days ago | 2 days ago\n 7  | skip.rs       | File |          | 1.7 KB  | a week ago | a week ago\n 8  | binaryview.rs | File |          | 13.0 KB | a week ago | a week ago\n 9  | tree.rs       | File |          | 3.0 KB  | a week ago | a week ago\n 10 | add.rs        | File |          | 2.7 KB  | a week ago | a week ago\n 11 | textview.rs   | File |          | 9.4 KB  | 5 days ago | 5 days ago\n----+---------------+------+----------+---------+------------+------------\n")])])]),s("p",[e._v('Ahora podemos comparar los dos para verificar si faltan complementos adicionales o si hay complementos adicionales que necesitemos agregar a nuestro archivo "Cargo.toml" (¡y claramente falta agregarlo a "Cargo.toml"!)')])])}),[],!1,null,null,null);a.default=n.exports}}]);