<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Range Print</title>
  </head>
  <body>
    <script type="text/javascript">
      function printRange(){

        for (var i = 2; i < 10; i++){
          if (i % 2 === 0){
            console.log(i);
        }
      }
    }printRange(2, 10, 2);
    </script>
  </body>
</html>
