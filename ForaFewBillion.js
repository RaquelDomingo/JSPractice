<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>For a Few Billion</title>
  </head>
  <body>
    <script type="text/javascript">
      var reward = 10000

      for (var reward = 1; reward < 31; reward +=1)
        sum = (Math.pow(2, reward) - 1) * 0.01;
      {
        console.log(sum);
      }
    </script>
  </body>
</html>
