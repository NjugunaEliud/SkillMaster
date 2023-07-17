<script>
import useSkill from '../../components/composables/skill';
import { onMounted } from 'vue';

export default {
  setup() {
    const handledeleteSkill =(id)=>{
      deleteSkill(id)
    }
    const { skills, getSkills ,deleteSkill } = useSkill();
    onMounted(getSkills);

    return {
      skills, deleteSkill, getSkills ,handledeleteSkill
    };
  }
}
</script>

<template>
  <div class="skills">
    <h3>Skills</h3>
    <div class="new"><router-link to="/skillCreate">New Skill</router-link></div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Slug</th>
          <!-- <th>Created On</th> -->
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="skill in skills" :key="skill.id">
          <td>{{ skill.name }}</td>
          <td>{{ skill.slug }}</td>
          <td>{{skill.created}}</td>
          <td >
           <router-link class="new" :to="{ name: 'skillEdit', params: { id: skill.id } }">EditSkill</router-link>
            <button @click="handledeleteSkill(skill.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
table {
  border-collapse: collapse;
  margin: 0 auto;
  width: 820px;
  background: white;
  border-radius: 10px;
}

th, td {
  padding: 8px;
  text-align: center;
}
.new {
  display: inline-block;
  padding: 8px 15px;
  background-color: #8395f8;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
  margin: 10px;
 
}
.new a{
  text-decoration: none;
}

.new:hover {
  background-color: #87f7a7;
}
h3{
  color: crimson;
}


</style>
