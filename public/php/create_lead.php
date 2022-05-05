<?php
$queryUrl = 'https://tek-kub.bitrix24.ru/rest/29/ku09dwt6sfrfc2x1/crm.lead.add.json';

  // Формируем параметры для создания лида в переменной $queryData

  $queryData = http_build_query(array(

      'fields' => array(

          'TITLE' => 'Заявка с сайта',
          'EMAIL' => Array(
              "n0" => Array(
                  "VALUE" => $_POST['email'],
                  "VALUE_TYPE" => "WORK",
              ),
          ),
          'NAME' => $_POST['name'],
          'COMMENTS' => $_POST['mess']

    ),

    'params' => array('REGISTER_SONET_EVENT' => 'Y')

  ));

  // Обращаемся к Битрикс24 при помощи функции curl_exec

  $curl = curl_init();

  curl_setopt_array($curl, array(

      CURLOPT_SSL_VERIFYPEER => 0,

      CURLOPT_POST => 1,

      CURLOPT_HEADER => 0,

      CURLOPT_RETURNTRANSFER => 1,

      CURLOPT_URL => $queryUrl,

      CURLOPT_POSTFIELDS => $queryData,

  ));

  $result = curl_exec($curl);

  curl_close($curl);

  $result = json_decode($result, 1);

  if (array_key_exists('error', $result)) {
      echo 'Ошибка при сохранении лида: '.$result[‘error_description’].'<br>';
  } else {
      echo 'Ваше сообщение успешно доставлено, в ближайшее время с вами свяжуться наши сотрудники';
  };