import { useState , useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchGetCourses } from '../../../store/course';
import { fetchGetTasks } from '../../../store/task';
import { fetchUsers } from '../../../store/user';


import './Search.css'

const Search = ({type,selector,selected}) => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const [chosen, setChosen] = useState(new Map());
    const [dataList, setDataList] = useState(false);
    const courses = useSelector(state => state.course)
    const users = useSelector(state => state.user);
    const tasks = useSelector(state=>state.task)

    useEffect (() => {
      if(type==='course' && courses?.all_courses){
          setDataList(Object.values(courses.all_courses));
      } else if(type==='user' && users.all_users){
          setDataList(Object.values(users.all_users));
      } else if(type==='task' && tasks.all_tasks){
          setDataList(Object.values(tasks.all_tasks));
      }},[courses,users,tasks])

    useEffect (() => {
        if(type==='course') dispatch(fetchGetCourses())
        if(type==='user') dispatch(fetchUsers())
        if(type==='task') dispatch(fetchGetTasks())
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

      // console.log('data: ', data)
      chosen.delete(data.id)
      setChosen(chosen)
      selected.delete(data.id)
      selector(selected);
      dataList.push(data)
      setDataList([...dataList])

      // console.log('dataList: ', dataList)
      // console.log('chosen: ', chosen)
      // console.log('selected: ', selected)
    }


    return (
        <div className='search-container'>
            <input placeholder="Enter Search..." onChange={event => setQuery(event.target.value)} />
                    <div>Search Results</div>
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
                    <div>Selected</div>
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
            )
}

export default Search;