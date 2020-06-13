@extends('layouts.app')

@section('title', 'Your Cart')

@section('content')

<div id="UserApp" class="App cart_view">
</div>

<script type="application/json" id="AppURLs">
	<?= ($AppURLs ? json_encode($AppURLs, true) : '[]') ?>
</script>

<script type="application/json" id="orderedMenus">
	<?= ($orderedMenus ? json_encode($orderedMenus, true) : '[]') ?>
</script>
<script type="application/json" id="quantity">
	<?= ($quantity ? json_encode($quantity, true) : '[]') ?>
</script>
<script type="application/json" id="menusImgPath">
	<?= ($menusImgPath ? json_encode($menusImgPath, true) : '[]') ?>
</script>


@endsection