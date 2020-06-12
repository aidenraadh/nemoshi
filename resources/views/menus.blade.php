@extends('layouts.app')

@section('title', 'Our Menus')

@section('content')

<div id="UserApp" class="App menus_view" style="padding-top: 12rem;">
</div>

<script type="application/json" id="AppURLs"><?= $AppURLs ?></script>

<script type="application/json" id="Menus"><?= $Menus ?></script>

<script type="application/json" id="MenusImgPath"><?= $MenusImgPath ?></script>
@endsection