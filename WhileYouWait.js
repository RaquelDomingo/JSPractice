<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Days Until My Birthday</title>
  </head>
  <body>
    <script type="text/javascript">

      var daysUntilMyBirthday = 60;
      while (daysUntilMyBirthday >= 30)
      {
        console.log(daysUntilMyBirthday + " days until my birthday. Such a long time... :(");
        daysUntilMyBirthday -=1;
      }
      while (daysUntilMyBirthday < 30 && daysUntilMyBirthday > 3)
      {
        console.log(daysUntilMyBirthday + " It's getting CLOSER!!");
        daysUntilMyBirthday -=1;
      }
      while (daysUntilMyBirthday <= 3 && daysUntilMyBirthday > 0)
      {
        console.log(daysUntilMyBirthday + " more days until my birthday!!");
        daysUntilMyBirthday -=1;
      }
      if (daysUntilMyBirthday = 0);
        console.log("It's my birthday!!");
    </script>
  </body>
</html>
