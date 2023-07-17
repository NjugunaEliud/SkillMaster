
  
  <template>
 
  <div class="form-container">
       <p>Skills Edit</p>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name:</label><br> 
        <input type="text" id="name" placeholder="Enter your name" required>
      </div>
  
      <div class="form-group">
        <label for="skill">Skill:</label>
        <input type="text" id="skill" placeholder="Enter your skill" required>
      </div>
      <button :to="{name:'skillsIndex'}" disabled="handleSubmit" type="submit">Submit</button>
    </form>
  </div>
</template>


<script >

import {onMounted, ref} from 'vue';
import {defineProps} from 'vue';
import useSkill from '../../components/composables/skill';
const {EditSkill , getSkill, skill , errors} = useSkill();
export default {
  setup(){
      const props = defineProps({
        id:{
          required:true
        }
      })
    const handlesubmit =()=>{
       EditSkill($route.params.id);
    }
      onMounted(() => {
      if (props.id) {
        getSkill(props.id);
      }
    });
    return{
      handlesubmit,
      props, 
      skill,
      getSkill,
      errors
    }
     
  }
 
}
</script>

<style>

</style>