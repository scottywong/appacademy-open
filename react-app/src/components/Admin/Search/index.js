import { useState , useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchGetCourses } from '../../../store/course';
import { fetchUsers } from '../../../store/user';


import './Search.css'

const Search = ({type,selector,selected}) => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const [chosen, setChosen] = useState(new Map());
    const [dataList, setDataList] = useState(false);
    const courses = useSelector(state => state.course)
    const users = useSelector(state => state.user);

    useEffect (() => {
      if(type==='course' && courses?.all_courses){
          setDataList(Object.values(courses.all_courses));
      } else if(type==='user' && users.all_users){
          setDataList(Object.values(users.all_users));
      }
    },[courses,users])

    useEffect (() => {
        if(type==='course') dispatch(fetchGetCourses())
        if(type==='user') dispatch(fetchUsers())
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

      console.log('data: ', data)
      chosen.delete(data.id)
      setChosen(chosen)
      selected.delete(data.id)
      selector(selected);
      dataList.push(data)
      setDataList([...dataList])

      console.log('dataList: ', dataList)
      console.log('chosen: ', chosen)
      console.log('selected: ', selected)
    }


    return (
        <div className='search-container'>
            <input placeholder="Enter Search..." onChange={event => setQuery(event.target.value)} />
                    <div>Search Results</div>
                    { dataList && 
                        dataList.filter(d => {
                            if (query ==='') {
                              return d;
                            } else if (type === 'course' && d.title.toLowerCase().includes(query.toLowerCase())) {
                              return d;
                            } else if (
                              type === 'user' && 
                              d.username.toLowerCase().includes(query.toLowerCase())
                              ){
                              return d;
                            }
                          }).map((d) => 
                                <div className='box' onClick={() =>onClickSelect(d.id,d)} key={d.id} id={`box-${d.id}`}>
                                {type === 'course' && d.title && <h1>{d.title}</h1>}
                                {type === 'user' && d.username && <h1>{d.username}</h1>}
                                </div>
                        )
                    }
                    <div>Selected</div>
                    {
                     chosen &&

                     Array.from(chosen.entries()).map( choice => 
                             
                            <div className='selected' onClick={() => onClickUnselect(choice[1])} id={`box-${choice[0]}`}>
                                {type === 'course' &&  choice[1].title && <h1>{choice[1].title}</h1>}
                                {type === 'user' && choice[1].username && <h1>{choice[1].username}</h1>}
        
                            </div>
                        )

                    }
            </div>
            )
}

export default Search;