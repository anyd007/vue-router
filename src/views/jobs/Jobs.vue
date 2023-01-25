<template>
  <div class="jobs show-component">
    <h1>Pracownicy:</h1>
    <div v-if="jobs.length">
      <div v-for="job in jobs" :key="job.id">
        <router-link :to="{ name: 'JobsDetails', params: { id: job.id } }">
          <h2 class="jobsTitle">{{ job.title }}</h2>
        </router-link>
      </div>
    </div>
    <div v-else>
      <p>Wczytuję....</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.jobsTitle {
  cursor: pointer;
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  color: #444;
  transition: all 0.3s ease-in-out;
}
.jobsTitle:hover {
  background: #ddd;
}
.jobs a {
  text-decoration: none;
}
</style>