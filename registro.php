<?php
// Detalles de la conexión a la base de datos
$host = 'localhost:3306';
$dbname = 'escuelar_bd';
$username = 'escuelar_admin';
$password = '2ROXz}_T=IL=';

// Array para almacenar la respuesta
$response = array('success' => false, 'message' => '');

try {
    // Establecer la conexión utilizando PDO
    $db = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    
    // Opcional: Mostrar mensajes de error y excepciones
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    
    $nombre = $_POST['Nombre'];
    $apellido = $_POST['Apellido'];
    $telefono = $_POST['Telefono'];
    $email = $_POST['Email']; 
    $pais = $_POST['Pais'];
    $programa = $_POST['Programa'];
    
    // Preparar la consulta de inserción
    $stmt = $db->prepare('INSERT INTO Usuarios (Nombre, Apellido, Telefono, Email, Pais, Programas) VALUES (?, ?, ?, ?, ?, ?)');
    
    // Ejecutar la consulta con los valores del formulario
    $stmt->execute([$nombre, $apellido, $telefono, $email, $pais, $programa]);
    
    // Comprobar si el registro se insertó correctamente
    if ($stmt->rowCount() > 0) {
        
        $to = 'manuelagacu@escuelar.org';
        $subject = 'Registro exitoso desde la pagina web';
        $message = "El registro ha sido exitoso. Detalles del registro:\n\n";
        $message .= "Nombre: $nombre\n";
        $message .= "Apellido: $apellido\n";
        $message .= "Teléfono: $telefono\n";
        $message .= "Email: $email\n";
        $message .= "País: $pais\n";
        $message .= "Programa: $programa\n";
        
        // Opcional: Puedes personalizar el remitente y los encabezados del correo electrónico
        $headers = "From: manuelagacu@escuelar.org\r\n";
        
        
        // Enviar el correo electrónico
        mail($to, $subject, $message, $headers);
        
        $response['success'] = true;
        $response['message'] = 'Registro insertado correctamente.';
    } else {
        $response['message'] = 'Error al insertar el registro.';
    }
    
    // Cerrar la conexión
    $db = null;
} catch (PDOException $e) {
    // Manejo de errores - muestra el mensaje de error
    $response['message'] = 'Error de conexión: ' . $e->getMessage();
}

// Devolver la respuesta como JSON
header('Content-Type: application/json');
echo json_encode($response);
?>

