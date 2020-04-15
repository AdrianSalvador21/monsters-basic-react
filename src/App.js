import React, {useEffect, useState} from 'react';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SeachBox from "./components/search-box/search-box.component";

function App() {
  // State para Proyecto
  const [users, saveUsers] = useState([]);
  const [searchField, setSeatchField] = useState('');
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    getData();
  }, []);


  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        console.log(users);
        saveUsers(users);
        setFilterData(users);
      });
  };

  const filterDataEvent = (e) => {
    console.log(e.target.value);
    console.log(searchField);
    if (e.target.value === '') {
      console.log('VACIO');
      setFilterData(users);
      return;
    }
    const filteredMonsters = users.filter(monster => monster.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilterData(filteredMonsters);
  };

  return (
    <div className="App">
      <h1>Monsters Info</h1>

      <SeachBox
        setSeatchField={setSeatchField}
        filterDataEvent={filterDataEvent}
      />

      <CardList users={filterData} />
    </div>
  );
}

export default App;
