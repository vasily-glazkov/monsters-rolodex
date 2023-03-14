import "./search-box.css";

const SearchBox = ({handleSearchChange, placeholder, className}) => {
	return (
		<>
			<input
				className={`search-box ${className}`}
				type="search"
				placeholder={placeholder}
				onChange={handleSearchChange}
			/>
		</>
	);
}
export default SearchBox;
