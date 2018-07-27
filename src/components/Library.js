import React, {Component} from 'react'; 
import { Link } from 'react-router-dom';
import albumData from './../data/albums'; 

class Library extends Component {
	constructor(props) {
		super(props);
		this.state = { albums: albumData };
	}

	render() {
		var cardStyle = {
			width: '18rem'
		};

		return (
			<section className="container library my-5">
				<div className="card-deck">
					{
						this.state.albums.map((album,index) => 
							//use a template literal to build a unique link path for each album based on a base URL, /album/ and the album's slug property
						
						<div className="card" style={cardStyle}>
							<Link to={`/album/${album.slug}`} key={index}> 
								<img className="card-img-top" src={album.albumCover} alt={album.title} />
								<div className="card-body">
									<h5 className="card-title">{album.title}</h5>
									<p className="card-text">{album.artist}</p>
									<p className="card-text">{album.songs.length} songs</p>
								</div>
							</Link> 
						</div>
						)
					}
				</div>
			</section>
		);
	}
}

export default Library;
