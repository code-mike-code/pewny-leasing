<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

$to = "kontakt@pewnyleasing24.pl";
$subject_prefix = "[Pewny Leasing - Kontakt] ";

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "Błędne dane wejściowe"]);
    exit;
}

$name = strip_tags(trim($data['name'] ?? 'Brak imienia'));
$email = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone = strip_tags(trim($data['phone'] ?? 'Nie podano'));
$topic = strip_tags(trim($data['topic'] ?? 'Inny temat'));
$message = strip_tags(trim($data['message'] ?? 'Brak treści wiadomości'));

if (!$email) {
    echo json_encode(["status" => "error", "message" => "Błędny adres e-mail"]);
    exit;
}

$subject = $subject_prefix . $topic;

$email_content = "Nowa wiadomość z formularza kontaktowego Pewny Leasing:\n\n";
$email_content .= "Imię: $name\n";
$email_content .= "E-mail: $email\n";
$email_content .= "Telefon: $phone\n";
$email_content .= "Temat: $topic\n\n";
$email_content .= "Wiadomość:\n$message\n";

$headers = "From: $name <kontakt@pewnyleasing24.pl>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $email_content, $headers)) {
    echo json_encode(["status" => "success", "message" => "Wiadomość wysłana"]);
} else {
    echo json_encode(["status" => "error", "message" => "Błąd podczas wysyłania e-maila na serwerze"]);
}
?>
