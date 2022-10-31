<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @viteReactRefresh
    @vite(['resources/js/login/index.tsx'])
    <script>
        window.previousURL = {!! json_encode($previousUrl, JSON_HEX_TAG) !!};
    </script>
</head>

<body>
    <div id="login"></div>
</body>

</html>
