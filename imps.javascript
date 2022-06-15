-------------------------------------index.html----------------------------
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>MyIMPSProject</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

</head>
<body>
  <app-root></app-root>
</body>
</html>
----------------------impstrf.component.html---------------------------------
<H1>IMPS FUND TRANSFER</H1>
<nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <!-- <a class="navbar-brand" href="#">WebSiteName</a> -->
      </div>
      <ul class="nav navbar-nav">
       <!-- /<li class="active"><a href="#">IMPS</a></li> -->
        <li><a href="#">FUND TRANSFER</a></li>
        <li><a href="#">Enquiry</a></li>
        <li><a href="#">Mobile Enquiry</a></li>
      </ul>
    </div>
  </nav>

Select the type of transaction<br>





   <td>Transaction Type</td><td><input type="radio" name="transactiontype" value="persontoaccount">Person To Account (using IFSC code)</td>
    <td><input type="radio" name="transactiontype" value="persontoperson">Person To Person (using MMID)</td>
<br>
<button type="button" style="margin-left:auto; margin-right: auto;">Proceed</button>
