<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
if (!empty($_POST['name']) && !empty($_POST['phone'])){
  if (isset($_POST['name'])) {
    if (!empty($_POST['name'])){
  $name = strip_tags($_POST['name']);
  $nameFieldset = "Имя пославшего: ";
  }
}

if (isset($_POST['phone'])) {
  if (!empty($_POST['phone'])){
  $phone = strip_tags($_POST['phone']);
  $phoneFieldset = "Телефон: ";
  }
}

$token = "382081497:AAEDmBI5H_CTWHcs-XMXJbecjaTOMbvtgiQ";
$chat_id = "-296810444";
$arr = array(
  $nameFieldset => $name,
  $phoneFieldset => $phone
);
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
if ($sendToTelegram) {

  echo '<p class="success">Спасибо за отправку вашего сообщения!</p>';
    return true;
} else {
  echo '<p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p>';
}
} else {
  echo '<p class="fail">Ошибка. Вы заполнили не все обязательные поля!</p>';
}
} else {
header ("Location: /");
}

?>