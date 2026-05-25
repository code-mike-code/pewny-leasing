<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit;
}

$to = 'kontakt@pewnyleasing24.pl';

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Błędne dane wejściowe']);
    exit;
}

$name    = strip_tags(trim($data['name']    ?? 'Brak imienia'));
$email   = filter_var(trim($data['email']   ?? ''), FILTER_VALIDATE_EMAIL);
$phone   = strip_tags(trim($data['phone']   ?? 'Nie podano'));
$topic   = strip_tags(trim($data['topic']   ?? 'Inny temat'));
$message = strip_tags(trim($data['message'] ?? 'Brak treści'));

if (!$email) {
    http_response_code(422);
    echo json_encode(['status' => 'error', 'message' => 'Błędny adres e-mail']);
    exit;
}

$subject = '[Pewny Leasing - Kontakt] ' . $topic;

$body  = "Nowa wiadomość z formularza kontaktowego Pewny Leasing:\n\n";
$body .= "Imię:     $name\n";
$body .= "E-mail:   $email\n";
$body .= "Telefon:  $phone\n";
$body .= "Temat:    $topic\n\n";
$body .= "Wiadomość:\n$message\n";

$headers  = "From: Pewny Leasing <kontakt@pewnyleasing24.pl>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['status' => 'success']);
} else {
    error_log('[contact.php] mail() zwróciło false — sprawdź konfigurację MTA na serwerze');
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Błąd serwera pocztowego']);
}
?>
