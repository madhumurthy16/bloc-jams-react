import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
	constructor(props) {
		super(props);

		/* Get the album object that has a slug property that matches the slug passed from <Route path="/album/:slug" component={Album} />
		   This slug is stored in this.props.match.param object as a value of the slug property. This is then accesible inside 
		   our component (via props) as this.props.match.param.slug */

		const album = albumData.find( album => {
			return album.slug === this.props.match.params.slug
		});

		//set the state objects album property to the album retrived from above
		this.state = {
			album: album
		};
	}
		
		render() {
			return (
				<section className="album">
					<section id="album-info">
						<img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.albumTitle} />
						<div className="album-details">
							<h1 id="album-title">{this.state.album.title}</h1>
							<h2 className="artist">{this.state.album.artist}</h2>
							<div id="release-info">{this.state.album.releaseInfo}</div>
						</div>
					</section>
					<table id="song-list">
						<colgroup>
							<col id="song-number-column" />
							<col id="song-title-column" />
							<col id="song-duration-column" />
						</colgroup>
						<tbody>
							{
								this.state.album.songs.map(( song, index ) => 
									<tr>
										<td key={index}>{index+1}</td>
										<td>{song.title}</td>
										<td>{song.duration} secs</td>
									</tr>
								)
							}
						</tbody>
					</table>
				</section>
			);
		}
	}


export default Album;