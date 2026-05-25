<?php
// DIAGNOSTICS — usuń ten plik po teście!
$to      = 'kontakt@pewnyleasing24.pl';
$subject = '[TEST] mail() diagnostics';
$body    = 'Test wysyłki przez PHP mail().';
$headers = "From: Pewny Leasing <kontakt@pewnyleasing24.pl>\r\n"
         . "Content-Type: text/plain; charset=UTF-8\r\n";

$result = mail($to, $subject, $body, $headers);

echo '<pre>';
echo 'mail() returned: ' . ($result ? 'TRUE ✓' : 'FALSE ✗') . "\n\n";
echo 'PHP version: ' . phpversion() . "\n";
echo 'sendmail_path: ' . ini_get('sendmail_path') . "\n";
echo 'disable_functions: ' . ini_get('disable_functions') . "\n";
echo 'SMTP (Windows only): ' . ini_get('SMTP') . "\n";
echo '</pre>';
?>
