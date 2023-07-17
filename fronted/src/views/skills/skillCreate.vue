<script>
import {ref} from 'vue'
import useSkill from '../../components/composables/skill'
const {saveSkill , errors} = useSkill();
export default {
  setup(){
    const form= ref({
      name:"",
      slug:""
      });


    const handlesubmit =()=>{
       saveSkill(form.value);
       

    }

    const redirect=()=>{
        router.push({ name: 'skillsIndex' });
        window.alert('Skill saved successfuly')
    }
 
      return{
        form,
        handlesubmit,
        errors
      }
  
  }
}
</script>

<template>
  <div class="form-container">
    <h3>Create a Skill</h3>
    <form @submit.prevent="handlesubmit">
      <div class="form-group">
        <label for="name">Name:</label><br> 
        <input type="text" id="name" v-model="form.name" placeholder="Enter your name" required>
      </div>
      <div v-if="errors.name">
      <span>{{ errors.name[0] }} </span>
    </div>
      <div class="form-group">
        <label for="skill">Skill:</label>
        <input type="text" id="skill" v-model="form.slug" placeholder="Enter your skill" required>
      </div>
      <button @click='redirect' :disabled="handleSubmit" type="submit">Submit</button>
    </form>
  </div>
</template>


<style>
  .form-container {
    max-width: 500px;
    margin: 0 auto;
  }

  .form-group {
    margin-bottom: 20px;
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 2px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .form-container {
      max-width: 100%;
      padding: 0 20px;
    }
  }
</style>


