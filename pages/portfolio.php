<?php include '../getProjectData.php'; ?>
<?php
    $temp_time = microtime()
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Levi Sutton</title>


    <link rel="stylesheet" href=<?php echo '"../css/portfolio.css?v'.$temp_time.'"'?>>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <script src="../lib/jquery-3.2.1/jquery3.2.1.min.js"></script>

    <script src="../lib/react/babel.min.js"></script>
    <script src="../lib/react/react.min.js"></script>
    <script src="../lib/react/react-dom.min.js"></script>
    
</head>

<body>

    <div id="portfolioMain" class="portfolio-container-wrapper">
        <!-- JSON Data -->
        <input id=projectData name=projectData style="display: none;" />
    </div>

    <!-- Script to set label data from JSON -->
    <?php include '../projectData.php'; ?>

    <script  type="text/babel" src=<?php echo '"../js/portfolio.js?v'.$temp_time.'"'?>></script>
    <script  type="text/babel" src=<?php echo '"../js/project.js?v'.$temp_time.'"'?>></script>

</body>

</html>