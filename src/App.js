import { useEffect, useState} from 'react';

import './App.css';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

const url = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
	const [searchField, setSearchField] = useState('');
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);
	
	useEffect(() => {
		const fetchMonsters = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setMonsters(data);
			} catch (e) {
				console.log(e);
			}
		}
		fetchMonsters();
	}, []);
	
	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField)
		});
		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);
	
	const handleSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString)
	}
	
	
	return (
		<div className="App">
			<h1 className='app-title'>Monsters Rolodex</h1>
			<SearchBox
				handleSearchChange={handleSearchChange}
				placeholder='search monsters'
				className="monsters-search-box"
			/>
			<CardList filteredMonsters={filteredMonsters}/>
		</div>
	)
}


// class App extends Component {
//     constructor() {
//         super();
//
//         this.state = {
//             monsters: [],
//             searchField: ''
//         }
//
//     }
//
//     fetchData = async () => {
//         try {
//             const result = await fetch(url);
//             const data = await result.json();
//             this.setState(() => {
//                 return { monsters: data };
//             })
//         } catch (e) {
//             console.log(e);
//         }
//     }
//
//     componentDidMount() {
//         this.fetchData();
//     }
//
//     handleSearchChange = (event) => {
//         const searchField = event.target.value.toLocaleLowerCase();
//         this.setState(() => {
//             return { searchField };
//         })
//     }
//
//     render() {
//
//         const { monsters, searchField } = this.state;
//         const { handleSearchChange } = this;
//
//         const filteredMonsters = monsters.filter((monster) => {
//             return monster.name.toLocaleLowerCase().includes(searchField)
//         });
//
//         return (
//             <div className="App">
//                 <h1 className='app-title'>Monsters Rolodex</h1>
//                 <SearchBox
//                     handleSearchChange={handleSearchChange}
//                     placeholder='search monsters'
//                     className="monsters-search-box"
//                 />
//                 <CardList filteredMonsters={filteredMonsters} />
//             </div>
//         );
//     }
//
// }


export default App;
