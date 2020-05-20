<template>
  <div>
    <h3>Single timer {{ $route.params.id }}</h3><br>
    <p>Start with current values or change times</p>
    <form>
      <div class="form-group row m-4">
        <label
        for="colFormLabelSm"
        class="col-sm-2 col-form-label col-form-label-sm">
          Workout Name:
        </label>
        <div class="col-sm-10">
          <input
          type="text"
          class="form-control form-control-sm"
          id="colFormLabelSm"
          placeholder="Name your workout">
        </div>
      </div>
      <div class="form-group row m-4">
        <label
        for="colFormLabelSm"
        class="col-sm-2 col-form-label col-form-label-sm">
          Exercise 1:
        </label>
        <div class="col-sm-10">
          <input
          type="text"
          class="form-control form-control-sm"
          id="colFormLabelSm"
          placeholder="Name of your first exercise">
        </div>
      </div>
      <div class="form-group row m-4">
        <label
        for="colFormLabelSm"
        class="col-sm-2 col-form-label col-form-label-sm">
          Work Time:
        </label>
        <div class="col-sm-10">
          <input
          type="number"
          class="form-control form-control-sm"
          id="colFormLabelSm"
          placeholder="Work time in seconds">
        </div>
      </div>
    </form>
    <button type="button" class="btn btn-secondary">Add Next Exercise</button>
  </div>
</template>

<style lang="scss" scoped>
  form {
    text-align: left;
  }
</style>
