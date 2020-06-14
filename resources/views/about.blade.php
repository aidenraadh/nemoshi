@extends('layouts.app')

@section('title', 'About Us')

@section('content')

<div id="UserApp" class="App about_view">
</div>

<script type="application/json" id="AppURLs">
	<?= ($AppURLs ? json_encode($AppURLs, true) : '[]') ?>
</script>


@endsection