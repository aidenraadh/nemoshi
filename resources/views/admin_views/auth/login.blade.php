@extends('layouts.app')

@section('title', 'Admin - Login')

@section('content')

<div id="AdminApp" class="App login_view">
    
</div>

<script type="application/json" id="AppURLs">
	<?= ($AppURLs ? json_encode($AppURLs, true) : '[]') ?>
</script>

@endsection
