@extends('layouts.app')

@section('title', 'Admin - Home')

@section('content')

<div id="AdminApp" class="App home_view">
	
</div>

<script type="application/json" id="AppURLs">
	<?= ($AppURLs ? json_encode($AppURLs, true): '[]') ?>
</script>

@endsection