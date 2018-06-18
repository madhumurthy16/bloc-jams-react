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
			isHovered: false,
			currentTime: 0,
			duration: album.songs[0].duration,
			volume: 0
		};

		//Create an audio element
		this.audioElement = document.createElement('audio');
		//Assign the first song's src to the audio element
		this.audioElement.src = album.songs[0].audioSrc;
		this.audioElement.volume = 0.5;

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

	formatTime(timeInSecs) {
		if(isNaN(timeInSecs)) {
			return "-:--";
		}
		var mins = Math.floor(timeInSecs/60);
		var remainingSecs = timeInSecs % 60;
		var totalSecs = Math.floor(remainingSecs);
		return (totalSecs < 10 ? (mins + ":0" + totalSecs) : (mins + ":" + totalSecs));
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

	handleNextClick() {
		const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
		const newIndex = Math.min(this.state.album.songs.length-1, currentIndex+1);
		const newSong = this.state.album.songs[newIndex];
		this.setSong(newSong);
		this.play();
	}

	handleTimeChange(e) {
		const newTime = this.audioElement.duration * e.target.value;
		this.audioElement.currentTime = newTime;
		this.setState({currentTime: newTime});
	}

	handleVolumeChange(e) {
		const newVolume = e.target.value;
		this.audioElement.volume = newVolume;
		this.setState({volume: newVolume});
	}

	componentDidMount() {
		this.eventListeners = {
			timeupdate: e => {
				this.setState({ currentTime: this.audioElement.currentTime });
			},
			durationchange: e => {
				this.setState({ duration: this.audioElement.duration });
			},
			volumecontrol: e => {
				this.setState({ volume: this.audioElement.volume });
			}
		};
		this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
		this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
		this.audioElement.addEventListener('volumecontrol', this.eventListeners.volumecontrol);
	}

	componentWillUnMount() {
		this.audioElement.src = null;
		this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
		this.audioElement.removeEventListeners('durationchange', this.eventListeners.durationchange);
		this.audioElement.removeEventListeners('volumecontrol', this.eventListeners.volumecontrol);
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
									<td>{this.formatTime(song.duration)}</td>
								</tr>
							)
						}
					</tbody>
				</table>
				<PlayerBar 
				currentSong={this.state.currentSong} 
				isPlaying={this.state.isPlaying}
				currentTime={this.audioElement.currentTime}
				duration={this.audioElement.duration}
				volume={this.audioElement.volume}
				handleSongClick={() => this.handleSongClick(this.state.currentSong)}
				handlePrevClick={() => this.handlePrevClick()}
				handleNextClick={() => this.handleNextClick()} 
				handleTimeChange={(e) => this.handleTimeChange(e)} 
				handleVolumeChange={(e) => this.handleVolumeChange(e)} 
				formatTime = { (timeInSecs) => this.formatTime(timeInSecs) }/>
			</section>
		);
	}
}


export default Album;