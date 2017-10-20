<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>If You Don't Mind, Can I Have The Time</title>
  </head>
  <body>
    <script type="text/javascript">
      var HOUR = 8;
      var MINUTE = 50;
      var PERIOD = "AM";

      if (HOUR <= 12 && MINUTE > 30 && PERIOD){
        console.log("It's almost", HOUR + 1, "in the morning");
      }

      var HOUR = 7;
      var MINUTE = 15;
      var PERIOD = "PM";

      if (MINUTE > 30 && PERIOD){
        console.log("It's almost", HOUR + 1, "in the morning");
      }
        else if (MINUTE <= 15 && PERIOD){
        console.log("It's just after", HOUR, "in the evening");
      }
    </script>
  </body>
</html>
