@extends('layouts.app')

@section('title', 'Landing')

@section('content')

<div id="UserApp" class="App landing_view">
</div>

<script type="application/json" id="AppURLs">
	<?= ($AppURLs ? json_encode($AppURLs, true) : '[]') ?>
</script>


@endsection