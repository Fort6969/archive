<?php
  $folder = 'fooools';
  $files = array_diff(scandir($folder), array('.', '..'));
  sort($files);
  $images = array();
  foreach ($files as $file) {
    if (strpos($file, '.jpg') !== false || strpos($file, '.jpeg') !== false || strpos($file, '.png') !== false || strpos($file, '.gif') !== false) {
      $images[] = "$folder/$file";
    }
  }
  echo json_encode($images);
?>
