import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddMovieForm = (props) => {
	const { push } = useHistory();

	const [movie, setMovie] = useState({
		title: '',
		director: '',
		genre: '',
		metascore: 0,
		description: ''
	});

	const handleChange = (e) => {
		setMovie({
			...movie,
			[e.target.name]: e.target.value
		});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post('http://localhost:9000/api/movies', movie)
			.then(res => {
				props.setMovies(res.data);
				push('/movies');
			})
			.catch(err => console.error(err));
	}

	const { title, director, genre, metascore, description } = movie;

	return (
		<div className='col'>
			<div className="modal-content">
				<form onSubmit={handleSubmit}>
					<div className="modal-header">						
						<h4 className="modal-title"><strong>Add a New Movie</strong></h4>
					</div>
					<div className="modal-body">
						<div className="form-group">
							<label>Title</label>
							<input
								onChange={handleChange}
								value={title}
								name='title'
								type='text'
								className='form-control'
							/>
						</div>
						<div className="form-group">
							<label>Director</label>
							<input
								onChange={handleChange}
								value={director}
								name='director'
								type='text'
								className='form-control'
							/>
						</div>
						<div className="form-group">
							<label>Genre</label>
							<input
								onChange={handleChange}
								value={genre}
								name='genre'
								type='text'
								className='form-control'
							/>
						</div>
						<div className="form-group">
							<label>Metascore</label>
							<input
								onChange={handleChange}
								value={metascore}
								name='metascore'
								type='number'
								className='form-control'
							/>
						</div>
						<div className="form-group">
							<label>Description</label>
							<input
								onChange={handleChange}
								value={description}
								name='description'
								type='text'
								className='form-control'
							/>
						</div>
					</div>
					<div className="modal-footer">
						<button className="btn btn-info">Add Movie</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AddMovieForm;