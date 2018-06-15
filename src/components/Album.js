import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar'


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
			album: album,
			currentSong: album.songs[0],
			isPlaying: false,
			isHovered: false
		};

		//Create an audio element
		this.audioElement = document.createElement('audio');
		//Assign the first song's src to the audio element
		this.audioElement.src = album.songs[0].audioSrc;

	}

	play() {
		this.audioElement.play();
		this.setState({isPlaying: true});
	}

	pause() {
		this.audioElement.pause();
		this.setState({isPlaying: false});
	}

	// Receives current song as a 'song' object and sets the audioElements src and the currentSong(in state) 
	setSong(song) {
		this.audioElement.src = song.audioSrc;
		this.setState({ currentSong: song });
	}

	// Click event handler => determines to call play(), pause() or setState() 

	handleSongClick(song) {
		const isSameSong = this.state.currentSong === song;
		if(this.state.isPlaying && isSameSong) {
			this.pause();

		}
		else {
			if ( !isSameSong ){
				this.setSong(song);
			}
			this.play();
		}
	}

	playPauseButtonHandler(song, index) {
		const play = <span className="icon ion-md-play-circle"></span>;
		const pause = <span className="icon ion-md-pause"></span>;

		return (
				(this.state.currentSong === song) ? 
				(this.state.isPlaying ? pause: play)
				:
				(this.state.isHovered === index+1 ? play : index+1)
		);
	}

	handlePrevClick() {
		const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
		const newIndex = Math.max(0, currentIndex-1);
		const newSong = this.state.album.songs[newIndex];
		this.setSong(newSong);
		this.play();
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
								<tr className="song" 
									key={index} 
									onClick={() => this.handleSongClick(song)}
									onMouseEnter={() => this.setState({isHovered: index+1})}
									onMouseLeave={() => this.setState({isHovered:true})} >
									<td>{this.playPauseButtonHandler(song, index)}</td>
									<td>{song.title}</td>
									<td>{song.duration} secs</td>
								</tr>
							)
						}
					</tbody>
				</table>
				<PlayerBar 
				currentSong={this.state.currentSong} 
				isPlaying={this.state.isPlaying} 
				handleSongClick={() => this.handleSongClick(this.state.currentSong)}
				handlePrevClick={() => this.handlePrevClick()}/>
			</section>
		);
	}
}


export default Album;