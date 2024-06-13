<?php
$servidor = "Local instance MySQL80";
$usuario = "root";
$contrasena = "1234";
$nombre_bd = "usuarios";

// Conectar a la base de datos
$conexion = new mysqli($servidor, $usuario, $contrasena, $nombre_bd);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Recibir datos del formulario
$usuario = $_POST['usuario'];
$correo = $_POST['correo'];
$contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT);

// Insertar datos en la base de datos
$query = "INSERT INTO usuarios (usuario, correo, contrasena) VALUES ('$usuario', '$correo', '$contrasena')";

if ($conexion->query($query) === TRUE) {
    echo "Usuario registrado exitosamente";
} else {
    echo "Error al registrar usuario: " . $conexion->error;
}

// Cerrar la conexión
$conexion->close();
?>
