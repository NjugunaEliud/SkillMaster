import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
export default function useSkill(){
const skills = ref([]);
const skill = ref([]);
const errors = ref({})
const router= useRouter()

const getSkills=async ()=>{
const response = await axios.get('http://127.0.0.1:8000/api/v1/skills');
skills.value = response.data.data;
}
const getSkill = async (id)=>{
const response = await axios.get('http://127.0.0.1:8000/api/v1/skills/' + id);
skill.value=response.data.data;
}

const saveSkill = async (data) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/skills', data);
      await router.push({ name: 'skillsIndex' });
      skill.value = response.data.data;
    } 
    catch (error) {
        if (error.response && error.response.status === 422) {
          errors.value = error.response.data.errors;
        }
      }
  };
  
const EditSkill=async (id)=>{
    try{
        await axios.put('http://127.0.0.1:8000/api/v1/skills/' +id , skill.value)
        await  router.push({name:'skillsIndex'});

    }
    catch(error){
        if(error.response.status === 422){
            errors.value= error.response.data.errors;
        }
    }


}
const deleteSkill=async (id)=>{
    if(window.confirm("Are you sure ?"))
    await axios.delete('http://127.0.0.1:8000/api/v1/skills/' +id )
    await getSkills();
}
return{
skill,
skills,
getSkill,
getSkills,
saveSkill,
EditSkill,
deleteSkill,
errors 
};

}