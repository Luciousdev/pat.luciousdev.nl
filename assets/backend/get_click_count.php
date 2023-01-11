<?php
  // Connect to the database
  $host = "localhost";
  $user = "root";
  $password = "CocoBingo2019";
  $dbname = "clicks";
  $conn = mysqli_connect($host, $user, $password, $dbname);

  // Check connection
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  // Retrieve the current click count
  $sql = "SELECT click_count FROM clicks WHERE id = 1";
  $result = mysqli_query($conn, $sql);
  $row = mysqli_fetch_assoc($result);
  $clickCount = $row['click_count'];

  echo $clickCount;

  // Close the connection
  mysqli_close($conn);
?>
