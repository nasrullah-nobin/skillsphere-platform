export const getCourses = async ()=> {
const res = await fetch ('http://localhost:3000/course.json');
const data = await res.json();
return data
}