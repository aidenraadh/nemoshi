@extends('layouts.app')

@section('title', 'Admin - Register')

@section('content')

<div id="AdminApp" class="App register_view">
    
</div>

<script type="application/json" id="AppURLs">
	<?= ($AppURLs ? json_encode($AppURLs, true) : '[]') ?>
</script>

@endsection
