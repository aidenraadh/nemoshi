@extends('layouts.app')

@section('title', 'Our Menus')

@section('content')

<div id="UserApp" class="App menus_view">
</div>

<script type="application/json" id="AppURLs">
	<?= ($AppURLs ? json_encode($AppURLs, true) : '[]') ?>
</script>

<script type="application/json" id="orderedMenus">
	<?= ($orderedMenus ? json_encode($orderedMenus, true) : '[]') ?>
</script>

<script type="application/json" id="menus">
	<?= ($menus ? json_encode($menus, true) : '[]') ?>
</script>


<script type="application/json" id="menusImgPath">
	<?= ($menusImgPath ? json_encode($menusImgPath, true) : '[]') ?>
</script>
@endsection