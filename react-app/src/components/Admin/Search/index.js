import { useState , useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchGetAssignmentsByCourseId, fetchGetAssignmentsByTaskId } from '../../../store/assignment';
import { fetchGetCourses } from '../../../store/course';
import { fetchGetEnrollmentsByCourseId } from '../../../store/enrollment';
import { fetchGetTasks } from '../../../store/task';
import { fetchUsers } from '../../../store/user';

import './Search.css'

const Search = ({type,selector,selected, lookupId}) => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const [chosen, setChosen] = useState(new Map());
    const [dataList, setDataList] = useState(false);
    const [filterList, setFilterList] = useState(false);
    const courses = useSelector(state => state.course)
    const users = useSelector(state => state.user);
    const tasks = useSelector(state=>state.task)
    const assignments = useSelector(state=> state.assignment);
    const enrollments = useSelector (state=> state.enrollments);

    useEffect (() => {
      if(type==='course' && courses?.all_courses){
          setDataList(Object.values(courses.all_courses));
          if(assignments?.assignmentsByTaskId) setFilterList(Object.values(assignments.assignmentsByTaskId))     
      } else if(type==='task' && tasks.all_tasks){
          setDataList(Object.values(tasks.all_tasks));
          if(assignments?.assignmentsByCourseId) setFilterList(Object.values(assignments.assignmentsByCourseId))
      } else if(type==='user' && users.all_users){
        setDataList(Object.values(users.all_users));
        if(enrollments?.enrollments) setFilterList(Object.values(enrollments.enrollments));
      }
    },[courses,users,tasks,assignments,enrollments])

    console.log('filterList: ', filterList)
    console.log('lookupId: ', lookupId)
    console.log('type: ', type)

    useEffect (() => {
        if(type==='course'){
          dispatch(fetchGetCourses())
          if(lookupId) dispatch(fetchGetAssignmentsByTaskId(lookupId))
        } else if(type==='task'){
          dispatch(fetchGetTasks())
          console.log('sss')
          if(lookupId) dispatch(fetchGetAssignmentsByCourseId(lookupId))
        } else if(type==='user'){
          dispatch(fetchUsers())
          if(lookupId) dispatch(fetchGetEnrollmentsByCourseId(lookupId))
        }
    },[dispatch]);
 

    const onClickSelect = (id,data) => {

      chosen.set(id,data)
      setChosen(chosen)

      selected.add(id)
      selector(selected);

      setDataList(dataList?.filter(
        d => {
              if(d){
                return id != d.id
              } else {
                return false
              }
            }))
    }

    const onClickUnselect = (data) =>{
      chosen.delete(data.id)
      setChosen(chosen)
      selected.delete(data.id)
      selector(selected);
      dataList.push(data)
      console.log(dataList)
      setDataList([...dataList].sort(
        function compareFn(a,b){
          let compareA, compareB;

          if(type ==='user'){
            compareA = a.username.toLowerCase();
            compareB = b.username.toLowerCase();
          } else if(type === 'course' || type ==='task'){
            compareA = a.title.toLowerCase();
            compareB = b.title.toLowerCase();
          }
          if (compareA < compareB) {
            return -1;
          }
          if (compareA > compareB) {
            return 1;
          }
          // a must be equal to b
          return 0;
          }
    ))
  }


    return (

        <div className='search-container'>

            <input className='search-box' placeholder="Enter Search..." onChange={event => setQuery(event.target.value)} />
            <div className='search-list-container'>
                 
                    <div className='search-results'>
                    <div className='search-results-title'>Search Results</div>
                      { dataList && 
                          dataList.filter(d => {

                            if (query ==='') {
                                return d;
                              } else if ((type === 'course'|| type==='task') && d.title.toLowerCase().includes(query.toLowerCase())) {
                                return d;
                              } else if (
                                type === 'user' && 
                                d.username.toLowerCase().includes(query.toLowerCase())
                                ){
                                return d;
                              }
                            }).map((d) => 
                                  <div className='box' onClick={() =>onClickSelect(d.id,d)} key={d.id} id={`box-${d.id}`}>
                                  {(type === 'course' || type==='task') && d.title && <p>{d.title}</p>}
                                  {type === 'user' && d.username && <p>{d.username}</p>}
                                  </div>
                          )
                      }
                    </div>

                    <div className='search-selected'> 
                      <div className='search-selected-title'>Selected</div>
                      {
                      chosen &&

                      Array.from(chosen.entries()).map( choice => 
                              
                              <div className='selected' onClick={() => onClickUnselect(choice[1])}  key={choice[0]}  id={`box-${choice[0]}`}>
                                  {(type === 'course' || type==='task') &&  choice[1].title && <p>{choice[1].title}</p>}
                                  {type === 'user' && choice[1].username && <p>{choice[1].username}</p>}
          
                              </div>
                          )
                      }
                      </div>
                </div>
            </div>
            )
}

export default Search;